# Meow Meow

一个多页中文养猫百科站，使用 Vite + React + TypeScript 构建。

## 功能

- 首页全站搜索与核心入口
- 猫咪品种大全与详情页
- 新手养猫从零到一教程
- 饮食、清洁、环境、互动、行为、用品和医疗观察类养猫技巧
- 猫粮、猫罐头、猫条、猫咪保健品和日常用品汇总
- 猫咪生病急救分诊与就医提示
- AI 养猫问答入口，通过免费模型代理回答网页未覆盖的问题

## 运行

```bash
pnpm install
pnpm dev
```

构建检查：

```bash
pnpm build
```

## GitHub Pages 部署

项目已内置 GitHub Actions Pages 工作流。推送到仓库 `main` 分支后，GitHub 会自动构建 `dist` 并发布到 Pages。

如果仓库名是 `meow-meow`，发布地址通常是：

```text
https://xiaobaozi-0114.github.io/meow-meow/
```

如果仓库名是 `xiaobaozi-0114.github.io`，发布地址通常是：

```text
https://xiaobaozi-0114.github.io/
```

仓库设置里需要把 Pages 的 Source 设为 `GitHub Actions`。

## AI 问答免费方案

当前方案按“普通用户打开就能用、你不花钱、免费额度用完就停”设计：

- 前端仍可部署到 GitHub Pages。
- AI 请求发到 Cloudflare Worker 免费层。
- Worker 调用 OpenRouter 免费模型，默认使用 `openrouter/free`。
- Worker 强制只允许免费模型，配置成付费模型会直接拒绝。
- OpenRouter 免费额度用完时，页面会提示“今日免费额度已用完”，不会产生付费调用。
- 可以选配 Cloudflare KV 的免费额度，给每个访客加每日请求上限。

部署步骤：

1. 复制 `wrangler.toml.example` 为 `wrangler.toml`，把 `SITE_URL` 和 `ALLOWED_ORIGIN` 改成你的 GitHub Pages 地址。
2. 在 OpenRouter 创建 API Key，不充值也可以使用免费模型额度。
3. 部署 Worker 前设置密钥：

```bash
wrangler secret put OPENROUTER_API_KEY
```

4. 部署 Worker：

```bash
wrangler deploy
```

5. 把前端环境变量改成 Worker 地址：

```env
VITE_CHAT_API_URL=https://catpedia-chat.your-name.workers.dev
```

本地开发时，`VITE_CHAT_API_URL=/api/chat` 会继续走 Vite 代理；线上 GitHub Pages 必须配置为 Worker URL。

本地调试 AI 助手：

```bash
cp workers/.dev.vars.example workers/.dev.vars
# 填入 OPENROUTER_API_KEY 后，开两个终端分别运行：
pnpm worker:dev
pnpm dev
```

Vite 会把 `/api/chat` 代理到 `http://127.0.0.1:8787` 的本地 Worker。

## 内容边界

页面内容保留来源入口，猫咪用品汇总按品牌信息、价格区间、网络高频评价、优缺点、注意事项和公开讨论整理，不构成广告或医疗建议。

医疗页面只提供症状识别、临时处理、禁止事项和就医优先级；出现急症时应立即联系兽医或急诊医院。
