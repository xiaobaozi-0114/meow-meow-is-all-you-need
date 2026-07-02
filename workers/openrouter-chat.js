const DEFAULT_FREE_MODEL = 'openrouter/free'
const FREE_MODEL_FALLBACKS = [
  'meta-llama/llama-3.2-3b-instruct:free',
  'liquid/lfm-2.5-1.2b-instruct:free',
  'google/gemma-4-31b-it:free',
  'openai/gpt-oss-20b:free',
  'openrouter/free',
]
const MAX_MESSAGES = 12
const MAX_CONTENT_LENGTH = 6000
const WORKER_SYSTEM_PROMPT =
  '你是 Meow Meow 的智能养猫助手，面向中国养猫家庭，用中文回答。可以结合通用养猫知识回答，不局限于网页已有内容。回答要直接、实用、分步骤，不输出思考过程、推理过程、草稿、模型说明或技术细节。遇到急症、用药、剂量、诊断和处方问题，只做风险分诊和就医建议，明确提示尽快联系兽医。'

export default {
  async fetch(request, env) {
    const corsHeaders = buildCorsHeaders(request, env)

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders })
    }

    if (request.method !== 'POST') {
      return jsonResponse({ error: 'Method not allowed' }, 405, corsHeaders)
    }

    if (!env.OPENROUTER_API_KEY) {
      return jsonResponse({ error: 'AI service is not configured' }, 503, corsHeaders)
    }

    const models = getFreeModels(env)
    if (!models.length) {
      return jsonResponse({ error: 'Only free AI models are allowed' }, 503, corsHeaders)
    }

    const limited = await checkDailyLimit(request, env)
    if (limited) {
      return jsonResponse(
        { error: '今日免费额度已用完，请明天再试。' },
        429,
        corsHeaders,
      )
    }

    let payload
    try {
      payload = await request.json()
    } catch {
      return jsonResponse({ error: 'Invalid JSON body' }, 400, corsHeaders)
    }

    const messages = sanitizeMessages(payload.messages)
    if (!messages.length) {
      return jsonResponse({ error: 'Missing messages' }, 400, corsHeaders)
    }

    for (const model of models) {
      const upstream = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${env.OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': env.SITE_URL || request.headers.get('Origin') || '',
          'X-Title': env.SITE_TITLE || 'Meow Meow',
        },
        body: JSON.stringify({
          model,
          messages: withWorkerSystemPrompt(messages),
          temperature: clampNumber(payload.temperature, 0, 1, 0.25),
          max_tokens: clampNumber(payload.max_tokens, 128, 1600, 900),
          reasoning: { exclude: true },
        }),
      })

      if (upstream.status === 429) continue

      const upstreamText = await upstream.text()
      if (!upstream.ok) continue

      const sanitized = sanitizeUpstreamText(upstreamText)
      if (sanitized.emptyAnswer) continue

      return new Response(sanitized.text, {
        status: upstream.status,
        headers: {
          ...corsHeaders,
          'Content-Type': upstream.headers.get('Content-Type') || 'application/json',
        },
      })
    }

    return jsonResponse(
      { error: '免费 AI 模型暂时繁忙或额度已用完，请稍后再试。' },
      429,
      corsHeaders,
    )
  },
}

function isFreeModel(model) {
  return model === DEFAULT_FREE_MODEL || model.endsWith(':free')
}

function getFreeModels(env) {
  const configured = String(env.OPENROUTER_MODEL || DEFAULT_FREE_MODEL)
    .split(',')
    .map((model) => model.trim())
    .filter(Boolean)

  return Array.from(new Set([...configured, ...FREE_MODEL_FALLBACKS])).filter(isFreeModel)
}

function withWorkerSystemPrompt(messages) {
  const [first, ...rest] = messages
  if (first?.role === 'system') {
    return [{ ...first, content: `${WORKER_SYSTEM_PROMPT}\n\n${first.content}` }, ...rest]
  }

  return [{ role: 'system', content: WORKER_SYSTEM_PROMPT }, ...messages]
}

function sanitizeUpstreamText(text) {
  try {
    const payload = JSON.parse(text)
    const message = payload?.choices?.[0]?.message
    if (typeof message?.content === 'string') {
      message.content = message.content
        .replace(/<think>[\s\S]*?<\/think>/gi, '')
        .replace(/^\s*(?:思考过程|推理过程|草稿)[:：][\s\S]*?(?:\n\n|$)/, '')
        .trim()
    }
    if (message && 'reasoning' in message) delete message.reasoning
    if (message && 'reasoning_details' in message) delete message.reasoning_details
    return { text: JSON.stringify(payload), emptyAnswer: message && isBadAnswer(message.content) }
  } catch {
    return { text, emptyAnswer: false }
  }
}

function isBadAnswer(content) {
  if (typeof content !== 'string' || !content.trim()) return true
  if (/<pad>/i.test(content)) return true
  if (/([^\s])\1{12,}/.test(content)) return true
  return false
}

function sanitizeMessages(messages) {
  if (!Array.isArray(messages)) return []

  return messages
    .slice(-MAX_MESSAGES)
    .map((message) => ({
      role: ['system', 'user', 'assistant'].includes(message?.role) ? message.role : 'user',
      content: String(message?.content || '').slice(0, MAX_CONTENT_LENGTH),
    }))
    .filter((message) => message.content.trim())
}

function clampNumber(value, min, max, fallback) {
  const numeric = Number(value)
  if (!Number.isFinite(numeric)) return fallback
  return Math.min(max, Math.max(min, numeric))
}

async function checkDailyLimit(request, env) {
  if (!env.CHAT_LIMIT_KV || !env.DAILY_CHAT_LIMIT) return false

  const limit = Number(env.DAILY_CHAT_LIMIT)
  if (!Number.isFinite(limit) || limit <= 0) return false

  const key = `${new Date().toISOString().slice(0, 10)}:${await clientHash(request)}`
  const current = Number((await env.CHAT_LIMIT_KV.get(key)) || '0')
  if (current >= limit) return true

  await env.CHAT_LIMIT_KV.put(key, String(current + 1), { expirationTtl: 36 * 60 * 60 })
  return false
}

async function clientHash(request) {
  const ip = request.headers.get('CF-Connecting-IP') || 'anonymous'
  const bytes = new TextEncoder().encode(ip)
  const digest = await crypto.subtle.digest('SHA-256', bytes)
  return Array.from(new Uint8Array(digest))
    .slice(0, 12)
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('')
}

function buildCorsHeaders(request, env) {
  const origin = request.headers.get('Origin') || '*'
  const allowedOrigin = env.ALLOWED_ORIGIN || origin
  return {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Vary': 'Origin',
  }
}

function jsonResponse(body, status, headers) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
  })
}
