import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Bot,
  Cat,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Filter,
  HeartPulse,
  Home,
  Info,
  LoaderCircle,
  MessageCircle,
  Search,
  Send,
  ShieldCheck,
  ShoppingBasket,
  Sparkles,
} from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import {
  Link,
  NavLink,
  Route,
  BrowserRouter as Router,
  Routes,
  useParams,
} from 'react-router-dom'
import './App.css'
import {
  breeds,
  careTips,
  emergencyTips,
  globalSources,
  guideArticles,
  guideSocialRefs,
  rankings,
  tipSocialRefs,
  type Breed,
  type ProductCategory,
  type ProductRanking,
  type RiskLevel,
  type Source,
} from './data'

const navItems = [
  { to: '/', label: '首页', icon: Home },
  { to: '/ask', label: '智能养猫助手', icon: Bot },
  { to: '/breeds', label: '品种大全', icon: Cat },
  { to: '/guide', label: '新手教程', icon: BookOpen },
  { to: '/tips', label: '养猫技巧', icon: Sparkles },
  { to: '/rankings', label: '猫咪用品', icon: ShoppingBasket },
  { to: '/emergency', label: '生病自救', icon: HeartPulse },
]

const productTabs: ProductCategory[] = ['猫粮', '猫罐头', '猫条', '猫咪保健品', '生活用品']
const chinaCommonBreedIds = ['bsho', 'asho', 'ragd', 'lihu', 'siam', 'pers', 'mcoo', 'sfol', 'munc', 'esho']
const breedGallerySize = 10
const chatApiUrl = import.meta.env.VITE_CHAT_API_URL || '/api/chat'

const chinaCommonBreedRank = (id: string) => {
  const index = chinaCommonBreedIds.indexOf(id)
  return index === -1 ? 999 : index
}

function App() {
  return (
    <Router>
      <div className="app-shell">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/breeds" element={<BreedsPage />} />
            <Route path="/breeds/:id" element={<BreedDetailPage />} />
            <Route path="/guide" element={<GuidePage />} />
            <Route path="/tips" element={<TipsPage />} />
            <Route path="/rankings" element={<RankingsPage />} />
            <Route path="/emergency" element={<EmergencyPage />} />
            <Route path="/ask" element={<ChatPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

function Header() {
  return (
    <header className="site-header">
      <Link className="brand" to="/">
        <span className="brand-mark" aria-hidden="true">
          <Cat size={25} strokeWidth={2.4} />
        </span>
        <span>
          <strong>Meow Meow</strong>
          <small>从新手到专家的养猫百科</small>
        </span>
      </Link>
      <nav className="nav">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <NavLink key={item.to} to={item.to} end={item.to === '/'}>
              <Icon size={18} />
              <span>{item.label}</span>
            </NavLink>
          )
        })}
      </nav>
    </header>
  )
}

function HomePage() {
  const [query, setQuery] = useState('')
  const matches = useMemo(() => searchSite(query), [query])
  const popularBreeds = breeds
    .filter((breed) => chinaCommonBreedIds.includes(breed.id))
    .sort((a, b) => chinaCommonBreedRank(a.id) - chinaCommonBreedRank(b.id))
  const topProducts = productTabs
    .map((category, _, categories) => {
      const usedBrands = categories
        .slice(0, categories.indexOf(category))
        .map((usedCategory) => rankings.find((item) => item.category === usedCategory)?.brand)
        .filter(Boolean)
      return (
        rankings.find(
          (item) => item.category === category && !usedBrands.includes(item.brand),
        ) ?? rankings.find((item) => item.category === category)
      )
    })
    .filter((item): item is ProductRanking => Boolean(item))

  return (
    <div className="page">
      <section className="hero-section">
        <div className="hero-copy">
          <h1>Meow Meow</h1>
          <p>
            面向中国养猫家庭，汇集常见猫咪品种、接猫教程、日常护理、用品信息与急救分诊。
          </p>
          <div className="hero-actions">
            <Link className="primary-action" to="/breeds">
              查看猫咪品种 <ArrowRight size={18} />
            </Link>
            <Link className="secondary-action" to="/emergency">
              急救分诊
            </Link>
            <Link className="secondary-action" to="/ask">
              智能养猫助手 <MessageCircle size={18} />
            </Link>
          </div>
        </div>
        <div className="hero-search-panel" aria-label="全站搜索和智能养猫助手">
          <Link className="home-ai-callout" to="/ask">
            <span>
              <Bot size={22} />
              智能养猫助手
            </span>
            <strong>猫咪问题想不明白？直接问</strong>
            <small>从接猫准备、喂养护理到异常症状判断，把你的具体情况说清楚，马上获得可执行建议。</small>
            <em>
              去问一问 <ArrowRight size={16} />
            </em>
          </Link>
          <label className="search-box">
            <Search size={18} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="搜索：布偶、猫条、尿闭、换粮..."
            />
          </label>
          <div className="search-results">
            {(query.trim() ? matches : matches.slice(0, 6)).map((match) => (
              <Link key={`${match.title}-${match.to}`} to={match.to}>
                {match.type ? <span>{match.type}</span> : null}
                <strong>{match.title}</strong>
                <small>{match.desc}</small>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SectionHeader
        action={<Link to="/breeds">↗ 查看更多品种</Link>}
      />
      <div className="breed-grid">
        {popularBreeds.map((breed) => (
          <BreedCard key={breed.id} breed={breed} />
        ))}
      </div>

      <SectionHeader
        action={<Link to="/rankings">↗ 查看更多用品</Link>}
      />
      <div className="ranking-preview">
        {topProducts.map((item) => (
          <ProductCard key={`${item.category}-${item.rank}-${item.brand}-${item.product}`} item={item} />
        ))}
      </div>
    </div>
  )
}

function BreedsPage() {
  const [query, setQuery] = useState('')
  const [region, setRegion] = useState('全部')
  const [coat, setCoat] = useState('全部')
  const [size, setSize] = useState('全部')
  const [care, setCare] = useState('全部')
  const [trait, setTrait] = useState('全部')

  const regions = optionList(breeds.map((breed) => breed.region))
  const coats = optionList(breeds.map((breed) => breed.coat))
  const sizes = optionList(breeds.map((breed) => breed.bodySize))
  const cares = optionList(breeds.map((breed) => breed.careLevel))
  const traits = optionList(breeds.flatMap((breed) => breed.temperament)).slice(0, 18)

  const filtered = breeds
    .filter((breed) => {
      const text = `${breed.cnName} ${breed.enName} ${breed.origin} ${breed.temperament.join(' ')}`
      return (
        text.toLowerCase().includes(query.toLowerCase()) &&
        (region === '全部' || breed.region === region) &&
        (coat === '全部' || breed.coat === coat) &&
        (size === '全部' || breed.bodySize === size) &&
        (care === '全部' || breed.careLevel === care) &&
        (trait === '全部' || breed.temperament.includes(trait))
      )
    })
    .sort(
      (a, b) =>
        chinaCommonBreedRank(a.id) - chinaCommonBreedRank(b.id) ||
        a.cnName.localeCompare(b.cnName, 'zh-Hans-CN'),
    )

  return (
    <div className="page">
      <PageTitle
        icon={<Cat />}
        title="品种大全"
        desc="按外形、性格、体型和养护难度筛选，快速找到适合你的猫咪品种。"
      />
      <div className="filter-panel">
        <label className="search-box">
          <Search size={18} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="搜索中文名、英文名、产地或性格"
          />
        </label>
        <div className="filters">
          <SelectFilter label="地区" value={region} options={regions} onChange={setRegion} />
          <SelectFilter label="毛长" value={coat} options={coats} onChange={setCoat} />
          <SelectFilter label="体型" value={size} options={sizes} onChange={setSize} />
          <SelectFilter label="难度" value={care} options={cares} onChange={setCare} />
          <SelectFilter label="性格" value={trait} options={traits} onChange={setTrait} />
        </div>
      </div>
      <div className="result-line">
        <Filter size={16} />
        当前显示 {filtered.length} / {breeds.length} 个品种
      </div>
      <div className="breed-grid">
        {filtered.map((breed) => (
          <BreedCard key={breed.id} breed={breed} />
        ))}
      </div>
    </div>
  )
}

function BreedDetailPage() {
  const { id } = useParams()
  const breed = breeds.find((item) => item.id === id)

  if (!breed) {
    return (
      <div className="page">
        <PageTitle icon={<Cat />} title="没有找到这个品种" desc="返回品种大全继续查找。" />
        <Link className="primary-action inline-action" to="/breeds">
          返回品种大全
        </Link>
      </div>
    )
  }

  return (
    <div className="page detail-page">
      <Link className="back-link" to="/breeds">
        ← 返回品种大全
      </Link>
      <section className="breed-detail">
        <BreedImageCarousel breed={breed} />
        <div>
          <span className="eyebrow">{breed.origin} · {breed.coat} · {breed.bodySize}</span>
          <h1>{breed.cnName}</h1>
          <p className="latin-name">{breed.enName}</p>
          <div className="tag-row">
            {breed.temperament.map((trait) => (
              <span key={trait}>{trait}</span>
            ))}
          </div>
          <dl className="facts">
            <div>
              <dt>体重</dt>
              <dd>{breed.weight}</dd>
            </div>
            <div>
              <dt>寿命</dt>
              <dd>{breed.lifeSpan}</dd>
            </div>
            <div>
              <dt>养护难度</dt>
              <dd>{breed.careLevel}</dd>
            </div>
          </dl>
          <p className="suitable">{breed.suitableFor}</p>
        </div>
      </section>

      <div className="two-column">
        <InfoBlock title="常见健康与养护风险" icon={<HeartPulse />}>
          <ul className="check-list">
            {breed.healthRisks.map((risk) => (
              <li key={risk}>{risk}</li>
            ))}
          </ul>
        </InfoBlock>
        <InfoBlock title="来源与图片" icon={<ShieldCheck />}>
          <SourceList sources={[breed.imageSource, ...breed.sources]} />
        </InfoBlock>
      </div>
    </div>
  )
}

function GuidePage() {
  return (
    <div className="page">
      <PageTitle
        icon={<BookOpen />}
        title="新手养猫从零到一"
        desc="按时间线拆解接猫前、到家第一晚、隔离观察、喂养换粮、猫砂如厕、健康护理、行为训练和长期记录。"
      />
      <div className="timeline">
        {guideArticles.map((article, index) => (
          <article className="timeline-card" key={article.id}>
            <div className="guide-visual">
              <ImageWithFallback
                src={article.image ?? 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=900&q=82'}
                alt={article.imageAlt ?? article.title}
                objectPosition={article.imagePosition ?? 'center center'}
              />
              <span className="step">{String(index + 1).padStart(2, '0')}</span>
            </div>
            <div className="guide-card-body">
              <div className="card-meta">
                <span>{article.category}</span>
                <span>{article.stage}</span>
                <span>难度 {article.difficulty}</span>
              </div>
              <h2>{article.title}</h2>
              <p>{article.summary}</p>
              {article.steps?.length ? (
                <section className="guide-block">
                  <h3>按步骤做</h3>
                  <ol className="number-list">
                    {article.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </section>
              ) : null}
              <div className="guide-mini-grid">
                {article.checklist?.length ? (
                  <section className="guide-block guide-mini-panel">
                    <h3>检查清单</h3>
                    <ul className="check-list">
                      {article.checklist.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </section>
                ) : null}
                {article.avoid?.length ? (
                  <section className="guide-block guide-mini-panel">
                    <h3>避坑提醒</h3>
                    <ul className="danger-list">
                      {article.avoid.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </section>
                ) : null}
              </div>
              <section className="guide-block">
                <h3>关键原则</h3>
                <ul className="check-list">
                  {article.blocks.map((block) => (
                    <li key={block}>{block}</li>
                  ))}
                </ul>
              </section>
              <SourceList sources={article.sources} />
            </div>
          </article>
        ))}
      </div>
      <SocialReferencePanel title="小红书热门参考帖" sources={guideSocialRefs} />
    </div>
  )
}

function TipsPage() {
  return (
    <div className="page">
      <PageTitle
        icon={<Sparkles />}
        title="养猫小技巧"
        desc="把日常经验拆成饮食、清洁、环境、互动、行为、用品和医疗观察等场景，方便反复查。"
      />
      <div className="tip-grid">
        {careTips.map((group) => (
          <article className="info-card" key={group.category}>
            <h2>{group.category}</h2>
            <ul className="check-list">
              {group.tips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <SocialReferencePanel title="小红书热门参考帖" sources={tipSocialRefs} />
    </div>
  )
}

function RankingsPage() {
  const [tab, setTab] = useState<ProductCategory>('猫粮')
  const current = rankings
    .filter((item) => item.category === tab)
    .sort((a, b) => a.rank - b.rank)

  return (
    <div className="page">
      <PageTitle
        icon={<ShoppingBasket />}
        title="猫咪用品汇总"
        desc="按猫粮、猫罐头、猫条、猫咪日常保健品和生活用品整理常见品牌信息。"
      />
      <div className="notice">
        <Info size={18} />
        慢病、幼猫、孕猫、泌尿问题、肾病或过敏猫，请先咨询兽医再换粮或使用保健品。
      </div>
      <div className="tabs">
        {productTabs.map((item) => (
          <button
            className={tab === item ? 'active' : ''}
            key={item}
            type="button"
            onClick={() => setTab(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="ranking-list">
        {current.map((item) => (
          <ProductCard key={`${item.category}-${item.rank}-${item.brand}-${item.product}`} item={item} expanded />
        ))}
      </div>
    </div>
  )
}

type ChatMessage = {
  id: string
  role: 'user' | 'assistant'
  content: string
}

const starterQuestions = [
  '两个月小猫到家第一天怎么安排？',
  '猫突然尿频但尿不出来怎么办？',
  '英短和布偶哪个更适合新手？',
  '猫粮、主食罐和猫条怎么搭配？',
]

function ChatPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content:
        '我是猫猫AI，你的随身养猫顾问。无论是接猫前准备、换粮软便、用品挑选，还是猫咪突然不对劲，都可以把情况说给我，我会帮你快速梳理下一步怎么做。',
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const chatEndRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [messages, isLoading])

  const ask = async (question: string) => {
    const trimmed = question.trim()
    if (!trimmed || isLoading) return

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: 'user',
      content: trimmed,
    }
    setMessages((items) => [...items, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const answer = await askCatAssistant(trimmed)
      setMessages((items) => [
        ...items,
        {
          id: crypto.randomUUID(),
          role: 'assistant',
          content: answer,
        },
      ])
    } catch {
      setMessages((items) => [
        ...items,
        {
          id: crypto.randomUUID(),
          role: 'assistant',
          content:
            '这次没有成功生成回答。你可以换一种问法，或先查看品种大全、新手教程、养猫技巧、猫咪用品和生病自救页面。',
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="page">
      <div className="chat-layout">
        <section className="chat-panel" aria-label="猫猫AI">
          <div className="chat-log">
            {messages.map((message) => (
              <div className={`chat-message ${message.role}`} key={message.id}>
                <span>{message.role === 'assistant' ? '猫猫AI' : '你'}</span>
                <p>{message.content}</p>
              </div>
            ))}
            {isLoading ? (
              <div className="chat-message assistant">
                <span>猫猫AI</span>
                <p className="loading-line">
                  <LoaderCircle size={16} />
                  正在整理回答...
                </p>
              </div>
            ) : null}
            <div ref={chatEndRef} />
          </div>
          <form
            className="chat-form"
            onSubmit={(event) => {
              event.preventDefault()
              void ask(input)
            }}
          >
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="例如：小猫软便但精神正常，先观察什么？"
            />
            <button disabled={isLoading || !input.trim()} type="submit" aria-label="发送问题">
              <Send size={18} />
            </button>
          </form>
        </section>
        <aside className="chat-side">
          <InfoBlock title="快捷提问" icon={<MessageCircle />}>
            <div className="question-chips">
              {starterQuestions.map((question) => (
                <button key={question} type="button" onClick={() => void ask(question)}>
                  {question}
                </button>
              ))}
            </div>
          </InfoBlock>
        </aside>
      </div>
    </div>
  )
}

function EmergencyPage() {
  return (
    <div className="page">
      <PageTitle
        icon={<HeartPulse />}
        title="猫咪生病自救与急救分诊"
        desc="只提供识别、临时处理、禁止事项和就医优先级，不替代兽医诊断。"
      />
      <div className="emergency-banner">
        <AlertTriangle size={24} />
        <div>
          <strong>出现呼吸异常、尿不出、误食毒物、严重外伤、持续抽搐时，请直接去急诊。</strong>
          <span>不要在网上等待诊断，也不要自行使用人用药。</span>
        </div>
      </div>
      <div className="emergency-grid">
        {emergencyTips.map((tip) => (
          <article className={`emergency-card emergency-risk-${tip.risk}`} key={tip.id}>
            <div className="risk-head">
              <RiskBadge risk={tip.risk} />
              <h2>{tip.symptom}</h2>
            </div>
            <h3>可以先做</h3>
            <ul className="check-list">
              {tip.firstAid.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3>不要做</h3>
            <ul className="danger-list">
              {tip.doNot.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="go-now">{tip.goNow}</p>
            <SourceList sources={tip.sources} />
          </article>
        ))}
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <strong>Meow Meow</strong>
      </div>
      <SourceList sources={globalSources} compact />
    </footer>
  )
}

function BreedCard({ breed }: { breed: Breed }) {
  return (
    <article className="breed-card">
      <BreedImageCarousel breed={breed} />
      <div className="breed-card-body">
        <div className="card-meta">
          <span>{breed.origin}</span>
          <span>{breed.coat}</span>
          <span>{breed.careLevel}</span>
        </div>
        <h2>{breed.cnName}</h2>
        <p>{breed.enName}</p>
        <div className="tag-row">
          {breed.temperament.slice(0, 3).map((trait) => (
            <span key={trait}>{trait}</span>
          ))}
        </div>
        <Link className="detail-link" to={`/breeds/${breed.id}`}>
          查看详情 <ArrowRight size={15} />
        </Link>
      </div>
    </article>
  )
}

function BreedImageCarousel({ breed }: { breed: Breed }) {
  const [images, setImages] = useState([breed.image])
  const [activeIndex, setActiveIndex] = useState(0)
  const [isLoadingGallery, setIsLoadingGallery] = useState(true)
  const galleryRef = useRef([breed.image])
  const loadPromiseRef = useRef<Promise<string[]> | null>(null)
  const touchStartX = useRef<number | null>(null)

  useEffect(() => {
    let cancelled = false
    const initialGallery = [breed.image]

    galleryRef.current = initialGallery
    loadPromiseRef.current = null
    setImages(initialGallery)
    setActiveIndex(0)
    setIsLoadingGallery(true)

    const promise = (async () => {
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?breed_ids=${breed.id}&limit=${breedGallerySize}&has_breeds=1`,
      )
      const data = (await response.json()) as Array<{ url?: string }>
      return Array.from(
        new Set([
          breed.image,
          ...data.map((item) => item.url).filter((url): url is string => Boolean(url)),
        ]),
      ).slice(0, breedGallerySize)
    })().catch(() => initialGallery)

    loadPromiseRef.current = promise
    void promise.then((gallery) => {
      if (cancelled) return
      const nextGallery = gallery.length ? gallery : initialGallery
      galleryRef.current = nextGallery
      setImages(nextGallery)
    }).finally(() => {
      if (!cancelled) {
        loadPromiseRef.current = null
        setIsLoadingGallery(false)
      }
    })

    return () => {
      cancelled = true
    }
  }, [breed.id, breed.image])

  const loadGallery = async () => loadPromiseRef.current ?? galleryRef.current

  const move = async (step: number) => {
    const gallery = await loadGallery()
    if (gallery.length <= 1) return
    setActiveIndex((current) => {
      const next = current + step
      return (next + gallery.length) % gallery.length
    })
  }

  const handleTouchEnd = (x: number) => {
    if (touchStartX.current === null) return
    const delta = x - touchStartX.current
    touchStartX.current = null
    if (Math.abs(delta) < 36) return
    void move(delta > 0 ? -1 : 1)
  }

  const currentImage = images[activeIndex] ?? breed.image
  const hasMultipleImages = images.length > 1
  const displayCount = isLoadingGallery ? `${activeIndex + 1}/…` : `${activeIndex + 1}/${images.length}`

  return (
    <div
      className="breed-carousel"
      onTouchStart={(event) => {
        touchStartX.current = event.touches[0]?.clientX ?? null
      }}
      onTouchEnd={(event) => {
        handleTouchEnd(event.changedTouches[0]?.clientX ?? 0)
      }}
    >
      <ImageWithFallback key={currentImage} src={currentImage} alt={`${breed.cnName} ${activeIndex + 1}`} />
      <button
        type="button"
        className="carousel-button prev"
        disabled={!hasMultipleImages && !isLoadingGallery}
        onClick={() => void move(-1)}
        aria-label={`查看上一张${breed.cnName}图片`}
      >
        <ChevronLeft size={18} />
      </button>
      <button
        type="button"
        className="carousel-button next"
        disabled={!hasMultipleImages && !isLoadingGallery}
        onClick={() => void move(1)}
        aria-label={`查看下一张${breed.cnName}图片`}
      >
        <ChevronRight size={18} />
      </button>
      <span className="carousel-count">{displayCount}</span>
    </div>
  )
}

function ProductCard({
  item,
  expanded = false,
}: {
  item: ProductRanking
  expanded?: boolean
}) {
  return (
    <article className="product-card">
      <div className="product-main">
        <span className="category-pill">{item.category}</span>
        <h2>{item.brand}</h2>
        <p className="product-name">{item.product}</p>
        <dl className="product-facts">
          <div>
            <dt>原产地区</dt>
            <dd>{item.origin}</dd>
          </div>
          <div>
            <dt>价位区间</dt>
            <dd>{item.priceRange}</dd>
          </div>
        </dl>
        <h3>高频优点</h3>
        <ul className="check-list">
          {item.strengths.map((strength) => (
            <li key={strength}>{strength}</li>
          ))}
        </ul>
        {expanded && (
          <>
            <p><strong>注意事项：</strong>{item.cautions}</p>
            <p><strong>网络高频评价：</strong>{item.reputation}</p>
            <p><strong>参考口径：</strong>{item.evidence}</p>
            <SourceList sources={item.sources} />
          </>
        )}
      </div>
    </article>
  )
}

function PageTitle({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode
  title: string
  desc: string
}) {
  return (
    <section className="page-title">
      <div className="title-icon">{icon}</div>
      <div>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </section>
  )
}

function SectionHeader({ action }: { action?: React.ReactNode }) {
  return <div className="section-header">{action}</div>
}

function InfoBlock({
  title,
  icon,
  children,
}: {
  title: string
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <article className="info-card">
      <div className="info-title">
        {icon}
        <h2>{title}</h2>
      </div>
      {children}
    </article>
  )
}

function SocialReferencePanel({ title, sources }: { title: string; sources: Source[] }) {
  return (
    <section className="social-reference-panel">
      <div className="info-title">
        <Sparkles size={18} />
        <h2>{title}</h2>
      </div>
      <p>这些入口用于继续查看平台上的真实经验、踩坑讨论和热门笔记，具体做法仍需结合猫咪年龄、健康状态和兽医建议判断。</p>
      <SourceList sources={sources} />
    </section>
  )
}

function SourceList({
  sources,
  compact = false,
}: {
  sources: Source[]
  compact?: boolean
}) {
  const unique = sources.filter(
    (source, index) => sources.findIndex((item) => item.url === source.url) === index,
  )

  return (
    <div className={compact ? 'sources compact' : 'sources'}>
      {unique.map((source) => (
        <a href={source.url} key={source.url} target="_blank" rel="noreferrer">
          {source.label}
          <ExternalLink size={13} />
        </a>
      ))}
    </div>
  )
}

function SelectFilter({
  label,
  value,
  options,
  onChange,
}: {
  label: string
  value: string
  options: string[]
  onChange: (value: string) => void
}) {
  return (
    <label className="select-filter">
      <span>{label}</span>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        <option value="全部">全部</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  )
}

function RiskBadge({ risk }: { risk: RiskLevel }) {
  return <span className={`risk-badge risk-${risk}`}>{risk}</span>
}

function ImageWithFallback({
  src,
  alt,
  objectPosition,
}: {
  src: string
  alt: string
  objectPosition?: string
}) {
  const [failed, setFailed] = useState(false)
  return failed ? (
    <div className="image-fallback" role="img" aria-label={alt}>
      <Cat size={34} />
      <span>{alt}</span>
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      style={objectPosition ? { objectPosition } : undefined}
      onError={() => setFailed(true)}
    />
  )
}

function optionList(items: string[]) {
  return Array.from(new Set(items)).sort((a, b) => a.localeCompare(b, 'zh-Hans-CN'))
}

type KnowledgeHit = {
  section: string
  title: string
  summary: string
  to: string
}

async function askCatAssistant(question: string) {
  const hits = collectKnowledge(question)

  try {
    const response = await fetch(chatApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        temperature: 0.25,
        messages: [
          {
            role: 'system',
            content:
              '你是 Meow Meow 的中文养猫助手，面向中国养猫家庭。可以基于通用养猫知识回答用户问题，不局限于站内资料；给定的站内资料只是可优先参考的上下文。如果信息不确定要明确说明。医疗、用药、剂量、诊断类问题只能做风险分诊和就医提示，不能替代兽医。',
          },
          {
            role: 'user',
            content: [
              `用户问题：${question}`,
              'Meow Meow 站内参考资料：',
              hits.length
                ? hits.map((hit) => `【${hit.section}】${hit.title}：${hit.summary}`).join('\n')
                : '没有找到直接匹配资料，请直接基于通用养猫知识回答，不要因为站内资料缺失而拒绝回答。',
              '请用中文给出清晰、可执行的回答。涉及急症、药物、剂量、诊断时，必须提示尽快联系兽医。',
            ].join('\n\n'),
          },
        ],
      }),
    })

    if (!response.ok) {
      throw new Error(`chat api failed: ${response.status}`)
    }

    const data = await response.json()
    const content =
      data?.choices?.[0]?.message?.content ||
      data?.message?.content ||
      data?.output_text ||
      data?.response

    if (typeof content === 'string' && content.trim()) {
      return content.trim()
    }
  } catch {
    return '智能养猫助手暂时连接不上，请稍后再试。若猫咪出现尿不出、呼吸异常、疑似中毒、持续抽搐、严重外伤或精神极差，请直接联系兽医或急诊医院。'
  }

  return '智能养猫助手暂时没有生成有效回答，请换一种问法再试。'
}

function collectKnowledge(query: string): KnowledgeHit[] {
  const normalized = query.trim().toLowerCase()
  if (!normalized) return []

  const hits: KnowledgeHit[] = []

  breeds.forEach((breed) => {
    const text = [
      breed.cnName,
      breed.enName,
      breed.origin,
      breed.coat,
      breed.bodySize,
      breed.temperament.join(' '),
      breed.healthRisks.join(' '),
      breed.suitableFor,
    ].join(' ')
    if (matchesQuestion(text, normalized)) {
      hits.push({
        section: '品种',
        title: breed.cnName,
        summary: `${breed.enName}，${breed.origin}，${breed.coat}，养护难度${breed.careLevel}。性格：${breed.temperament.join('、')}。适合：${breed.suitableFor}`,
        to: `/breeds/${breed.id}`,
      })
    }
  })

  guideArticles.forEach((article) => {
    const text = [
      article.title,
      article.category,
      article.stage,
      article.summary,
      article.blocks.join(' '),
      article.steps?.join(' '),
      article.checklist?.join(' '),
      article.avoid?.join(' '),
    ].join(' ')
    if (matchesQuestion(text, normalized)) {
      hits.push({
        section: '教程',
        title: article.title,
        summary: [article.summary, ...(article.steps ?? []).slice(0, 3)].join(' '),
        to: '/guide',
      })
    }
  })

  careTips.forEach((group) => {
    const text = `${group.category} ${group.tips.join(' ')}`
    if (matchesQuestion(text, normalized)) {
      hits.push({
        section: '技巧',
        title: group.category,
        summary: group.tips.slice(0, 4).join(' '),
        to: '/tips',
      })
    }
  })

  rankings.forEach((item) => {
    const text = [
      item.category,
      item.brand,
      item.product,
      item.origin,
      item.priceRange,
      item.strengths.join(' '),
      item.cautions,
      item.reputation,
    ].join(' ')
    if (matchesQuestion(text, normalized)) {
      hits.push({
        section: item.category,
        title: item.brand,
        summary: `${item.product}。${item.priceRange}。优点：${item.strengths.join('、')}。注意：${item.cautions}`,
        to: '/rankings',
      })
    }
  })

  emergencyTips.forEach((tip) => {
    const text = `${tip.symptom} ${tip.risk} ${tip.firstAid.join(' ')} ${tip.doNot.join(' ')} ${tip.goNow}`
    if (matchesQuestion(text, normalized)) {
      hits.push({
        section: '急救',
        title: tip.symptom,
        summary: `风险等级：${tip.risk}。可以先做：${tip.firstAid.join(' ')} 禁止：${tip.doNot.join(' ')} ${tip.goNow}`,
        to: '/emergency',
      })
    }
  })

  return hits.slice(0, 8)
}

function matchesQuestion(text: string, normalizedQuery: string) {
  const normalizedText = text.toLowerCase()
  if (normalizedText.includes(normalizedQuery)) return true

  const tokens = normalizedQuery.match(/[\u4e00-\u9fa5]{2,}|[a-z0-9]+/g) ?? []
  if (!tokens.length) return false
  return tokens.some((token) => normalizedText.includes(token))
}

function searchSite(query: string) {
  const normalized = query.trim().toLowerCase()
  const breedResults = breeds
    .filter((breed) =>
      `${breed.cnName} ${breed.enName} ${breed.origin} ${breed.temperament.join(' ')}`
        .toLowerCase()
        .includes(normalized),
    )
    .slice(0, 4)
    .map((breed) => ({
      type: '品种',
      title: breed.cnName,
      desc: `${breed.enName} · ${breed.origin}`,
      to: `/breeds/${breed.id}`,
    }))

  const guideResults = guideArticles
    .filter((article) =>
      `${article.title} ${article.category} ${article.summary}`.toLowerCase().includes(normalized),
    )
    .slice(0, 3)
    .map((article) => ({
      type: '教程',
      title: article.title,
      desc: article.summary,
      to: '/guide',
    }))

  const productResults = rankings
    .filter((item) =>
      `${item.category} ${item.brand} ${item.product} ${item.reputation}`
        .toLowerCase()
        .includes(normalized),
    )
    .slice(0, 3)
    .map((item) => ({
      type: item.category,
      title: `${item.brand} ${item.product}`,
      desc: item.priceRange,
      to: '/rankings',
    }))

  const emergencyResults = emergencyTips
    .filter((tip) => `${tip.symptom} ${tip.goNow}`.toLowerCase().includes(normalized))
    .slice(0, 3)
    .map((tip) => ({
      type: '急救',
      title: tip.symptom,
      desc: tip.goNow,
      to: '/emergency',
    }))

  const defaults = [
    { type: '', title: '品种大全', desc: '按毛长、地区、体型、性格筛选', to: '/breeds' },
    { type: '', title: '新手教程', desc: '接猫准备、到家适应、喂养护理一步到位', to: '/guide' },
    { type: '', title: '猫咪用品汇总', desc: '猫粮、猫罐头、猫条、保健品、猫砂和日用品等', to: '/rankings' },
    { type: '', title: '猫咪急症判断', desc: '急救分诊和就医提示', to: '/emergency' },
  ]

  if (!normalized) return defaults
  return [...breedResults, ...guideResults, ...productResults, ...emergencyResults].slice(0, 8)
}

export default App
