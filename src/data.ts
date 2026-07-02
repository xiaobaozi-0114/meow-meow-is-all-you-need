export type Difficulty = '低' | '中' | '高'
export type RiskLevel = '观察' | '尽快就医' | '急诊'
export type ProductCategory = '猫粮' | '猫罐头' | '猫条' | '猫咪保健品' | '生活用品'

export type Source = {
  label: string
  url: string
}

export type Breed = {
  id: string
  cnName: string
  enName: string
  origin: string
  region: string
  bodySize: '小型' | '中型' | '大型'
  coat: '短毛' | '中长毛' | '长毛' | '无毛/卷毛'
  temperament: string[]
  careLevel: Difficulty
  healthRisks: string[]
  suitableFor: string
  image: string
  imageSource: Source
  sources: Source[]
  weight: string
  lifeSpan: string
  popularity: number
}

export type ProductRanking = {
  category: ProductCategory
  rank: number
  brand: string
  product: string
  origin: string
  priceRange: string
  strengths: string[]
  cautions: string
  reputation: string
  evidence: string
  sources: Source[]
}

export type GuideArticle = {
  id: string
  title: string
  category: string
  stage: string
  difficulty: Difficulty
  summary: string
  image?: string
  imageAlt?: string
  imagePosition?: string
  blocks: string[]
  steps?: string[]
  checklist?: string[]
  avoid?: string[]
  sources: Source[]
}

export type EmergencyTip = {
  id: string
  symptom: string
  risk: RiskLevel
  firstAid: string[]
  doNot: string[]
  goNow: string
  sources: Source[]
}

const imageExtensionMap: Record<string, string> = {
  O3btzLlsO: 'png',
  '4RzEwvyzz': 'png',
  DbwiefiaY: 'png',
}

const catApiImage = (id?: string, imageUrl?: string) =>
  imageUrl ??
  (id
    ? `https://cdn2.thecatapi.com/images/${id}.${imageExtensionMap[id] ?? 'jpg'}`
    : 'https://placecats.com/720/520')

const wiki = (name: string) =>
  `https://en.wikipedia.org/wiki/${encodeURIComponent(name)}`

const catApiSource: Source = {
  label: 'TheCatAPI breed dataset',
  url: 'https://thecatapi.com/',
}

const cfaBreeds: Source = {
  label: 'CFA Breeds',
  url: 'https://cfa.org/breeds/',
}

const ticaBreeds: Source = {
  label: 'TICA Browse All Breeds',
  url: 'https://tica.org/ticas-breeds/browse-all-breeds/',
}

const commonsLicense: Source = {
  label: '图片来自 TheCatAPI / Wikimedia 等公开引用图源',
  url: 'https://docs.thecatapi.com/',
}

const traitMap: Record<string, string> = {
  Active: '活跃',
  Energetic: '精力旺盛',
  Independent: '独立',
  Intelligent: '聪明',
  Gentle: '温和',
  Affectionate: '亲人',
  Social: '社交',
  Playful: '爱玩',
  Curious: '好奇',
  Loyal: '忠诚',
  Calm: '安静',
  Quiet: '安静',
  Lively: '活泼',
  Friendly: '友好',
  Agile: '敏捷',
  Easygoing: '随和',
  'Easy Going': '随和',
  Demanding: '需要陪伴',
  Interactive: '互动强',
  Talkative: '爱叫',
  Sweet: '甜美',
  Relaxed: '放松',
  Trainable: '可训练',
}

const regionMap: Record<string, string> = {
  Egypt: '非洲',
  Greece: '欧洲',
  'United States': '北美',
  'United Arab Emirates': '中东',
  Australia: '大洋洲',
  France: '欧洲',
  'United Kingdom': '欧洲',
  Burma: '亚洲',
  Canada: '北美',
  Cyprus: '欧洲',
  Russia: '欧洲/亚洲',
  China: '亚洲',
  Japan: '亚洲',
  Thailand: '亚洲',
  Norway: '欧洲',
  'Iran (Persia)': '中东',
  Singapore: '亚洲',
  Somalia: '非洲',
  Turkey: '中东',
  'Isle of Man': '欧洲',
}

const cnNameMap: Record<string, string> = {
  Abyssinian: '阿比西尼亚猫',
  Aegean: '爱琴海猫',
  'American Bobtail': '美国短尾猫',
  'American Curl': '美国卷耳猫',
  'American Shorthair': '美国短毛猫',
  'American Wirehair': '美国硬毛猫',
  'Arabian Mau': '阿拉伯猫',
  'Australian Mist': '澳大利亚雾猫',
  Balinese: '巴厘猫',
  Bambino: '班比诺猫',
  Bengal: '孟加拉猫',
  Birman: '伯曼猫',
  Bombay: '孟买猫',
  'British Longhair': '英国长毛猫',
  'British Shorthair': '英国短毛猫',
  Burmese: '缅甸猫',
  Burmilla: '波米拉猫',
  'California Spangled': '加州闪亮猫',
  'Chantilly-Tiffany': '尚蒂伊猫',
  Chartreux: '沙特尔猫',
  Chausie: '肖西猫',
  Cheetoh: '奇多猫',
  'Colorpoint Shorthair': '重点色短毛猫',
  'Cornish Rex': '柯尼斯卷毛猫',
  Cymric: '长毛曼岛猫',
  Cyprus: '塞浦路斯猫',
  'Devon Rex': '德文卷毛猫',
  Donskoy: '顿斯科伊猫',
  'Dragon Li': '中国狸花猫',
  'Egyptian Mau': '埃及猫',
  'European Burmese': '欧洲缅甸猫',
  'Exotic Shorthair': '异国短毛猫',
  'Havana Brown': '哈瓦那棕猫',
  Himalayan: '喜马拉雅猫',
  'Japanese Bobtail': '日本短尾猫',
  Javanese: '爪哇猫',
  'Khao Manee': '考马尼猫',
  Korat: '科拉特猫',
  Kurilian: '千岛短尾猫',
  LaPerm: '拉波卷毛猫',
  'Maine Coon': '缅因猫',
  Malayan: '马来亚猫（亚洲猫）',
  Manx: '曼岛猫',
  Munchkin: '曼基康猫',
  Nebelung: '尼伯龙猫',
  'Norwegian Forest Cat': '挪威森林猫',
  Ocicat: '欧西猫',
  Oriental: '东方短毛猫',
  Persian: '波斯猫',
  'Pixie-bob': '精灵短尾猫',
  Ragamuffin: '褴褛猫',
  Ragdoll: '布偶猫',
  'Russian Blue': '俄罗斯蓝猫',
  Savannah: '萨凡纳猫',
  'Scottish Fold': '苏格兰折耳猫',
  'Selkirk Rex': '塞尔凯克卷毛猫',
  Siamese: '暹罗猫',
  Siberian: '西伯利亚猫',
  Singapura: '新加坡猫',
  Snowshoe: '雪鞋猫',
  Somali: '索马里猫',
  Sphynx: '加拿大无毛猫',
  Tonkinese: '东奇尼猫',
  Toyger: '玩具虎猫',
  'Turkish Angora': '土耳其安哥拉猫',
  'Turkish Van': '土耳其梵猫',
  'York Chocolate': '约克巧克力猫',
}

type BreedSeed = {
  id: string
  name: string
  origin: string
  temperament: string
  weight: string
  lifeSpan: string
  imageId?: string
  imageUrl?: string
  cfa?: string
  vca?: string
  wiki?: string
  health: number
  grooming: number
  energy: number
}

const breedSeeds: BreedSeed[] = [
  { id: 'abys', name: 'Abyssinian', origin: 'Egypt', temperament: 'Active, Energetic, Independent, Intelligent, Gentle', weight: '3-5 kg', lifeSpan: '14-15 年', imageId: '0XYvRd7oD', cfa: 'https://cfa.org/breed/abyssinian/', vca: 'https://vcahospitals.com/know-your-pet/cat-breeds/abyssinian', wiki: 'https://en.wikipedia.org/wiki/Abyssinian_(cat)', health: 2, grooming: 1, energy: 5 },
  { id: 'aege', name: 'Aegean', origin: 'Greece', temperament: 'Affectionate, Social, Intelligent, Playful, Active', weight: '3-5 kg', lifeSpan: '9-12 年', imageId: 'ozEvzdVM-', wiki: 'https://en.wikipedia.org/wiki/Aegean_cat', health: 1, grooming: 3, energy: 3 },
  { id: 'abob', name: 'American Bobtail', origin: 'United States', temperament: 'Intelligent, Interactive, Lively, Playful, Sensitive', weight: '3-7 kg', lifeSpan: '11-15 年', imageId: 'hBXicehMA', cfa: 'https://cfa.org/breed/american-bobtail/', vca: 'https://vcahospitals.com/know-your-pet/cat-breeds/american-bobtail', wiki: 'https://en.wikipedia.org/wiki/American_Bobtail', health: 1, grooming: 1, energy: 3 },
  { id: 'acur', name: 'American Curl', origin: 'United States', temperament: 'Affectionate, Curious, Intelligent, Interactive, Lively, Playful, Social', weight: '2-5 kg', lifeSpan: '12-16 年', imageId: 'xnsqonbjW', cfa: 'https://cfa.org/breed/american-curl/', vca: 'https://vcahospitals.com/know-your-pet/cat-breeds/american-curl', wiki: 'https://en.wikipedia.org/wiki/American_Curl', health: 1, grooming: 2, energy: 3 },
  { id: 'asho', name: 'American Shorthair', origin: 'United States', temperament: 'Active, Curious, Easy Going, Playful, Calm', weight: '4-7 kg', lifeSpan: '15-17 年', imageId: 'JFPROfGtQ', cfa: 'https://cfa.org/breed/american-shorthair/', vca: 'https://vcahospitals.com/know-your-pet/cat-breeds/american-shorthair', wiki: 'https://en.wikipedia.org/wiki/American_Shorthair', health: 3, grooming: 1, energy: 3 },
  { id: 'awir', name: 'American Wirehair', origin: 'United States', temperament: 'Affectionate, Curious, Gentle, Intelligent, Interactive, Lively, Loyal, Playful, Social', weight: '4-7 kg', lifeSpan: '14-18 年', imageId: '8D--jCd21', cfa: 'https://cfa.org/breed/american-wirehair/', wiki: 'https://en.wikipedia.org/wiki/American_Wirehair', health: 3, grooming: 1, energy: 3 },
  { id: 'amau', name: 'Arabian Mau', origin: 'United Arab Emirates', temperament: 'Affectionate, Agile, Curious, Independent, Playful, Loyal', weight: '4-7 kg', lifeSpan: '12-14 年', imageId: 'k71ULYfRr', wiki: 'https://en.wikipedia.org/wiki/Arabian_Mau', health: 1, grooming: 1, energy: 4 },
  { id: 'amis', name: 'Australian Mist', origin: 'Australia', temperament: 'Lively, Social, Relaxed, Affectionate', weight: '3-7 kg', lifeSpan: '12-16 年', imageId: '_6x-3TiCA', wiki: 'https://en.wikipedia.org/wiki/Australian_Mist', health: 1, grooming: 3, energy: 4 },
  { id: 'bali', name: 'Balinese', origin: 'United States', temperament: 'Affectionate, Intelligent, Playful', weight: '2-5 kg', lifeSpan: '10-15 年', imageId: '13MkvUreZ', cfa: 'https://cfa.org/breed/balinese/', vca: 'https://vcahospitals.com/know-your-pet/cat-breeds/balinese', wiki: 'https://en.wikipedia.org/wiki/Balinese_(cat)', health: 3, grooming: 3, energy: 5 },
  { id: 'bamb', name: 'Bambino', origin: 'United States', temperament: 'Affectionate, Lively, Friendly, Intelligent', weight: '2-4 kg', lifeSpan: '12-14 年', imageId: '5AdhMjeEu', wiki: 'https://en.wikipedia.org/wiki/Bambino_cat', health: 1, grooming: 1, energy: 5 },
  { id: 'beng', name: 'Bengal', origin: 'United States', temperament: 'Alert, Agile, Energetic, Demanding, Intelligent', weight: '3-7 kg', lifeSpan: '12-15 年', imageId: 'O3btzLlsO', cfa: 'https://cfa.org/breed/bengal/', vca: 'https://vcahospitals.com/know-your-pet/cat-breeds/bengal', wiki: 'https://en.wikipedia.org/wiki/Bengal_cat', health: 3, grooming: 1, energy: 5 },
  { id: 'birm', name: 'Birman', origin: 'France', temperament: 'Affectionate, Active, Gentle, Social', weight: '3-7 kg', lifeSpan: '14-15 年', imageId: 'HOrX5gwLS', cfa: 'https://cfa.org/breed/birman/', vca: 'https://vcahospitals.com/know-your-pet/cat-breeds/birman', wiki: 'https://en.wikipedia.org/wiki/Birman', health: 1, grooming: 2, energy: 3 },
  { id: 'bomb', name: 'Bombay', origin: 'United States', temperament: 'Affectionate, Gentle, Intelligent, Playful', weight: '3-5 kg', lifeSpan: '12-16 年', imageId: '5iYq9NmT1', cfa: 'https://cfa.org/breed/bombay/', vca: 'https://vcahospitals.com/know-your-pet/cat-breeds/bombay', wiki: 'https://en.wikipedia.org/wiki/Bombay_cat', health: 3, grooming: 1, energy: 3 },
  { id: 'bslo', name: 'British Longhair', origin: 'United Kingdom', temperament: 'Affectionate, Easy Going, Independent, Intelligent, Loyal, Social', weight: '4-8 kg', lifeSpan: '12-14 年', imageId: '7isAO4Cav', wiki: 'https://en.wikipedia.org/wiki/British_Longhair', health: 1, grooming: 5, energy: 4 },
  { id: 'bsho', name: 'British Shorthair', origin: 'United Kingdom', temperament: 'Affectionate, Easy Going, Gentle, Loyal, Patient, Calm', weight: '5-9 kg', lifeSpan: '12-17 年', imageId: 'GrPErz7EA', cfa: 'https://cfa.org/breed/british-shorthair/', vca: 'https://vcahospitals.com/know-your-pet/cat-breeds/british-shorthair', wiki: 'https://en.wikipedia.org/wiki/British_Shorthair', health: 2, grooming: 2, energy: 2 },
  { id: 'bure', name: 'Burmese', origin: 'Burma', temperament: 'Curious, Intelligent, Gentle, Social, Interactive, Playful, Lively', weight: '3-5 kg', lifeSpan: '15-16 年', imageId: '4lXnnfxac', cfa: 'https://cfa.org/breed/burmese/', vca: 'https://vcahospitals.com/know-your-pet/cat-breeds/burmese', wiki: 'https://en.wikipedia.org/wiki/Burmese_cat', health: 3, grooming: 1, energy: 4 },
  { id: 'buri', name: 'Burmilla', origin: 'United Kingdom', temperament: 'Easy Going, Friendly, Intelligent, Lively, Playful, Social', weight: '3-6 kg', lifeSpan: '10-15 年', imageId: 'jvg3XfEdC', cfa: 'https://cfa.org/breed/burmilla/', wiki: 'https://en.wikipedia.org/wiki/Burmilla', health: 3, grooming: 3, energy: 3 },
  { id: 'cspa', name: 'California Spangled', origin: 'United States', temperament: 'Affectionate, Curious, Intelligent, Loyal, Social', weight: '5-7 kg', lifeSpan: '10-14 年', imageId: 'B1ERTmgph', wiki: 'https://en.wikipedia.org/wiki/California_Spangled', health: 1, grooming: 1, energy: 5 },
  { id: 'ctif', name: 'Chantilly-Tiffany', origin: 'United States', temperament: 'Affectionate, Demanding, Interactive, Loyal', weight: '3-5 kg', lifeSpan: '14-16 年', imageId: 'TR-5nAd_S', wiki: 'https://en.wikipedia.org/wiki/Chantilly-Tiffany', health: 1, grooming: 5, energy: 4 },
  { id: 'char', name: 'Chartreux', origin: 'France', temperament: 'Affectionate, Loyal, Intelligent, Social, Lively, Playful', weight: '3-7 kg', lifeSpan: '12-15 年', imageId: 'j6oFGLpRG', cfa: 'https://cfa.org/breed/chartreux/', vca: 'https://vcahospitals.com/know-your-pet/cat-breeds/chartreux', wiki: 'https://en.wikipedia.org/wiki/Chartreux', health: 2, grooming: 1, energy: 2 },
  { id: 'chau', name: 'Chausie', origin: 'Egypt', temperament: 'Affectionate, Intelligent, Playful, Social', weight: '3-7 kg', lifeSpan: '12-14 年', imageId: 'vJ3lEYgXr', wiki: 'https://en.wikipedia.org/wiki/Chausie', health: 1, grooming: 3, energy: 4 },
  { id: 'chee', name: 'Cheetoh', origin: 'United States', temperament: 'Affectionate, Gentle, Intelligent, Social', weight: '4-7 kg', lifeSpan: '12-14 年', imageId: 'djnExlK9y', wiki: 'https://en.wikipedia.org/wiki/Bengal_cat#Cheetoh', health: 1, grooming: 1, energy: 4 },
  { id: 'csho', name: 'Colorpoint Shorthair', origin: 'United States', temperament: 'Affectionate, Intelligent, Playful, Social', weight: '2-5 kg', lifeSpan: '12-16 年', imageId: 'oSpqGyUDS', cfa: 'https://cfa.org/breed/colorpoint-shorthair/', vca: 'https://vcahospitals.com/know-your-pet/cat-breeds/colorpoint-shorthair', wiki: 'https://en.wikipedia.org/wiki/Colorpoint_Shorthair', health: 2, grooming: 2, energy: 4 },
  { id: 'crex', name: 'Cornish Rex', origin: 'United Kingdom', temperament: 'Affectionate, Intelligent, Active, Curious, Playful', weight: '2-4 kg', lifeSpan: '11-14 年', imageId: 'unX21IBVB', cfa: 'https://cfa.org/breed/cornish-rex/', vca: 'https://vcahospitals.com/know-your-pet/cat-breeds/cornish-rex', wiki: 'https://en.wikipedia.org/wiki/Cornish_Rex', health: 2, grooming: 1, energy: 5 },
  { id: 'cymr', name: 'Cymric', origin: 'Canada', temperament: 'Gentle, Loyal, Intelligent, Playful', weight: '4-6 kg', lifeSpan: '8-14 年', imageId: '3dbtapCWM', wiki: 'https://en.wikipedia.org/wiki/Cymric_cat', health: 3, grooming: 3, energy: 5 },
  { id: 'cypr', name: 'Cyprus', origin: 'Cyprus', temperament: 'Affectionate, Social', weight: '4-7 kg', lifeSpan: '12-15 年', imageId: 'tJbzb7FKo', wiki: 'https://en.wikipedia.org/wiki/Cyprus_cat', health: 1, grooming: 3, energy: 4 },
  { id: 'drex', name: 'Devon Rex', origin: 'United Kingdom', temperament: 'Interactive, Mischievous, Loyal, Social, Playful', weight: '2-5 kg', lifeSpan: '10-15 年', imageId: '4RzEwvyzz', cfa: 'https://cfa.org/breed/devon-rex/', vca: 'https://vcahospitals.com/know-your-pet/cat-breeds/devon-rex', wiki: 'https://en.wikipedia.org/wiki/Devon_Rex', health: 3, grooming: 1, energy: 5 },
  { id: 'dons', name: 'Donskoy', origin: 'Russia', temperament: 'Playful, Affectionate, Loyal, Social', weight: '5-6 kg', lifeSpan: '12-15 年', imageId: '3KG57GfMW', wiki: 'https://en.wikipedia.org/wiki/Donskoy_cat', health: 3, grooming: 2, energy: 4 },
  { id: 'lihu', name: 'Dragon Li', origin: 'China', temperament: 'Intelligent, Friendly, Gentle, Loving, Loyal', weight: '4-6 kg', lifeSpan: '12-15 年', imageId: 'BQMSld0A0', wiki: 'https://en.wikipedia.org/wiki/Dragon_Li', health: 1, grooming: 1, energy: 3 },
  { id: 'emau', name: 'Egyptian Mau', origin: 'Egypt', temperament: 'Agile, Gentle, Intelligent, Lively, Loyal, Playful', weight: '3-6 kg', lifeSpan: '18-20 年', imageId: 'TuSyTkt2n', cfa: 'https://cfa.org/breed/egyptian-mau/', vca: 'https://vcahospitals.com/know-your-pet/cat-breeds/egyptian-mau', wiki: 'https://en.wikipedia.org/wiki/Egyptian_Mau', health: 3, grooming: 1, energy: 5 },
  { id: 'ebur', name: 'European Burmese', origin: 'Burma', temperament: 'Sweet, Affectionate, Loyal', weight: '3-6 kg', lifeSpan: '10-15 年', imageId: 'DZzcGANt5', cfa: 'https://cfa.org/breed/european-burmese/', wiki: 'https://en.wikipedia.org/wiki/European_Burmese', health: 4, grooming: 1, energy: 4 },
  { id: 'esho', name: 'Exotic Shorthair', origin: 'United States', temperament: 'Affectionate, Sweet, Loyal, Quiet, Peaceful', weight: '3-6 kg', lifeSpan: '12-15 年', imageId: 'YnPrYEmfe', cfa: 'https://cfa.org/breed/exotic/', vca: 'https://vcahospitals.com/know-your-pet/cat-breeds/exotic-shorthair', wiki: 'https://en.wikipedia.org/wiki/Exotic_Shorthair', health: 3, grooming: 2, energy: 3 },
  { id: 'hbro', name: 'Havana Brown', origin: 'United Kingdom', temperament: 'Affectionate, Curious, Demanding, Friendly, Intelligent, Playful', weight: '3-5 kg', lifeSpan: '10-15 年', imageId: 'njK25knLH', cfa: 'https://cfa.org/breed/havana-brown/', vca: 'https://vcahospitals.com/know-your-pet/cat-breeds/havana-brown', wiki: 'https://en.wikipedia.org/wiki/Havana_Brown', health: 1, grooming: 1, energy: 3 },
  { id: 'hima', name: 'Himalayan', origin: 'United States', temperament: 'Gentle, Intelligent, Quiet, Social', weight: '3-6 kg', lifeSpan: '9-15 年', imageId: 'CDhOtM-Ig', vca: 'https://vcahospitals.com/know-your-pet/cat-breeds/himalayan', wiki: 'https://en.wikipedia.org/wiki/Himalayan_cat', health: 3, grooming: 5, energy: 1 },
  { id: 'jbob', name: 'Japanese Bobtail', origin: 'Japan', temperament: 'Active, Agile, Clever, Easy Going, Intelligent, Lively, Loyal, Playful, Social', weight: '2-5 kg', lifeSpan: '14-16 年', imageId: '-tm9-znzl', cfa: 'https://cfa.org/breed/japanese-bobtail/', vca: 'https://vcahospitals.com/know-your-pet/cat-breeds/japanese-bobtail', wiki: 'https://en.wikipedia.org/wiki/Japanese_Bobtail', health: 1, grooming: 1, energy: 5 },
  { id: 'java', name: 'Javanese', origin: 'United States', temperament: 'Active, Devoted, Intelligent, Playful', weight: '2-5 kg', lifeSpan: '10-12 年', imageId: 'xoI_EpOKe', vca: 'https://vcahospitals.com/know-your-pet/cat-breeds/javanese', wiki: 'https://en.wikipedia.org/wiki/Javanese_cat', health: 3, grooming: 1, energy: 5 },
  { id: 'khao', name: 'Khao Manee', origin: 'Thailand', temperament: 'Calm, Relaxed, Talkative, Playful, Warm', weight: '4-6 kg', lifeSpan: '10-12 年', imageId: '165ok6ESN', cfa: 'https://cfa.org/breed/khao-manee/', wiki: 'https://en.wikipedia.org/wiki/Khao_Manee', health: 1, grooming: 3, energy: 3 },
  { id: 'kora', name: 'Korat', origin: 'Thailand', temperament: 'Active, Loyal, Intelligent, Expressive, Trainable', weight: '3-5 kg', lifeSpan: '10-15 年', imageId: 'DbwiefiaY', cfa: 'https://cfa.org/breed/korat/', vca: 'https://vcahospitals.com/know-your-pet/cat-breeds/korat', wiki: 'https://en.wikipedia.org/wiki/Korat', health: 1, grooming: 1, energy: 3 },
  { id: 'kuri', name: 'Kurilian', origin: 'Russia', temperament: 'Independent, Intelligent, Curious, Social, Playful, Trainable', weight: '4-7 kg', lifeSpan: '15-20 年', imageId: 'NZpO4pU56M', wiki: 'https://en.wikipedia.org/wiki/Kurilian_Bobtail', health: 1, grooming: 1, energy: 5 },
  { id: 'lape', name: 'LaPerm', origin: 'United States', temperament: 'Affectionate, Friendly, Gentle, Intelligent, Playful, Quiet', weight: '3-5 kg', lifeSpan: '10-15 年', imageId: 'aKbsEYjSl', cfa: 'https://cfa.org/breed/laperm/', vca: 'https://vcahospitals.com/know-your-pet/cat-breeds/laperm', wiki: 'https://en.wikipedia.org/wiki/LaPerm', health: 1, grooming: 1, energy: 4 },
  { id: 'mcoo', name: 'Maine Coon', origin: 'United States', temperament: 'Adaptable, Intelligent, Loving, Gentle, Independent', weight: '5-8 kg', lifeSpan: '12-15 年', imageId: 'OOD3VXAQn', cfa: 'https://cfa.org/breed/maine-coon-cat/', vca: 'https://vcahospitals.com/know-your-pet/cat-breeds/maine-coon', wiki: 'https://en.wikipedia.org/wiki/Maine_Coon', health: 3, grooming: 3, energy: 3 },
  { id: 'mala', name: 'Malayan', origin: 'United Kingdom', temperament: 'Affectionate, Interactive, Playful, Social', weight: '3-6 kg', lifeSpan: '12-18 年', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/BrownVarientAsianCat.JPG', wiki: 'https://en.wikipedia.org/wiki/Asian_cat', health: 1, grooming: 1, energy: 5 },
  { id: 'manx', name: 'Manx', origin: 'Isle of Man', temperament: 'Easy Going, Intelligent, Loyal, Playful, Social', weight: '3-6 kg', lifeSpan: '12-14 年', imageId: 'fhYh2PDcC', cfa: 'https://cfa.org/breed/manx/', vca: 'https://vcahospitals.com/know-your-pet/cat-breeds/manx', wiki: 'https://en.wikipedia.org/wiki/Manx_cat', health: 3, grooming: 1, energy: 5 },
  { id: 'munc', name: 'Munchkin', origin: 'United States', temperament: 'Agile, Easy Going, Intelligent, Playful', weight: '2-4 kg', lifeSpan: '10-15 年', imageId: 'j5cVSqLer', wiki: 'https://en.wikipedia.org/wiki/Munchkin_cat', health: 3, grooming: 2, energy: 4 },
  { id: 'nebe', name: 'Nebelung', origin: 'United States', temperament: 'Gentle, Quiet, Shy, Playful', weight: '3-5 kg', lifeSpan: '11-16 年', imageId: 'OGTWqNNOt', wiki: 'https://en.wikipedia.org/wiki/Nebelung', health: 2, grooming: 3, energy: 3 },
  { id: 'norw', name: 'Norwegian Forest Cat', origin: 'Norway', temperament: 'Sweet, Active, Intelligent, Social, Playful, Lively, Curious', weight: '4-7 kg', lifeSpan: '12-16 年', imageId: '06dgGmEOV', cfa: 'https://cfa.org/breed/norwegian-forest-cat/', vca: 'https://vcahospitals.com/know-your-pet/cat-breeds/norwegian-forest-cat', wiki: 'https://en.wikipedia.org/wiki/Norwegian_Forest_Cat', health: 3, grooming: 2, energy: 3 },
  { id: 'ocic', name: 'Ocicat', origin: 'United States', temperament: 'Active, Agile, Curious, Demanding, Friendly, Gentle, Lively, Playful, Social', weight: '3-7 kg', lifeSpan: '12-14 年', imageId: 'JAx-08Y0n', cfa: 'https://cfa.org/breed/ocicat/', vca: 'https://vcahospitals.com/know-your-pet/cat-breeds/ocicat', wiki: 'https://en.wikipedia.org/wiki/Ocicat', health: 3, grooming: 1, energy: 5 },
  { id: 'orie', name: 'Oriental', origin: 'United States', temperament: 'Energetic, Affectionate, Intelligent, Social, Playful, Curious', weight: '2-5 kg', lifeSpan: '12-14 年', imageId: 'LutjkZJpH', cfa: 'https://cfa.org/breed/oriental/', vca: 'https://vcahospitals.com/know-your-pet/cat-breeds/oriental', wiki: 'https://en.wikipedia.org/wiki/Oriental_Shorthair', health: 3, grooming: 1, energy: 5 },
  { id: 'pers', name: 'Persian', origin: 'Iran (Persia)', temperament: 'Affectionate, Loyal, Sedate, Quiet', weight: '4-6 kg', lifeSpan: '14-15 年', imageId: '-Zfz5z2jK', cfa: 'https://cfa.org/breed/persian/', vca: 'https://vcahospitals.com/know-your-pet/cat-breeds/persian', wiki: 'https://en.wikipedia.org/wiki/Persian_cat', health: 3, grooming: 5, energy: 1 },
  { id: 'pixi', name: 'Pixie-bob', origin: 'United States', temperament: 'Affectionate, Social, Intelligent, Loyal', weight: '4-8 kg', lifeSpan: '13-16 年', imageId: 'z7fJRNeN6', wiki: 'https://en.wikipedia.org/wiki/Pixie-bob', health: 2, grooming: 1, energy: 4 },
  { id: 'raga', name: 'Ragamuffin', origin: 'United States', temperament: 'Affectionate, Friendly, Gentle, Calm', weight: '4-9 kg', lifeSpan: '12-16 年', imageId: 'SMuZx-bFM', cfa: 'https://cfa.org/breed/ragamuffin/', vca: 'https://vcahospitals.com/know-your-pet/cat-breeds/ragamuffin', wiki: 'https://en.wikipedia.org/wiki/Ragamuffin_cat', health: 3, grooming: 3, energy: 3 },
  { id: 'ragd', name: 'Ragdoll', origin: 'United States', temperament: 'Affectionate, Friendly, Gentle, Quiet, Easygoing', weight: '5-9 kg', lifeSpan: '12-17 年', imageId: 'oGefY4YoG', cfa: 'https://cfa.org/breed/ragdoll/', vca: 'https://vcahospitals.com/know-your-pet/cat-breeds/ragdoll', wiki: 'https://en.wikipedia.org/wiki/Ragdoll', health: 3, grooming: 2, energy: 3 },
  { id: 'rblu', name: 'Russian Blue', origin: 'Russia', temperament: 'Active, Easy Going, Gentle, Intelligent, Loyal, Playful, Quiet', weight: '2-5 kg', lifeSpan: '10-16 年', imageId: 'Rhj-JsTLP', cfa: 'https://cfa.org/breed/russian-blue/', vca: 'https://vcahospitals.com/know-your-pet/cat-breeds/russian-blue', wiki: 'https://en.wikipedia.org/wiki/Russian_Blue', health: 1, grooming: 3, energy: 3 },
  { id: 'sava', name: 'Savannah', origin: 'United States', temperament: 'Curious, Social, Intelligent, Loyal, Outgoing, Adventurous, Affectionate', weight: '4-11 kg', lifeSpan: '17-20 年', imageId: 'a8nIYvs6S', wiki: 'https://en.wikipedia.org/wiki/Savannah_cat', health: 1, grooming: 1, energy: 5 },
  { id: 'sfol', name: 'Scottish Fold', origin: 'United Kingdom', temperament: 'Affectionate, Intelligent, Loyal, Playful, Social, Sweet, Loving', weight: '2-5 kg', lifeSpan: '11-14 年', imageId: 'o9t0LDcsa', cfa: 'https://cfa.org/breed/scottish-fold/', vca: 'https://vcahospitals.com/know-your-pet/cat-breeds/scottish-fold', wiki: 'https://en.wikipedia.org/wiki/Scottish_Fold', health: 4, grooming: 1, energy: 3 },
  { id: 'srex', name: 'Selkirk Rex', origin: 'United States', temperament: 'Active, Affectionate, Gentle, Patient, Playful, Quiet, Social', weight: '3-7 kg', lifeSpan: '14-15 年', imageId: 'II9dOZmrw', cfa: 'https://cfa.org/breed/selkirk-rex/', vca: 'https://vcahospitals.com/know-your-pet/cat-breeds/selkirk-rex', wiki: 'https://en.wikipedia.org/wiki/Selkirk_Rex', health: 4, grooming: 2, energy: 3 },
  { id: 'siam', name: 'Siamese', origin: 'Thailand', temperament: 'Active, Agile, Clever, Sociable, Loving, Energetic', weight: '4-7 kg', lifeSpan: '12-15 年', imageId: 'ai6Jps4sx', cfa: 'https://cfa.org/breed/siamese/', vca: 'https://vcahospitals.com/know-your-pet/cat-breeds/siamese', wiki: 'https://en.wikipedia.org/wiki/Siamese_cat', health: 1, grooming: 1, energy: 5 },
  { id: 'sibe', name: 'Siberian', origin: 'Russia', temperament: 'Curious, Intelligent, Loyal, Sweet, Agile, Playful, Affectionate', weight: '4-7 kg', lifeSpan: '12-15 年', imageId: '3bkZAjRh1', cfa: 'https://cfa.org/breed/siberian/', vca: 'https://vcahospitals.com/know-your-pet/cat-breeds/siberian', wiki: 'https://en.wikipedia.org/wiki/Siberian_cat', health: 2, grooming: 2, energy: 5 },
  { id: 'sing', name: 'Singapura', origin: 'Singapore', temperament: 'Affectionate, Curious, Easy Going, Intelligent, Interactive, Lively, Loyal', weight: '2-4 kg', lifeSpan: '12-15 年', imageId: 'Qtncp2nRe', cfa: 'https://cfa.org/breed/singapura/', vca: 'https://vcahospitals.com/know-your-pet/cat-breeds/singapura', wiki: 'https://en.wikipedia.org/wiki/Singapura_cat', health: 1, grooming: 1, energy: 5 },
  { id: 'snow', name: 'Snowshoe', origin: 'United States', temperament: 'Affectionate, Social, Intelligent, Sweet-tempered', weight: '3-5 kg', lifeSpan: '14-19 年', imageId: 'MK-sYESvO', wiki: 'https://en.wikipedia.org/wiki/Snowshoe_cat', health: 1, grooming: 3, energy: 4 },
  { id: 'soma', name: 'Somali', origin: 'Somalia', temperament: 'Mischievous, Intelligent, Affectionate, Gentle, Interactive, Loyal', weight: '3-5 kg', lifeSpan: '12-16 年', imageId: 'EPF2ejNS0', cfa: 'https://cfa.org/breed/somali/', vca: 'https://vcahospitals.com/know-your-pet/cat-breeds/somali', wiki: 'https://en.wikipedia.org/wiki/Somali_cat', health: 2, grooming: 3, energy: 5 },
  { id: 'sphy', name: 'Sphynx', origin: 'Canada', temperament: 'Loyal, Curious, Friendly, Quiet, Gentle', weight: '3-5 kg', lifeSpan: '12-14 年', imageId: 'BDb8ZXb1v', cfa: 'https://cfa.org/breed/sphynx/', vca: 'https://vcahospitals.com/know-your-pet/cat-breeds/sphynx', wiki: 'https://en.wikipedia.org/wiki/Sphynx_cat', health: 4, grooming: 2, energy: 3 },
  { id: 'tonk', name: 'Tonkinese', origin: 'Canada', temperament: 'Curious, Intelligent, Social, Lively, Outgoing, Playful, Affectionate', weight: '3-5 kg', lifeSpan: '14-16 年', imageId: 'KBroiVNCM', cfa: 'https://cfa.org/breed/tonkinese/', vca: 'https://vcahospitals.com/know-your-pet/cat-breeds/tonkinese', wiki: 'https://en.wikipedia.org/wiki/Tonkinese_cat', health: 1, grooming: 1, energy: 5 },
  { id: 'toyg', name: 'Toyger', origin: 'United States', temperament: 'Playful, Social, Intelligent', weight: '3-7 kg', lifeSpan: '12-15 年', imageId: 'O3F3_S1XN', wiki: 'https://en.wikipedia.org/wiki/Toyger', health: 2, grooming: 1, energy: 5 },
  { id: 'tang', name: 'Turkish Angora', origin: 'Turkey', temperament: 'Affectionate, Agile, Clever, Gentle, Intelligent, Playful, Social', weight: '2-5 kg', lifeSpan: '15-18 年', imageId: '7CGV6WVXq', cfa: 'https://cfa.org/breed/turkish-angora/', vca: 'https://vcahospitals.com/know-your-pet/cat-breeds/turkish-angora', wiki: 'https://en.wikipedia.org/wiki/Turkish_Angora', health: 2, grooming: 2, energy: 5 },
  { id: 'tvan', name: 'Turkish Van', origin: 'Turkey', temperament: 'Agile, Intelligent, Loyal, Playful, Energetic', weight: '3-9 kg', lifeSpan: '12-17 年', imageId: 'sxIXJax6h', cfa: 'https://cfa.org/breed/turkish-van/', vca: 'https://vcahospitals.com/know-your-pet/cat-breeds/turkish-van', wiki: 'https://en.wikipedia.org/wiki/Turkish_Van', health: 1, grooming: 2, energy: 5 },
  { id: 'ycho', name: 'York Chocolate', origin: 'United States', temperament: 'Playful, Social, Intelligent, Curious, Friendly', weight: '5-8 kg', lifeSpan: '13-15 年', imageId: '0SxW2SQ_S', wiki: 'https://en.wikipedia.org/wiki/York_Chocolate', health: 1, grooming: 3, energy: 5 },
]

const inferCoat = (seed: BreedSeed): Breed['coat'] => {
  if (/Sphynx|Donskoy|Rex|LaPerm|Bambino/.test(seed.name)) return '无毛/卷毛'
  if (/Longhair|Persian|Himalayan|Maine Coon|Norwegian|Siberian|Somali|Ragamuffin|Ragdoll|Birman|Cymric|Chantilly/.test(seed.name)) return '长毛'
  if (/Balinese|Turkish|Nebelung|Kurilian|Snowshoe/.test(seed.name)) return '中长毛'
  return '短毛'
}

const inferSize = (weight: string): Breed['bodySize'] => {
  const max = Math.max(...(weight.match(/\d+/g) ?? ['4']).map(Number))
  if (max >= 8) return '大型'
  if (max <= 4) return '小型'
  return '中型'
}

const inferCare = (seed: BreedSeed): Difficulty => {
  if (seed.health >= 4 || seed.grooming >= 5 || seed.energy >= 5) return '高'
  if (seed.health >= 3 || seed.grooming >= 3 || seed.energy >= 4) return '中'
  return '低'
}

const healthRiskText = (seed: BreedSeed) => {
  const risks = ['按品种资料定期体检，留意体重、牙齿和泌尿系统变化']
  if (seed.health >= 3) risks.push('品种相关遗传病或结构性问题风险较高，购买/领养前建议查亲代健康筛查')
  if (seed.grooming >= 4) risks.push('长毛或特殊被毛需要高频梳理，避免毛结、皮肤炎和毛球问题')
  if (seed.energy >= 5) risks.push('高活力品种需要充足互动、攀爬和益智游戏，长期无聊易出现破坏或焦虑')
  if (/Scottish Fold/.test(seed.name)) risks.push('折耳相关软骨发育问题风险突出，不建议以外形偏好作为购买理由')
  if (/Sphynx|Donskoy|Bambino/.test(seed.name)) risks.push('无毛或短腿相关品种需额外关注皮肤清洁、保温和繁育伦理')
  return risks
}

const translateTraits = (traits: string) =>
  traits
    .split(',')
    .map((trait) => trait.trim())
    .filter(Boolean)
    .slice(0, 5)
    .map((trait) => traitMap[trait] ?? trait)

export const breeds: Breed[] = breedSeeds.map((seed, index) => ({
  id: seed.id,
  cnName: cnNameMap[seed.name] ?? seed.name,
  enName: seed.name,
  origin: seed.origin,
  region: regionMap[seed.origin] ?? '其他',
  bodySize: inferSize(seed.weight),
  coat: inferCoat(seed),
  temperament: translateTraits(seed.temperament),
  careLevel: inferCare(seed),
  healthRisks: healthRiskText(seed),
  suitableFor:
    seed.energy >= 5
      ? '适合愿意每天互动、布置攀爬环境并接受高运动量的人'
      : seed.grooming >= 4
        ? '适合能坚持梳毛、清洁和定期护理的家庭'
        : seed.health >= 3
          ? '适合愿意做体检、预算充足并重视繁育来源的人'
          : '适合多数家庭，新手也可考虑，但仍需按年龄阶段科学养护',
  image: catApiImage(seed.imageId, seed.imageUrl),
  imageSource: commonsLicense,
  sources: [
    seed.cfa ? { label: 'CFA breed profile', url: seed.cfa } : cfaBreeds,
    seed.vca ? { label: 'VCA breed profile', url: seed.vca } : ticaBreeds,
    { label: 'Wikipedia breed profile', url: seed.wiki ?? wiki(seed.name) },
    catApiSource,
  ],
  weight: seed.weight,
  lifeSpan: seed.lifeSpan,
  popularity: 100 - index,
}))

const guideArticleSeeds: GuideArticle[] = [
  {
    id: 'budget-source',
    title: '先判断自己适不适合养猫',
    category: '决策准备',
    stage: '接猫前 1-2 周',
    difficulty: '中',
    summary: '先确认预算、时间、同住人、过敏、房屋安全和猫咪来源，再决定接哪只猫。',
    blocks: [
      '养猫不是只买猫粮猫砂，还要预留体检、疫苗、驱虫、绝育、意外急诊和长期慢病预算。',
      '领养、购买或接手别人转养，都要核对年龄、疫苗驱虫、绝育、既往病史和性格信息。',
      '同住人过敏、租房限制、频繁出差、无法封窗或不能接受抓挠掉毛时，不建议仓促接猫。',
    ],
    sources: [
      { label: 'Cornell Choosing and Caring for Your New Cat', url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/choosing-and-caring-your-new-cat' },
      { label: 'International Cat Care choosing a cat', url: 'https://icatcare.org/advice/choosing-a-cat/' },
    ],
  },
  {
    id: 'before-home',
    title: '接猫前 48 小时准备清单',
    category: '新手入门',
    stage: '第 0 天',
    difficulty: '低',
    summary: '先准备安全空间、猫砂盆、食水、运输笼和隔离区，再让猫逐步探索。',
    blocks: [
      '把新猫先安置在安静小房间，放好猫砂盆、水碗、食盆、抓板和躲藏处。',
      '封好窗户、阳台、洗衣机、细线、药品和有毒植物；先不要急着洗澡和强行抱。',
      '提前确认原主人或猫舍正在吃的主食、猫砂类型和疫苗驱虫记录，减少到家后的变量。',
      '准备运输笼、尿垫、旧味道毛巾和少量常吃食物，接猫路上不要频繁打开笼门。',
      '到家后 24-72 小时以稳定为主，食欲、排泄、呼吸、精神状态是最重要观察点。',
    ],
    sources: [
      { label: 'Cornell Choosing and Caring for Your New Cat', url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/choosing-and-caring-your-new-cat' },
      { label: 'AAFP/AAHA Feline Life Stage Guidelines', url: 'https://www.aaha.org/resources/2021-aaha-aafp-feline-life-stage-guidelines/' },
    ],
  },
  {
    id: 'arrival-first-night',
    title: '接猫当天和第一晚怎么做',
    category: '到家适应',
    stage: '第 1 天',
    difficulty: '低',
    summary: '第一天的目标不是亲密互动，而是让猫安全、安静、能吃喝排泄。',
    blocks: [
      '猫到家后先进入安全房，不要马上全屋参观，也不要邀请朋友围观。',
      '运输笼门打开后让猫自己出来，躲起来是正常反应，别伸手硬拽。',
      '第一晚只确认有没有吃、喝、尿、拉和呼吸精神，不强行洗澡、不强行抱睡。',
    ],
    sources: [
      { label: 'Cornell Choosing and Caring for Your New Cat', url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/choosing-and-caring-your-new-cat' },
      { label: 'International Cat Care bringing a cat home', url: 'https://icatcare.org/advice/bringing-your-cat-home/' },
    ],
  },
  {
    id: 'feeding',
    title: '从幼猫到成猫的喂养节奏',
    category: '喂养',
    stage: '第 1 周起',
    difficulty: '中',
    summary: '优先选择完整均衡主食，换粮用 7-10 天过渡，湿粮和饮水对泌尿健康更友好。',
    blocks: [
      '看标签是否为完整均衡主食，幼猫、成猫、老年猫要匹配生命阶段。',
      '换粮按旧粮占比逐步下降、新粮逐步增加，软便或呕吐时放慢节奏。',
      '干粮、主食罐、主食冻干都要看是否能作为主食，不要把零食罐、猫条当日常主食。',
      '饮水少的猫可增加湿粮比例、流动饮水机或多点水碗，但突然多饮多尿要排查疾病。',
      '每天记录食量和体重趋势，突然不吃、明显多饮多尿或体重下降要就医。',
    ],
    sources: [
      { label: 'WSAVA Global Nutrition Guidelines', url: 'https://wsava.org/global-guidelines/global-nutrition-guidelines/' },
      { label: 'Tufts Petfoodology WSAVA resources', url: 'https://sites.tufts.edu/petfoodology/tag/wsava/' },
    ],
  },
  {
    id: 'vaccine-deworm',
    title: '疫苗、驱虫和体检节奏',
    category: '健康管理',
    stage: '第 1 个月',
    difficulty: '中',
    summary: '先弄清楚猫三联、狂犬、猫白血病分别防什么，再按年龄、体重、生活环境和兽医建议安排驱虫。',
    blocks: [
      '核心疫苗通常包括猫三联 FVRCP：猫疱疹病毒 FHV-1、猫杯状病毒 FCV、猫泛白细胞减少症/猫瘟 FPV。',
      '狂犬疫苗是否必须、多久加强，要看所在地法规、疫苗标签和医院建议。',
      '猫白血病 FeLV 对幼猫和有外出、寄养、多猫混养风险的猫更重要，是否接种应先做风险评估。',
      '驱虫不是“一个药全管所有虫”，要按跳蚤蜱虫、耳螨、蛔虫钩虫、绦虫、心丝虫风险分别选择。',
      '不要把网购驱虫药按体感分量使用，年龄、体重、怀孕哺乳、病弱状态和药物禁忌都要核对。',
    ],
    sources: [
      { label: 'AAHA/AAFP Feline Life Stage Guidelines', url: 'https://www.aaha.org/resources/2021-aaha-aafp-feline-life-stage-guidelines/' },
      { label: 'Cornell Feline Health Topics', url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics' },
      { label: 'AAHA Core Vaccines for Pet Cats', url: 'https://www.aaha.org/resources/2020-aahaaafp-feline-vaccination-guidelines/core-vaccines-for-pet-cats/' },
      { label: 'WSAVA Vaccination Guidelines 2024', url: 'https://wsava.org/wp-content/uploads/2024/04/WSAVA-Vaccination-guidelines-2024.pdf' },
      { label: 'CAPC Parasite Product Reference', url: 'https://capcvet.org/parasite-product-applications/' },
    ],
  },
  {
    id: 'behavior',
    title: '抓挠、夜跑、咬手的行为管理',
    category: '行为训练',
    stage: '长期',
    difficulty: '中',
    summary: '用环境替代和正向强化解决问题，不靠打骂、喷水和强迫。',
    blocks: [
      '抓挠是正常行为，给稳定抓板、猫爬架和可替代材质，比惩罚更有效。',
      '夜跑通常来自精力和捕猎节律，睡前安排 10-15 分钟逗猫和少量食物。',
      '咬手时停止互动并换成玩具，避免用手脚直接逗猫。',
      '躲藏、哈气和飞机耳通常代表压力，不要追着抱，先降低环境刺激。',
      '乱尿先排查泌尿疾病和猫砂盆问题，再考虑行为原因。',
    ],
    sources: [
      { label: 'AAFP Cat Friendly Interaction Guidelines', url: 'https://journals.sagepub.com/doi/10.1177/1098612X221128760' },
      { label: 'International Cat Care behavior advice', url: 'https://icatcare.org/advice/' },
    ],
  },
  {
    id: 'sterilization',
    title: '绝育前后护理要点',
    category: '手术护理',
    stage: '适龄后',
    difficulty: '中',
    summary: '绝育能减少繁殖压力和部分疾病风险，术前禁食、术后伤口观察要遵医嘱。',
    blocks: [
      '手术前确认禁食禁水时间、麻醉风险评估和术后用药方案。',
      '术后重点看精神、呼吸、伤口渗血、食欲和排尿；伊丽莎白圈不要随意摘。',
      '术后先限制跳高和剧烈奔跑，猫爬架、窗台和高柜要临时管控。',
      '伤口红肿、持续渗液、精神沉郁或超过医嘱时间仍不进食，要联系医院。',
      '术后体重容易上升，恢复后要重新评估热量和运动量。',
    ],
    sources: [
      { label: 'AAFP/AAHA Feline Life Stage Guidelines', url: 'https://www.aaha.org/resources/2021-aaha-aafp-feline-life-stage-guidelines/' },
    ],
  },
  {
    id: 'litter-toilet',
    title: '猫砂盆、猫砂和如厕习惯',
    category: '日常护理',
    stage: '到家第 1 周',
    difficulty: '低',
    summary: '猫砂盆位置、数量和清洁频率会直接影响排泄稳定，也能帮助你早发现尿便异常。',
    blocks: [
      '猫砂盆建议猫数 +1，避开洗衣机、门口、过道和突然有噪音的位置。',
      '新猫到家先沿用原猫砂，稳定后再逐步混入新猫砂，避免突然全换。',
      '每天至少铲屎 1-2 次，观察尿团大小、频次、颜色和便便软硬。',
      '频繁进砂盆、尿团明显变小、尿血或排便疼痛都应尽快就医。',
    ],
    sources: [
      { label: 'International Cat Care toileting advice', url: 'https://icatcare.org/advice/soiling-indoors/' },
      { label: 'AAFP Cat Friendly Homes', url: 'https://catvets.com/public/PDFs/ClientBrochures/CatFriendlyHome.pdf' },
    ],
  },
  {
    id: 'grooming-care',
    title: '梳毛、剪指甲、刷牙和洗澡',
    category: '日常护理',
    stage: '第 2 周起',
    difficulty: '中',
    summary: '护理要拆成短步骤慢慢脱敏，让猫觉得这些动作可预测、可结束、可得到奖励。',
    blocks: [
      '梳毛、剪指甲和刷牙都应从几秒钟开始，逐渐延长，不要一次追求完成全部。',
      '猫通常不需要频繁洗澡，洗澡会增加应激；脏污、皮肤病或特殊情况按兽医建议处理。',
      '耳朵、眼睛、口腔出现明显分泌物、异味、疼痛或出血时，不要自行使用人用药。',
    ],
    sources: [
      { label: 'International Cat Care grooming advice', url: 'https://icatcare.org/advice/cat-care/' },
      { label: 'Cornell Feline Health Topics', url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics' },
    ],
  },
  {
    id: 'home-safety',
    title: '封窗、危险物和家庭动线',
    category: '安全',
    stage: '长期',
    difficulty: '中',
    summary: '真正的新手友好环境不是买很多用品，而是先把坠楼、中毒、误食和卡住风险降下来。',
    blocks: [
      '阳台、窗户、飘窗必须做硬质防护；普通纱窗不能承担防坠功能。',
      '百合、常见清洁剂、人用药、线绳、橡皮筋、针线和小塑料件要收进柜子。',
      '洗衣机、烘干机、抽屉和折叠沙发使用前先检查，避免猫躲进去。',
      '给猫设置稳定动线：吃饭、饮水、如厕、休息和高处观察互不冲突。',
    ],
    sources: [
      { label: 'ASPCA Toxic and Non-Toxic Plants', url: 'https://www.aspca.org/pet-care/animal-poison-control/cats-plant-list' },
      { label: 'International Cat Care home hazards', url: 'https://icatcare.org/advice/keeping-your-cat-safe/' },
    ],
  },
  {
    id: 'daily-observation',
    title: '每日观察和异常记录',
    category: '健康管理',
    stage: '长期',
    difficulty: '低',
    summary: '养猫高手不是靠猜，而是靠稳定记录：食量、饮水、尿便、体重、精神和行为变化。',
    blocks: [
      '每天确认有没有吃、喝、尿、拉，以及精神是否和平时一致。',
      '每周记录体重和毛发状态，每月整理一次疫苗、驱虫、洗护和就医记录。',
      '呕吐、软便、咳嗽、打喷嚏、抓挠、黑下巴等问题要记录频率和照片。',
      '带记录去医院，比只描述“好像不舒服”更容易帮助兽医判断。',
    ],
    sources: [
      { label: 'Cornell Signs of a Healthy Cat', url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics' },
      { label: 'AAHA/AAFP Feline Life Stage Guidelines', url: 'https://www.aaha.org/resources/2021-aaha-aafp-feline-life-stage-guidelines/' },
    ],
  },
]

const guideManualDetails: Record<
  string,
  Pick<GuideArticle, 'image' | 'imageAlt' | 'imagePosition' | 'steps' | 'checklist' | 'avoid'>
> = {
  'budget-source': {
    image: 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=900&q=82',
    imageAlt: '安静观察镜头的猫咪',
    steps: [
      '先列预算：首月用品、体检、疫苗、驱虫、绝育和急诊备用金分开算。',
      '确认时间：每天至少能铲屎、换水、喂食、观察精神和安排互动。',
      '确认同住人：过敏、恐猫、孕妇、老人、小孩和其他宠物都要提前沟通。',
      '确认住房：能否封窗、房东是否允许、猫砂盆和安全房放在哪里。',
      '确认来源：要求提供年龄、疫苗驱虫、病史、绝育、性格和当前饮食猫砂信息。',
      '决定接猫前，先找到附近靠谱动物医院和 24 小时急诊联系方式。',
    ],
    checklist: [
      '预算里有医疗备用金',
      '同住人都同意养猫',
      '窗户阳台可做物理防护',
      '能接受掉毛、抓挠、夜跑和长期责任',
    ],
    avoid: [
      '不要只因为颜值或冲动低价接猫',
      '不要相信“包健康但不给病历”的承诺',
      '不要在无法封窗、无人照看时仓促接猫',
    ],
  },
  'before-home': {
    image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=900&q=82',
    imageAlt: '猫咪在家中安全空间里休息',
    steps: [
      '选一间安静房间做安全房，先不要让猫全屋活动。',
      '把猫砂盆放在远离食水的位置，砂盆旁边预留清理空间。',
      '放好水碗、食盆、抓板、躲藏纸箱、软垫和低刺激玩具。',
      '收起细线、橡皮筋、药品、清洁剂、百合、针线、小塑料件。',
      '检查窗户、阳台、洗衣机、烘干机、抽屉和沙发缝。',
      '把原粮、原猫砂、疫苗驱虫记录和运输笼放到容易拿的位置。',
    ],
    checklist: [
      '猫砂盆、猫砂、食水碗已就位',
      '运输笼、尿垫、旧味道毛巾已准备',
      '危险植物和药品已收纳',
      '安全房能关门且通风',
    ],
    avoid: [
      '不要第一天就洗澡',
      '不要把猫直接放到全屋',
      '不要让陌生人围观或逗猫',
    ],
  },
  'arrival-first-night': {
    image: 'https://images.unsplash.com/photo-1548247416-ec66f4900b2e?auto=format&fit=crop&w=900&q=82',
    imageAlt: '猫咪在运输后适应新环境',
    steps: [
      '回家后直接把运输笼放进安全房，关门，保持安静。',
      '打开笼门后退开，让猫自己决定什么时候出来。',
      '如果猫躲起来，只把水、食物、猫砂盆放好，不要伸手掏。',
      '前 6 小时减少打扰，只远距离确认呼吸、精神和是否受伤。',
      '睡前检查水碗、食物、猫砂盆位置，留一盏弱光。',
      '第二天早上记录有没有进食、饮水、尿团和便便。',
    ],
    checklist: [
      '到家后有安静独处空间',
      '有水、食物、猫砂盆和躲藏处',
      '第一晚记录吃喝拉撒',
      '运输笼保留在房间内当安全屋',
    ],
    avoid: [
      '不要强行抱出来拍照',
      '不要追着喂猫条',
      '不要因为躲藏就判定“不亲人”',
    ],
  },
  feeding: {
    image: 'https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?auto=format&fit=crop&w=900&q=82',
    imageAlt: '猫咪进食和饮水场景',
    steps: [
      '先沿用原来的主食 3-7 天，确认排便和精神稳定。',
      '看包装是否写明完整均衡主食，并确认适用幼猫、成猫或老年猫。',
      '换粮按旧粮 75% 到 50% 到 25% 再到新粮 100% 逐步过渡。',
      '加入罐头、冻干、猫条时一次只增加一种，方便定位软便原因。',
      '每天固定观察食量、饮水、尿团、便便和体重趋势。',
      '如果超过 24 小时不吃、持续呕吐或明显多饮多尿，尽快就医。',
    ],
    checklist: [
      '主食匹配年龄阶段',
      '有 7-10 天换粮计划',
      '水碗每天清洗',
      '零食不超过日常热量的一小部分',
    ],
    avoid: [
      '不要把猫条当主食',
      '不要突然全量换粮',
      '不要凭配料表自行处理疾病饮食',
    ],
  },
  'vaccine-deworm': {
    image: '/images/guide-vaccine-golden-cat.png',
    imageAlt: '金点英国短毛猫正脸',
    imagePosition: 'center center',
    steps: [
      '先体检再打针：新猫到家稳定后带去医院，确认体温、精神、体重、皮肤耳道、口腔、粪便和传染病风险。',
      '猫三联 FVRCP：通常从 6-8 周龄开始，之后每 2-4 周加强一次，直到 16-20 周龄左右完成幼猫基础免疫；常见商品名如妙三多等，以医院供应和兽医判断为准。',
      '猫三联加强：幼猫基础免疫后通常在 6 个月或 12 个月左右加强一次，之后低风险猫多按 3 年左右加强，高风险猫可能需要更频繁，按疫苗标签和医院方案执行。',
      '狂犬疫苗：很多地区要求 12-16 周龄后接种，之后 1 年加强，再按所在地法规和疫苗标签定期加强。',
      '猫白血病 FeLV：幼猫、会外出、寄养、救助、多猫混养或接触未知猫的猫应和兽医讨论；成年单猫纯室内低风险时不一定需要。',
      '驱虫先分场景：外驱看跳蚤、蜱虫、耳螨；内驱看蛔虫、钩虫、绦虫；部分地区还要考虑心丝虫预防。',
      '常见外驱/内外同驱选择：大宠爱 Revolution/Stronghold 以赛拉菌素为代表；博来恩 Broadline 覆盖内外寄生虫更广；爱沃克 Advocate 常用于外寄生虫和部分线虫场景；具体能覆盖哪些虫要看包装说明。',
      '常见内驱选择：海乐妙 Milbemax、拜宠清 Drontal 等常用于体内寄生虫场景；如果怀疑绦虫，通常要确认产品是否含吡喹酮等针对绦虫成分。',
      '用药前核对四件事：猫的体重、年龄下限、是否怀孕哺乳/病弱、是否和其他药冲突；不要把犬用驱虫药给猫用。',
      '把疫苗批号、接种日期、驱虫药名称、体重和下次提醒记录下来，换医院时直接带记录。',
    ],
    checklist: [
      '知道猫三联对应 FHV-1、FCV、FPV',
      '知道狂犬是否受当地法规要求',
      '知道 FeLV 是否属于自家猫风险项',
      '驱虫药按体重和年龄下限选择',
      '药名、批号、日期和下次提醒已记录',
    ],
    avoid: [
      '不要自行拆分成人或犬用药',
      '不要按网友剂量驱虫',
      '不要把“内外同驱”理解成所有虫都能管',
      '不要刚到家极度应激时立刻安排非急需项目',
      '不要在发烧、腹泻、持续呕吐或精神差时强行接种疫苗',
    ],
  },
  behavior: {
    image: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=900&q=82',
    imageAlt: '猫咪与玩具互动',
    steps: [
      '每天安排 2-3 次短时间互动，每次先玩再给少量食物。',
      '逗猫棒模拟猎物从远处移动、躲藏、停顿，不要一直怼脸。',
      '咬手时立刻停止互动，换成玩具，不用手脚逗猫。',
      '抓沙发时在旁边放稳定抓板，并用奖励引导猫去抓板。',
      '夜跑严重时，睡前增加互动、喂少量主食，并保持白天环境丰富。',
      '乱尿、突然攻击、持续躲藏先排查疼痛、泌尿或环境压力。',
    ],
    checklist: [
      '有抓板、猫爬架和躲藏点',
      '每天有稳定互动时间',
      '玩具定期轮换',
      '问题行为先排查健康原因',
    ],
    avoid: [
      '不要打骂、喷水或吓唬猫',
      '不要用手脚当玩具',
      '不要把乱尿简单理解为报复',
    ],
  },
  sterilization: {
    image: 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?auto=format&fit=crop&w=900&q=82',
    imageAlt: '猫咪安静休息',
    steps: [
      '先和医院确认适合绝育的年龄、体重、健康状态和术前检查项目。',
      '术前按医嘱禁食禁水，准备运输笼、尿垫、伊丽莎白圈和安静恢复区。',
      '接回家后先限制跳高和剧烈奔跑，猫爬架、窗台和高柜临时管控。',
      '每天看伤口、精神、食欲、排尿和排便，记录异常。',
      '按医嘱用药和复查，不随意摘圈或涂药。',
      '恢复后重新评估热量摄入，避免绝育后体重快速上升。',
    ],
    checklist: [
      '术前检查和禁食时间已确认',
      '恢复区低刺激、低跳跃风险',
      '伤口每天观察',
      '复查时间已安排',
    ],
    avoid: [
      '不要自行给止痛药',
      '不要因为猫不喜欢就摘圈',
      '不要忽视持续不吃、伤口渗液或精神沉郁',
    ],
  },
  'litter-toilet': {
    image: 'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?auto=format&fit=crop&w=900&q=82',
    imageAlt: '猫咪在室内环境中活动',
    steps: [
      '猫砂盆数量按猫数 +1 准备，先放在安静、易到达的位置。',
      '新猫到家先沿用原猫砂，稳定后再混入新猫砂。',
      '每天至少铲 1-2 次，记录尿团大小、次数和便便软硬。',
      '每周清洗猫砂盆，避免强烈香味清洁剂残留。',
      '如果猫在盆外排泄，先看砂盆位置、砂量、清洁频率和健康问题。',
      '尿频、尿血、尿团变小或蹲很久尿不出，按急症处理。',
    ],
    checklist: [
      '砂盆足够大且入口不困难',
      '食水和砂盆分开',
      '尿团和便便每天观察',
      '多猫家庭资源分散',
    ],
    avoid: [
      '不要突然换猫砂',
      '不要把砂盆放在噪音源旁',
      '不要惩罚盆外排泄',
    ],
  },
  'grooming-care': {
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Tuxedo_cat,_front_view.png?width=900',
    imageAlt: '正脸完整的猫咪',
    steps: [
      '先让猫闻梳子、指甲剪、牙刷，每次接触几秒就奖励。',
      '梳毛从背部和脖子开始，打结部位不要硬扯。',
      '剪指甲只剪透明尖端，看不清血线就少剪一点。',
      '刷牙从舔牙膏开始，再慢慢过渡到触碰牙齿和刷牙。',
      '洗澡只在确有需要时做，提前准备防滑垫、毛巾和暖和环境。',
      '护理中出现持续挣扎、疼痛、出血或皮肤异常，暂停并咨询专业人士。',
    ],
    checklist: [
      '梳子、指甲剪、牙刷分阶段适应',
      '每次护理时间短且有奖励',
      '长毛猫重点防打结',
      '口臭、牙龈红肿及时检查',
    ],
    avoid: [
      '不要硬剪、硬洗、硬掏耳朵',
      '不要用人用牙膏',
      '不要在猫极度应激时强行完成全套护理',
    ],
  },
  'home-safety': {
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/(King)%20George%20of%20the%20Jungle%20(5354109866).jpg?width=900',
    imageAlt: '猫咪在窗边正脸休息',
    steps: [
      '先做封窗封阳台，普通纱窗不能当防坠网。',
      '收好百合、绿萝等风险植物，以及药品、清洁剂、杀虫剂。',
      '线绳、橡皮筋、针线、小玩具和塑料袋都放进柜子。',
      '洗衣机、烘干机、抽屉、折叠沙发使用前先检查。',
      '给猫安排高处、躲藏点、抓挠点和安静休息区。',
      '多猫家庭把食水、砂盆、休息区分散，减少资源竞争。',
    ],
    checklist: [
      '窗户阳台有硬质防护',
      '危险植物和药品已移除',
      '小物件和线绳已收纳',
      '家里有高处和躲藏点',
    ],
    avoid: [
      '不要让猫单独接触开放阳台',
      '不要用香味重的清洁剂覆盖异味',
      '不要把猫长期关在资源不足的小空间',
    ],
  },
  'daily-observation': {
    image: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=900&q=82',
    imageAlt: '猫咪在家中被观察记录',
    steps: [
      '每天看五件事：吃、喝、尿、拉、精神。',
      '每周称重一次，幼猫和减重猫可更频繁记录。',
      '把呕吐、软便、打喷嚏、咳嗽、抓挠、黑下巴拍照记录。',
      '保留食品包装、批号、购买渠道和换粮日期。',
      '就医前整理症状开始时间、频率、饮食变化和用药情况。',
      '出现急症信号时直接去医院，不在网上等待诊断。',
    ],
    checklist: [
      '有体重和食量记录',
      '有疫苗驱虫绝育记录',
      '有医院和急诊联系方式',
      '异常照片和视频可追溯',
    ],
    avoid: [
      '不要只凭“感觉好像没事”拖延',
      '不要自行使用人用药',
      '不要只靠猫条、益生菌或保健品处理持续症状',
    ],
  },
}

export const guideArticles: GuideArticle[] = guideArticleSeeds.map((article) => ({
  ...article,
  ...guideManualDetails[article.id],
}))

export const careTips = [
  {
    category: '饮食',
    tips: ['水碗至少每天清洗一次，湿粮开封后冷藏并尽快吃完。', '零食热量要计入每日总热量，猫条不应替代主食。', '换粮、加罐头、加冻干一次只改一个变量，方便定位软便原因。', '不要给猫喂洋葱、蒜、酒精、巧克力、葡萄/葡萄干。'],
  },
  {
    category: '清洁',
    tips: ['猫砂盆数量建议为猫数 +1，放在安静、通风、易到达的位置。', '长毛猫每天短时间梳毛，短毛猫每周梳毛也能减少毛球。', '下巴和食盆边缘容易堆油脂，黑下巴猫优先换浅口陶瓷或不锈钢碗。', '耳朵、眼睛、牙齿异常分泌物不要自行滴人用药。'],
  },
  {
    category: '环境',
    tips: ['家里至少提供一个高处观察点、一个躲藏点和一个抓挠点。', '窗户和阳台必须物理防护，纱窗不能当防坠网。', '高处跳台之间要有可落脚路径，避免胖猫或老年猫摔伤。', '多猫家庭要分散食水、猫砂盆和休息区，降低资源竞争。'],
  },
  {
    category: '互动',
    tips: ['每天分 2-3 次短时间高质量玩耍，比一次玩很久更稳定。', '逗猫棒模拟猎物路径，不要一直怼脸。', '玩耍后给少量食物或主食罐，模拟捕猎后的进食闭环。', '猫主动靠近时再互动，尊重尾巴甩动、耳朵后压等拒绝信号。'],
  },
  {
    category: '记录',
    tips: ['每月固定称重，体重趋势比单次数字更有价值。', '记录疫苗、驱虫、绝育、过敏、呕吐、软便和就医时间。', '拍下配料表、批号和购买渠道，遇到召回或不适时更容易追溯。', '同一症状连续出现时记录频率、时长和诱因，不要只凭印象判断。'],
  },
  {
    category: '行为问题',
    tips: ['突然乱尿先排查尿路、疼痛和猫砂盆问题，再考虑报复心理。', '抓沙发先补抓板和位置，不要只喷驱避剂。', '咬手说明互动方式需要调整，停止用手脚当玩具。', '胆小猫需要固定安全屋，不要让客人围观或强行抱。'],
  },
  {
    category: '用品选择',
    tips: ['新手先买刚需：主食、猫砂盆、猫砂、食水碗、运输笼、抓板、梳子。', '猫窝不是刚需，很多猫更喜欢纸箱、毯子和高处。', '自动喂食器和饮水机要能彻底清洗，不能替代日常观察。', '保健品不要囤太多，先确认真实需求和适口性。'],
  },
  {
    category: '医疗观察',
    tips: ['超过 24 小时不吃、张口呼吸、尿不出、持续呕吐都不要等攻略。', '长期软便、掉毛、皮屑、口臭和黑下巴要从饮食、清洁、寄生虫和疾病一起排查。', '家里常备运输笼、尿垫、伊丽莎白圈和近期病历照片。', '不要自行使用人用药、抗生素、止痛药或网上药量。'],
  },
]

export const guideSocialRefs: Source[] = [
  { label: '小红书：新手养猫清单', url: 'https://www.xiaohongshu.com/search_result?keyword=%E6%96%B0%E6%89%8B%E5%85%BB%E7%8C%AB%E6%B8%85%E5%8D%95' },
  { label: '小红书：接猫第一天', url: 'https://www.xiaohongshu.com/search_result?keyword=%E6%8E%A5%E7%8C%AB%E7%AC%AC%E4%B8%80%E5%A4%A9' },
  { label: '小红书：猫咪疫苗驱虫', url: 'https://www.xiaohongshu.com/search_result?keyword=%E7%8C%AB%E5%92%AA%20%E7%96%AB%E8%8B%97%20%E9%A9%B1%E8%99%AB' },
  { label: '小红书：猫砂盆布置', url: 'https://www.xiaohongshu.com/search_result?keyword=%E7%8C%AB%E7%A0%82%E7%9B%86%20%E5%B8%83%E7%BD%AE' },
  { label: '小红书：新手养猫避坑', url: 'https://www.xiaohongshu.com/search_result?keyword=%E6%96%B0%E6%89%8B%E5%85%BB%E7%8C%AB%20%E9%81%BF%E5%9D%91' },
]

export const tipSocialRefs: Source[] = [
  { label: '小红书：猫咪软便怎么办', url: 'https://www.xiaohongshu.com/search_result?keyword=%E7%8C%AB%E5%92%AA%E8%BD%AF%E4%BE%BF%E6%80%8E%E4%B9%88%E5%8A%9E' },
  { label: '小红书：猫咪黑下巴', url: 'https://www.xiaohongshu.com/search_result?keyword=%E7%8C%AB%E5%92%AA%E9%BB%91%E4%B8%8B%E5%B7%B4' },
  { label: '小红书：猫咪喝水少', url: 'https://www.xiaohongshu.com/search_result?keyword=%E7%8C%AB%E5%92%AA%E5%96%9D%E6%B0%B4%E5%B0%91' },
  { label: '小红书：多猫家庭', url: 'https://www.xiaohongshu.com/search_result?keyword=%E5%A4%9A%E7%8C%AB%E5%AE%B6%E5%BA%AD' },
  { label: '小红书：猫咪掉毛', url: 'https://www.xiaohongshu.com/search_result?keyword=%E7%8C%AB%E5%92%AA%E6%8E%89%E6%AF%9B' },
]

export const rankings: ProductRanking[] = [
  {
    category: '猫粮',
    rank: 1,
    brand: '鲜朗 Xianlang',
    product: '低温烘焙 / 鲜肉全价猫粮系列',
    origin: '中国',
    priceRange: '中端：约 ¥45-95/kg',
    strengths: ['小红书和抖音国产粮测评里高频出现', '低温烘焙和鲜肉卖点清晰', '适合想从平价粮升级的用户'],
    cautions: '烘焙粮和高肉配方不等于适合所有猫，肠胃敏感猫要小包装试喂。',
    reputation: '中国网友常把它和蓝氏、网易严选、高爷家、麦富迪放在一起比较，讨论重点是适口性、便便状态和性价比。',
    evidence: '主要参考小红书“鲜朗猫粮测评/试喂”、抖音“鲜朗猫粮”相关视频，以及用户试喂反馈的高频结论。',
    sources: [
      { label: '小红书：鲜朗猫粮测评', url: 'https://www.xiaohongshu.com/search_result?keyword=%E9%B2%9C%E6%9C%97%20%E7%8C%AB%E7%B2%AE%20%E6%B5%8B%E8%AF%84' },
      { label: '抖音：鲜朗猫粮', url: 'https://www.douyin.com/search/%E9%B2%9C%E6%9C%97%E7%8C%AB%E7%B2%AE' },
      { label: 'B站：鲜朗猫粮测评', url: 'https://search.bilibili.com/all?keyword=%E9%B2%9C%E6%9C%97%20%E7%8C%AB%E7%B2%AE%20%E6%B5%8B%E8%AF%84' },
    ],
  },
  {
    category: '猫粮',
    rank: 2,
    brand: '渴望 Orijen',
    product: 'Original Cat / Six Fish Cat 等进口高肉粮',
    origin: '加拿大品牌/进口渠道',
    priceRange: '高端：约 ¥120-220/kg',
    strengths: ['小红书和抖音高端粮讨论里常见', '进口高肉粮代表', '适合预算充足且猫咪耐受良好的家庭'],
    cautions: '价格高，部分猫可能对豆类、高蛋白或高脂不耐受；泌尿史和肠胃敏感猫谨慎。',
    reputation: '中国网友对它的评价通常是“贵、肉含量高、口碑强但不一定适合所有猫”。',
    evidence: '主要参考小红书“渴望猫粮测评/翻车/复购”和抖音“渴望猫粮档次/口碑”相关视频。',
    sources: [
      { label: '小红书：渴望猫粮测评', url: 'https://www.xiaohongshu.com/search_result?keyword=%E6%B8%B4%E6%9C%9B%20%E7%8C%AB%E7%B2%AE%20%E6%B5%8B%E8%AF%84' },
      { label: '抖音：渴望猫粮', url: 'https://www.douyin.com/search/%E6%B8%B4%E6%9C%9B%E7%8C%AB%E7%B2%AE' },
      { label: 'Orijen 官方猫粮', url: 'https://www.orijenpetfoods.com/en-US/cats/cat-food' },
    ],
  },
  {
    category: '猫粮',
    rank: 3,
    brand: '蓝氏 Luscious',
    product: '全价猫粮 / 猎鸟乳鸽 / 冻干猫粮系列',
    origin: '中国',
    priceRange: '中端到中高端：约 ¥45-95/kg',
    strengths: ['抖音猫粮测评视频里高频出现', '国产高肉粮讨论度高', '适合关注国产升级粮的用户'],
    cautions: '不同系列价格和配方差异明显，高肉卖点需要结合具体配方、便便状态和体重管理判断。',
    reputation: '中国网友常把蓝氏和鲜朗、网易严选、高爷家、麦富迪等国产粮一起比较。',
    evidence: '主要参考小红书“蓝氏猫粮测评”和抖音“蓝氏猫粮”相关视频。',
    sources: [
      { label: '小红书：蓝氏猫粮测评', url: 'https://www.xiaohongshu.com/search_result?keyword=%E8%93%9D%E6%B0%8F%20%E7%8C%AB%E7%B2%AE%20%E6%B5%8B%E8%AF%84' },
      { label: '抖音：蓝氏猫粮', url: 'https://www.douyin.com/search/%E7%8C%AB%E7%B2%AE%E8%93%9D%E6%B0%8F%E5%A5%BD%E5%90%97' },
      { label: '小红书：国产猫粮测评', url: 'https://www.xiaohongshu.com/search_result?keyword=%E5%9B%BD%E4%BA%A7%20%E7%8C%AB%E7%B2%AE%20%E6%B5%8B%E8%AF%84' },
    ],
  },
  {
    category: '猫粮',
    rank: 4,
    brand: '弗列加特 Fregate',
    product: '烘焙粮 / 冻干粮 / 鲜肉猫粮系列',
    origin: '中国',
    priceRange: '中高端：约 ¥65-130/kg',
    strengths: ['小红书和抖音国产升级粮讨论里常见', '冻干、烘焙等产品形态辨识度高', '适合预算更充足的国产粮用户'],
    cautions: '冻干混粮不等于更适合所有猫，肥胖猫、胰腺炎史或软便猫要谨慎试喂。',
    reputation: '中国网友常围绕适口性、便便状态、价格和活动价讨论弗列加特。',
    evidence: '主要参考小红书“弗列加特猫粮测评”和抖音“弗列加特猫粮”相关视频。',
    sources: [
      { label: '小红书：弗列加特猫粮测评', url: 'https://www.xiaohongshu.com/search_result?keyword=%E5%BC%97%E5%88%97%E5%8A%A0%E7%89%B9%20%E7%8C%AB%E7%B2%AE%20%E6%B5%8B%E8%AF%84' },
      { label: '抖音：弗列加特猫粮', url: 'https://www.douyin.com/search/%E5%BC%97%E5%88%97%E5%8A%A0%E7%89%B9%E7%8C%AB%E7%B2%AE' },
      { label: '小红书：烘焙猫粮讨论', url: 'https://www.xiaohongshu.com/search_result?keyword=%E7%83%98%E7%84%99%20%E7%8C%AB%E7%B2%AE%20%E6%B5%8B%E8%AF%84' },
    ],
  },
  {
    category: '猫粮',
    rank: 5,
    brand: '百利 Instinct',
    product: 'Original / Raw Boost 等进口粮',
    origin: '美国品牌/进口渠道',
    priceRange: '高端：约 ¥100-200/kg',
    strengths: ['小红书进口粮讨论里常见', '冻干混合粮辨识度高', '适合预算充足且追求进口粮的用户'],
    cautions: '冻干混粮不等于更适合所有猫；注意购买渠道、防伪和批次稳定性。',
    reputation: '中国网友常把百利和渴望、爱肯拿、巅峰等进口品牌放在一起比较。',
    evidence: '主要参考小红书“百利猫粮测评”、抖音进口猫粮讨论相关内容。',
    sources: [
      { label: '小红书：百利猫粮测评', url: 'https://www.xiaohongshu.com/search_result?keyword=%E7%99%BE%E5%88%A9%20%E7%8C%AB%E7%B2%AE%20%E6%B5%8B%E8%AF%84' },
      { label: '抖音：百利猫粮', url: 'https://www.douyin.com/search/%E7%99%BE%E5%88%A9%E7%8C%AB%E7%B2%AE' },
      { label: 'Instinct 官方猫粮', url: 'https://instinctpetfood.com/cat-food/' },
    ],
  },
  {
    category: '猫粮',
    rank: 6,
    brand: '高爷家 Gao Ye Jia',
    product: '国产全价猫粮 / 性价比猫粮系列',
    origin: '中国',
    priceRange: '大众到中端：约 ¥35-85/kg',
    strengths: ['小红书国产平价粮讨论里高频出现', '预算友好', '适合新手做候选但需要看具体系列'],
    cautions: '同品牌不同系列差异明显，不要只看品牌名或大包装低价；先试小包装。',
    reputation: '中国网友常在“平价猫粮/性价比猫粮”内容里提到高爷家，评价重点是预算、便便和适口性。',
    evidence: '主要参考小红书高爷家猫粮测评帖、抖音性价比猫粮视频和用户复购反馈。',
    sources: [
      { label: '小红书：高爷家猫粮测评', url: 'https://www.xiaohongshu.com/search_result?keyword=%E9%AB%98%E7%88%B7%E5%AE%B6%20%E7%8C%AB%E7%B2%AE%20%E6%B5%8B%E8%AF%84' },
      { label: '抖音：高爷家猫粮', url: 'https://www.douyin.com/search/%E9%AB%98%E7%88%B7%E5%AE%B6%E7%8C%AB%E7%B2%AE' },
      { label: '小红书：平价猫粮讨论', url: 'https://www.xiaohongshu.com/search_result?keyword=%E5%B9%B3%E4%BB%B7%20%E7%8C%AB%E7%B2%AE%20%E6%B5%8B%E8%AF%84' },
    ],
  },
  {
    category: '猫粮',
    rank: 7,
    brand: '网易严选 NetEase Yanxuan',
    product: '全价猫粮 / 冻干双拼 / 幼猫成猫系列',
    origin: '中国',
    priceRange: '大众到中端：约 ¥30-75/kg',
    strengths: ['电商渠道可及性高', '小红书平价粮讨论里常见', '适合预算明确的新手做对比候选'],
    cautions: '同品牌不同系列配方差异明显，优先看具体产品配料、营养声明和批次口碑。',
    reputation: '中国用户常把网易严选和高爷家、麦富迪、鲜朗等品牌一起比较，讨论重点是活动价、适口性和便便状态。',
    evidence: '主要参考小红书“网易严选猫粮测评”、抖音“网易严选猫粮”相关视频和用户复购反馈。',
    sources: [
      { label: '小红书：网易严选猫粮测评', url: 'https://www.xiaohongshu.com/search_result?keyword=%E7%BD%91%E6%98%93%E4%B8%A5%E9%80%89%20%E7%8C%AB%E7%B2%AE%20%E6%B5%8B%E8%AF%84' },
      { label: '抖音：网易严选猫粮', url: 'https://www.douyin.com/search/%E7%BD%91%E6%98%93%E4%B8%A5%E9%80%89%E7%8C%AB%E7%B2%AE' },
      { label: '小红书：平价猫粮讨论', url: 'https://www.xiaohongshu.com/search_result?keyword=%E5%B9%B3%E4%BB%B7%20%E7%8C%AB%E7%B2%AE%20%E6%B5%8B%E8%AF%84' },
    ],
  },
  {
    category: '猫粮',
    rank: 8,
    brand: '麦富迪 Myfoodie',
    product: '全价猫粮 / 鲜肉粮 / 双拼粮系列',
    origin: '中国',
    priceRange: '大众到中端：约 ¥25-70/kg',
    strengths: ['国内大众渠道常见', '价格带覆盖广', '多猫家庭试错成本相对低'],
    cautions: '产品线较多，不能只按品牌判断；肠胃敏感猫先买小包装观察。',
    reputation: '中国网友对麦富迪讨论集中在价格、渠道、系列差异和适口性。',
    evidence: '主要参考小红书“麦富迪猫粮测评”和抖音相关用户反馈。',
    sources: [
      { label: '小红书：麦富迪猫粮测评', url: 'https://www.xiaohongshu.com/search_result?keyword=%E9%BA%A6%E5%AF%8C%E8%BF%AA%20%E7%8C%AB%E7%B2%AE%20%E6%B5%8B%E8%AF%84' },
      { label: '抖音：麦富迪猫粮', url: 'https://www.douyin.com/search/%E9%BA%A6%E5%AF%8C%E8%BF%AA%E7%8C%AB%E7%B2%AE' },
      { label: 'Myfoodie 官方', url: 'https://www.myfoodiepet.com/' },
    ],
  },
  {
    category: '猫粮',
    rank: 9,
    brand: '爱肯拿 Acana',
    product: 'Homestead Harvest / Wild Prairie 等进口猫粮',
    origin: '加拿大品牌/进口渠道',
    priceRange: '高端：约 ¥100-190/kg',
    strengths: ['进口粮讨论里常见', '常被拿来和渴望做同系对比', '适合预算充足且猫咪耐受良好的家庭'],
    cautions: '价格和渠道波动较大，注意防伪、批次和猫咪对豆类/高蛋白的耐受。',
    reputation: '中国网友常把爱肯拿看作高端进口粮候选，评价重点是价格、渠道稳定和软便情况。',
    evidence: '主要参考小红书“爱肯拿猫粮测评”和抖音进口猫粮讨论内容。',
    sources: [
      { label: '小红书：爱肯拿猫粮测评', url: 'https://www.xiaohongshu.com/search_result?keyword=%E7%88%B1%E8%82%AF%E6%8B%BF%20%E7%8C%AB%E7%B2%AE%20%E6%B5%8B%E8%AF%84' },
      { label: '抖音：爱肯拿猫粮', url: 'https://www.douyin.com/search/%E7%88%B1%E8%82%AF%E6%8B%BF%E7%8C%AB%E7%B2%AE' },
      { label: 'Acana 官方猫粮', url: 'https://www.acana.com/en-US/cats/cat-food' },
    ],
  },
  {
    category: '猫粮',
    rank: 10,
    brand: '皇家 Royal Canin',
    product: '幼猫粮 / 成猫粮 / 处方粮系列',
    origin: '法国品牌/多地产能',
    priceRange: '中端到高端：约 ¥55-140/kg',
    strengths: ['宠物医院和线下渠道认知度高', '幼猫粮和处方粮讨论度高', '产品线覆盖生命阶段和特殊需求'],
    cautions: '处方粮必须按兽医建议使用；普通粮也要结合猫咪体况和适口性选择。',
    reputation: '中国用户常围绕幼猫粮、肠胃敏感、泌尿处方粮和价格做讨论。',
    evidence: '主要参考小红书“皇家猫粮测评”、抖音“皇家猫粮”内容以及品牌公开资料。',
    sources: [
      { label: '小红书：皇家猫粮测评', url: 'https://www.xiaohongshu.com/search_result?keyword=%E7%9A%87%E5%AE%B6%20%E7%8C%AB%E7%B2%AE%20%E6%B5%8B%E8%AF%84' },
      { label: '抖音：皇家猫粮', url: 'https://www.douyin.com/search/%E7%9A%87%E5%AE%B6%E7%8C%AB%E7%B2%AE' },
      { label: 'Royal Canin 官方猫粮', url: 'https://www.royalcanin.com/cats' },
    ],
  },
  {
    category: '猫粮',
    rank: 11,
    brand: '自然光环 HALO',
    product: 'Holistic Cat / Indoor Cat 等进口猫粮系列',
    origin: '美国品牌/进口渠道',
    priceRange: '中高端到高端：约 ¥80-170/kg',
    strengths: ['进口猫粮讨论里常见', '自然光环中文名认知度较高', '适合和美士、素力高等进口粮做横向了解'],
    cautions: '进口渠道、批次和供货稳定性需要核对；不要只看“天然粮”概念。',
    reputation: '中国网友常讨论适口性、软便情况、颗粒大小和渠道真伪。',
    evidence: '主要参考小红书“自然光环猫粮测评”、抖音相关内容、B站/豆瓣进口猫粮讨论。',
    sources: [
      { label: '小红书：自然光环猫粮测评', url: 'https://www.xiaohongshu.com/search_result?keyword=%E8%87%AA%E7%84%B6%E5%85%89%E7%8E%AF%20%E7%8C%AB%E7%B2%AE%20%E6%B5%8B%E8%AF%84' },
      { label: '抖音：自然光环猫粮', url: 'https://www.douyin.com/search/%E8%87%AA%E7%84%B6%E5%85%89%E7%8E%AF%E7%8C%AB%E7%B2%AE' },
      { label: 'HALO 官方猫粮', url: 'https://www.halopets.com/cat-food/' },
    ],
  },
  {
    category: '猫粮',
    rank: 12,
    brand: '阿飞和巴弟 Alphapet',
    product: 'E76 / P86 / 全价猫粮系列',
    origin: '中国',
    priceRange: '大众到中端：约 ¥35-85/kg',
    strengths: ['国产猫粮和猫零食讨论度高', '小红书和抖音新锐国产粮内容里常见', '适合关注国产品牌的用户做对比'],
    cautions: '不同系列配方差异大，先看具体产品营养声明和猫咪耐受，不要只看品牌声量。',
    reputation: '中国网友常围绕 E76、P86、适口性、价格和品牌争议做讨论。',
    evidence: '主要参考小红书“阿飞和巴弟猫粮测评”、抖音相关视频，以及公开品牌研究资料。',
    sources: [
      { label: '小红书：阿飞和巴弟猫粮测评', url: 'https://www.xiaohongshu.com/search_result?keyword=%E9%98%BF%E9%A3%9E%E5%92%8C%E5%B7%B4%E5%BC%9F%20%E7%8C%AB%E7%B2%AE%20%E6%B5%8B%E8%AF%84' },
      { label: '抖音：阿飞和巴弟猫粮', url: 'https://www.douyin.com/search/%E9%98%BF%E9%A3%9E%E5%92%8C%E5%B7%B4%E5%BC%9F%E7%8C%AB%E7%B2%AE' },
      { label: '魔镜洞察：阿飞和巴弟品牌研究', url: 'https://www.mktindex.com/research/notebook/1118%E9%98%BF%E9%A3%9E%E5%92%8C%E5%B7%B4%E5%BC%9F1-Copy1' },
    ],
  },
  {
    category: '猫粮',
    rank: 13,
    brand: '诚实一口 Honest Bite',
    product: '全价猫粮 / 烘焙粮 / 鲜肉粮系列',
    origin: '中国',
    priceRange: '中端：约 ¥45-100/kg',
    strengths: ['年轻养猫用户讨论度较高', '线上渠道和内容种草强', '适合和鲜朗、蓝氏等国产粮做横向了解'],
    cautions: '营销声量不等于适合所有猫，肠胃敏感猫先试小包装。',
    reputation: '用户评价集中在适口性、活动价、便便状态和配料表。',
    evidence: '主要参考小红书“诚实一口猫粮测评”和抖音相关试喂反馈。',
    sources: [
      { label: '小红书：诚实一口猫粮测评', url: 'https://www.xiaohongshu.com/search_result?keyword=%E8%AF%9A%E5%AE%9E%E4%B8%80%E5%8F%A3%20%E7%8C%AB%E7%B2%AE%20%E6%B5%8B%E8%AF%84' },
      { label: '抖音：诚实一口猫粮', url: 'https://www.douyin.com/search/%E8%AF%9A%E5%AE%9E%E4%B8%80%E5%8F%A3%E7%8C%AB%E7%B2%AE' },
    ],
  },
  {
    category: '猫粮',
    rank: 14,
    brand: '帕特 Pat',
    product: '鲜肉猫粮 / 烘焙粮 / 冻干粮系列',
    origin: '中国',
    priceRange: '中端到中高端：约 ¥55-130/kg',
    strengths: ['国产鲜肉粮和冻干粮讨论里常见', '零食、湿粮、主粮产品线都有用户认知', '适合关注高肉配方的用户做对比'],
    cautions: '高肉、高蛋白和冻干卖点要结合具体配方看，软便猫和肥胖猫谨慎。',
    reputation: '用户讨论集中在适口性、价格、便便和是否适合玻璃胃猫。',
    evidence: '主要参考小红书“帕特猫粮测评”和抖音“帕特猫粮”相关内容。',
    sources: [
      { label: '小红书：帕特猫粮测评', url: 'https://www.xiaohongshu.com/search_result?keyword=%E5%B8%95%E7%89%B9%20%E7%8C%AB%E7%B2%AE%20%E6%B5%8B%E8%AF%84' },
      { label: '抖音：帕特猫粮', url: 'https://www.douyin.com/search/%E5%B8%95%E7%89%B9%E7%8C%AB%E7%B2%AE' },
    ],
  },
  {
    category: '猫粮',
    rank: 15,
    brand: '伯纳天纯 Pure&Natural',
    product: '全价猫粮 / 幼猫成猫 / 低敏系列',
    origin: '中国',
    priceRange: '大众到中端：约 ¥35-90/kg',
    strengths: ['国内老牌宠粮认知度较高', '线下和电商渠道常见', '适合新手做大众国产粮对比'],
    cautions: '不同系列定位差异明显，低敏、无谷等概念仍需看具体原料和猫咪反应。',
    reputation: '中国用户常讨论渠道、价格、适口性和系列差异。',
    evidence: '主要参考小红书“伯纳天纯猫粮测评”和抖音相关内容。',
    sources: [
      { label: '小红书：伯纳天纯猫粮测评', url: 'https://www.xiaohongshu.com/search_result?keyword=%E4%BC%AF%E7%BA%B3%E5%A4%A9%E7%BA%AF%20%E7%8C%AB%E7%B2%AE%20%E6%B5%8B%E8%AF%84' },
      { label: '抖音：伯纳天纯猫粮', url: 'https://www.douyin.com/search/%E4%BC%AF%E7%BA%B3%E5%A4%A9%E7%BA%AF%E7%8C%AB%E7%B2%AE' },
      { label: '伯纳天纯官方', url: 'https://www.purenaturalpet.com/' },
    ],
  },
  {
    category: '猫粮',
    rank: 16,
    brand: '江小傲',
    product: '全价猫粮 / 主食湿粮 / 零食系列',
    origin: '中国',
    priceRange: '大众到中端：约 ¥30-80/kg',
    strengths: ['国产平价粮讨论里常见', '价格带友好', '适合预算有限用户做候选对比'],
    cautions: '低价大包装要更关注批次、保存和猫咪耐受，先小包装试喂。',
    reputation: '用户讨论集中在性价比、适口性、便便和活动价。',
    evidence: '主要参考小红书“江小傲猫粮测评”和抖音相关内容。',
    sources: [
      { label: '小红书：江小傲猫粮测评', url: 'https://www.xiaohongshu.com/search_result?keyword=%E6%B1%9F%E5%B0%8F%E5%82%B2%20%E7%8C%AB%E7%B2%AE%20%E6%B5%8B%E8%AF%84' },
      { label: '抖音：江小傲猫粮', url: 'https://www.douyin.com/search/%E6%B1%9F%E5%B0%8F%E5%82%B2%E7%8C%AB%E7%B2%AE' },
    ],
  },
  {
    category: '猫粮',
    rank: 17,
    brand: '素力高 Solid Gold',
    product: '金装素力高 / Indigo Moon 等进口猫粮',
    origin: '美国品牌/进口渠道',
    priceRange: '中高端：约 ¥80-160/kg',
    strengths: ['进口粮老牌讨论里常见', '常被简称金素', '适合和自然光环、美士等进口粮做横向了解'],
    cautions: '进口粮注意渠道、防伪、批次和猫咪软便反应。',
    reputation: '中国网友常围绕“金素”、适口性、价格和渠道做讨论。',
    evidence: '主要参考小红书“素力高猫粮测评”和抖音进口猫粮讨论内容。',
    sources: [
      { label: '小红书：素力高猫粮测评', url: 'https://www.xiaohongshu.com/search_result?keyword=%E7%B4%A0%E5%8A%9B%E9%AB%98%20%E7%8C%AB%E7%B2%AE%20%E6%B5%8B%E8%AF%84' },
      { label: '抖音：素力高猫粮', url: 'https://www.douyin.com/search/%E7%B4%A0%E5%8A%9B%E9%AB%98%E7%8C%AB%E7%B2%AE' },
      { label: 'Solid Gold 官方猫粮', url: 'https://solidgoldpet.com/collections/cat-food' },
    ],
  },
  {
    category: '猫粮',
    rank: 18,
    brand: '美士 Nutro',
    product: '室内成猫 / 幼猫 / 无谷系列',
    origin: '美国品牌/进口渠道',
    priceRange: '中高端：约 ¥70-150/kg',
    strengths: ['进口猫粮讨论里常见', '产品线覆盖幼猫和室内猫', '适合做进口粮对比候选'],
    cautions: '不同渠道价格差异较大，核对进口标签、保质期和批次。',
    reputation: '用户讨论集中在适口性、颗粒、便便、价格和渠道稳定。',
    evidence: '主要参考小红书“美士猫粮测评”和抖音进口猫粮相关内容。',
    sources: [
      { label: '小红书：美士猫粮测评', url: 'https://www.xiaohongshu.com/search_result?keyword=%E7%BE%8E%E5%A3%AB%20%E7%8C%AB%E7%B2%AE%20%E6%B5%8B%E8%AF%84' },
      { label: '抖音：美士猫粮', url: 'https://www.douyin.com/search/%E7%BE%8E%E5%A3%AB%E7%8C%AB%E7%B2%AE' },
      { label: 'Nutro 官方猫粮', url: 'https://www.nutro.com/cat-food' },
    ],
  },
  {
    category: '猫罐头',
    rank: 1,
    brand: '巅峰 ZIWI Peak',
    product: '主食罐 / 风干粮湿粮系列',
    origin: '新西兰',
    priceRange: '高端：约 ¥25-45/罐',
    strengths: ['小红书高端主食罐测评里高频出现', '进口高端湿粮代表', '适合预算充足用户做轮换'],
    cautions: '价格高，长期全罐喂养预算压力大；高能量密度需控量。',
    reputation: '中国网友常把它作为高端主食罐标杆讨论，评价重点是原料、适口性和价格。',
    evidence: '主要参考小红书“巅峰猫罐/主食罐测评”和抖音高端猫罐讨论内容。',
    sources: [
      { label: '小红书：巅峰猫罐测评', url: 'https://www.xiaohongshu.com/search_result?keyword=%E5%B7%85%E5%B3%B0%20%E7%8C%AB%E7%BD%90%20%E6%B5%8B%E8%AF%84' },
      { label: '抖音：巅峰猫罐', url: 'https://www.douyin.com/search/%E5%B7%85%E5%B3%B0%E7%8C%AB%E7%BD%90' },
      { label: 'ZIWI Peak 官方', url: 'https://ziwipets.com/collections/cat-food' },
    ],
  },
  {
    category: '猫罐头',
    rank: 2,
    brand: 'Feline Natural',
    product: 'K9 Natural 旗下主食罐 / 冻干 / 湿粮系列',
    origin: '新西兰',
    priceRange: '高端：约 ¥22-40/罐',
    strengths: ['小红书主食罐清单里常见', '动物性原料定位明确', '适合做高端湿粮轮换'],
    cautions: '部分猫对内脏风味接受度不同，建议单罐试吃后再囤。',
    reputation: '中国用户常把它和巅峰、Tiki、百利等进口湿粮横向比较。',
    evidence: '主要参考小红书“K9猫罐/Feline Natural测评”和抖音主食罐讨论内容。',
    sources: [
      { label: '小红书：K9 猫罐测评', url: 'https://www.xiaohongshu.com/search_result?keyword=K9%20%E7%8C%AB%E7%BD%90%20%E6%B5%8B%E8%AF%84' },
      { label: '抖音：K9 猫罐', url: 'https://www.douyin.com/search/K9%E7%8C%AB%E7%BD%90' },
      { label: 'Feline Natural 官方', url: 'https://www.k9natural.com/collections/feline-natural-cat-food' },
    ],
  },
  {
    category: '猫罐头',
    rank: 3,
    brand: '提基猫 Tiki Cat',
    product: 'After Dark / Luau 主食湿粮系列',
    origin: '美国品牌/泰国等产能',
    priceRange: '高端：约 ¥15-30/罐',
    strengths: ['小红书进口罐头测评里常见', '肉质形态直观', '适口性口碑强'],
    cautions: '部分产品是补充食而非完整主食，必须核对包装营养声明。',
    reputation: '中国网友常提到它“适口性好、水分足”，但价格和供货波动需要注意。',
    evidence: '主要参考小红书“Tiki Cat猫罐测评”和抖音进口猫罐讨论内容。',
    sources: [
      { label: '小红书：Tiki Cat 猫罐测评', url: 'https://www.xiaohongshu.com/search_result?keyword=Tiki%20Cat%20%E7%8C%AB%E7%BD%90%20%E6%B5%8B%E8%AF%84' },
      { label: '抖音：Tiki Cat 猫罐', url: 'https://www.douyin.com/search/Tiki%20Cat%20%E7%8C%AB%E7%BD%90' },
      { label: 'Tiki Cat 官方', url: 'https://tikipets.com/product-category/tiki-cat/wet-food/' },
    ],
  },
  {
    category: '猫罐头',
    rank: 4,
    brand: '鲜朗 Xianlang',
    product: '国产主食罐 / 鲜肉湿粮系列',
    origin: '中国',
    priceRange: '中端：约 ¥8-18/罐',
    strengths: ['国产主食湿粮讨论度高', '适合想提高饮水和湿粮占比的家庭', '线上购买方便'],
    cautions: '不同口味适口性差异明显，建议先小批量试吃。',
    reputation: '小红书和抖音里常被列入国产主食罐候选。',
    evidence: '主要参考小红书“鲜朗主食罐”和抖音相关测评内容。',
    sources: [
      { label: '小红书：鲜朗主食罐', url: 'https://www.xiaohongshu.com/search_result?keyword=%E9%B2%9C%E6%9C%97%20%E4%B8%BB%E9%A3%9F%E7%BD%90' },
      { label: '抖音：鲜朗主食罐', url: 'https://www.douyin.com/search/%E9%B2%9C%E6%9C%97%E4%B8%BB%E9%A3%9F%E7%BD%90' },
    ],
  },
  {
    category: '猫罐头',
    rank: 5,
    brand: '尾巴生活 FURRYTAIL',
    product: '主食罐 / 餐包 / 湿粮系列',
    origin: '中国',
    priceRange: '中端：约 ¥8-20/罐',
    strengths: ['小红书年轻养猫用户认知度高', '包装和渠道友好', '湿粮、猫砂、用品联动强'],
    cautions: '不要把品牌审美等同于营养适配，仍需看主食声明和配方。',
    reputation: '常见于小红书养猫清单和新手湿粮讨论，评价集中在便利性、适口性和颜值。',
    evidence: '主要参考小红书“尾巴生活主食罐”和抖音相关内容。',
    sources: [
      { label: '小红书：尾巴生活主食罐', url: 'https://www.xiaohongshu.com/search_result?keyword=%E5%B0%BE%E5%B7%B4%E7%94%9F%E6%B4%BB%20%E4%B8%BB%E9%A3%9F%E7%BD%90' },
      { label: '抖音：尾巴生活主食罐', url: 'https://www.douyin.com/search/%E5%B0%BE%E5%B7%B4%E7%94%9F%E6%B4%BB%E4%B8%BB%E9%A3%9F%E7%BD%90' },
      { label: '尾巴生活官网', url: 'http://www.furrytail-pet.com/' },
    ],
  },
  {
    category: '猫罐头',
    rank: 6,
    brand: '麦富迪 Myfoodie',
    product: '主食罐 / 鲜肉湿粮 / 餐包系列',
    origin: '中国',
    priceRange: '大众到中端：约 ¥5-15/罐',
    strengths: ['国内渠道覆盖广', '价格带友好', '适合想尝试湿粮但预算有限的家庭'],
    cautions: '主食罐和零食罐要分清，挑选时优先看营养声明和适口性反馈。',
    reputation: '中国网友常把麦富迪湿粮放在国产平价罐头讨论里，评价重点是价格、渠道和口味选择。',
    evidence: '主要参考小红书“麦富迪猫罐测评”和抖音“麦富迪主食罐”相关内容。',
    sources: [
      { label: '小红书：麦富迪猫罐测评', url: 'https://www.xiaohongshu.com/search_result?keyword=%E9%BA%A6%E5%AF%8C%E8%BF%AA%20%E7%8C%AB%E7%BD%90%20%E6%B5%8B%E8%AF%84' },
      { label: '抖音：麦富迪主食罐', url: 'https://www.douyin.com/search/%E9%BA%A6%E5%AF%8C%E8%BF%AA%E4%B8%BB%E9%A3%9F%E7%BD%90' },
      { label: 'Myfoodie 官方', url: 'https://www.myfoodiepet.com/' },
    ],
  },
  {
    category: '猫罐头',
    rank: 7,
    brand: '网易严选 NetEase Yanxuan',
    product: '主食罐 / 餐包 / 湿粮系列',
    origin: '中国',
    priceRange: '大众到中端：约 ¥6-16/罐',
    strengths: ['电商购买方便', '常见于新手湿粮清单', '适合做国产湿粮对比候选'],
    cautions: '同品牌不同口味和系列差异明显，不要一次囤太多。',
    reputation: '用户讨论集中在性价比、适口性、便便状态和活动价。',
    evidence: '主要参考小红书“网易严选猫罐测评”和抖音湿粮试吃反馈。',
    sources: [
      { label: '小红书：网易严选猫罐测评', url: 'https://www.xiaohongshu.com/search_result?keyword=%E7%BD%91%E6%98%93%E4%B8%A5%E9%80%89%20%E7%8C%AB%E7%BD%90%20%E6%B5%8B%E8%AF%84' },
      { label: '抖音：网易严选猫罐', url: 'https://www.douyin.com/search/%E7%BD%91%E6%98%93%E4%B8%A5%E9%80%89%E7%8C%AB%E7%BD%90' },
    ],
  },
  {
    category: '猫罐头',
    rank: 8,
    brand: '小李子 Leonardo',
    product: '主食罐 / 肉泥罐系列',
    origin: '德国品牌/进口渠道',
    priceRange: '中高端：约 ¥15-32/罐',
    strengths: ['进口主食罐讨论里常见', '肉泥质地接受度较高', '适合做湿粮轮换候选'],
    cautions: '进口罐头渠道和批次稳定性要核对，挑嘴猫建议单罐试吃。',
    reputation: '中国网友常在进口主食罐对比里提到小李子，讨论重点是适口性、肉泥质地和价格。',
    evidence: '主要参考小红书“小李子猫罐测评”和抖音进口主食罐讨论。',
    sources: [
      { label: '小红书：小李子猫罐测评', url: 'https://www.xiaohongshu.com/search_result?keyword=%E5%B0%8F%E6%9D%8E%E5%AD%90%20%E7%8C%AB%E7%BD%90%20%E6%B5%8B%E8%AF%84' },
      { label: '抖音：小李子猫罐', url: 'https://www.douyin.com/search/%E5%B0%8F%E6%9D%8E%E5%AD%90%E7%8C%AB%E7%BD%90' },
      { label: 'Leonardo 官方', url: 'https://www.leonardo-catfood.com/' },
    ],
  },
  {
    category: '猫条',
    rank: 1,
    brand: '伊纳宝 INABA',
    product: 'CIAO Churu 猫条系列',
    origin: '日本品牌/多地产能',
    priceRange: '中高端：约 ¥2-5/条',
    strengths: ['小红书和抖音猫条内容里高频出现', '适口性口碑强', '喂药、剪指甲、就医安抚时实用'],
    cautions: '猫条是零食，不能因为猫爱吃就高频喂；肥胖猫要严格计入零食热量。',
    reputation: '中国网友常把它当作猫条标杆讨论，同时也会围绕配料、价格和替代品做争议比较。',
    evidence: '主要参考小红书“伊纳宝猫条/啾噜猫条”和抖音“伊纳宝猫条还敢买吗”等正反向讨论。',
    sources: [
      { label: '小红书：伊纳宝猫条', url: 'https://www.xiaohongshu.com/search_result?keyword=%E4%BC%8A%E7%BA%B3%E5%AE%9D%20%E7%8C%AB%E6%9D%A1' },
      { label: '抖音：伊纳宝猫条', url: 'https://www.douyin.com/search/%E4%BC%8A%E7%BA%B3%E5%AE%9D%E7%8C%AB%E6%9D%A1%E8%BF%98%E6%95%A2%E4%B9%B0%E5%90%97' },
      { label: 'INABA Churu 官方', url: 'https://inabafoods.com/for-cats/cat-treats/churu/' },
    ],
  },
  {
    category: '猫条',
    rank: 2,
    brand: '顽皮 Wanpy',
    product: '鲜封包 / 猫条 / 湿粮零食系列',
    origin: '中国',
    priceRange: '大众：约 ¥0.8-2/条',
    strengths: ['国产老牌零食认知度高', '价格带友好', '多猫家庭试错成本低'],
    cautions: '同样按零食控制频率，敏感肠胃猫小量试。',
    reputation: '国内猫零食渠道常见，评价集中在便宜、好买和口味多。',
    evidence: '综合国内零食内容、品牌渠道和用户评价。',
    sources: [
      { label: 'Wanpy 官方', url: 'https://www.wanpy.com/' },
      { label: 'B站顽皮猫条搜索', url: 'https://search.bilibili.com/all?keyword=%E9%A1%BD%E7%9A%AE%20%E7%8C%AB%E6%9D%A1%20%E6%B5%8B%E8%AF%84' },
    ],
  },
  {
    category: '猫条',
    rank: 3,
    brand: '希瑞尔 Schesir',
    product: '金枪鱼/鸡肉猫条及湿粮零食',
    origin: '意大利品牌/进口渠道',
    priceRange: '中高端：约 ¥3-7/条',
    strengths: ['抖音和小红书进口猫条测评里出现频率较高', '鱼肉和鸡肉口味辨识度强', '适合预算更充足的零食轮换'],
    cautions: '核对是否为零食属性；挑嘴猫可试，但不要替代完整主食。',
    reputation: '中国网友常在“进口猫条/高端猫条”内容里提到，讨论重点是适口性和价格。',
    evidence: '主要参考小红书“希瑞尔猫条”和抖音“希瑞尔猫条测评/口碑”相关内容。',
    sources: [
      { label: '小红书：希瑞尔猫条', url: 'https://www.xiaohongshu.com/search_result?keyword=%E5%B8%8C%E7%91%9E%E5%B0%94%20%E7%8C%AB%E6%9D%A1' },
      { label: '抖音：希瑞尔猫条', url: 'https://www.douyin.com/search/%E5%B8%8C%E7%91%9E%E5%B0%94%E7%8C%AB%E6%9D%A1' },
      { label: 'Schesir 官方', url: 'https://www.schesir.com/' },
    ],
  },
  {
    category: '猫条',
    rank: 4,
    brand: '卫仕 Nourse',
    product: '营养猫条 / 化毛猫条 / 奖励零食',
    origin: '中国',
    priceRange: '大众到中端：约 ¥1-3/条',
    strengths: ['国内保健和零食渠道常见', '功能型猫条选择多', '适合做低频奖励'],
    cautions: '“化毛”“营养”不等于可以替代主食或治疗，毛球频繁要排查梳毛和饮食。',
    reputation: '国内养猫用户熟悉度较高，常见于猫条和保健品组合购买。',
    evidence: '综合国内品牌认知、社媒讨论和产品可及性。',
    sources: [
      { label: '卫仕官方', url: 'https://www.nourse.com.cn/' },
      { label: '小红书卫仕猫条搜索', url: 'https://www.xiaohongshu.com/search_result?keyword=%E5%8D%AB%E4%BB%95%20%E7%8C%AB%E6%9D%A1' },
    ],
  },
  {
    category: '猫条',
    rank: 5,
    brand: '红狗 RedDog',
    product: '营养膏 / 猫条 / 奖励零食',
    origin: '中国',
    priceRange: '大众到中端：约 ¥1-4/条',
    strengths: ['国内宠物营养品牌认知度高', '功能型零食和营养膏常见', '电商购买方便'],
    cautions: '营养膏和猫条都不能替代完整主食；生病、消瘦要先就医找原因。',
    reputation: '国内保健品和零食讨论里常见，用户评价集中在适口性和功能诉求。',
    evidence: '综合国内社媒讨论、电商可及性和品牌产品线。',
    sources: [
      { label: '红狗官方', url: 'https://www.reddogchina.com/' },
      { label: '小红书红狗猫条搜索', url: 'https://www.xiaohongshu.com/search_result?keyword=%E7%BA%A2%E7%8B%97%20%E7%8C%AB%E6%9D%A1' },
    ],
  },
  {
    category: '猫条',
    rank: 6,
    brand: '麦富迪 Myfoodie',
    product: '猫条 / 湿粮零食 / 训练奖励系列',
    origin: '中国',
    priceRange: '大众：约 ¥0.8-2.5/条',
    strengths: ['大众渠道常见', '价格带友好', '多口味选择适合试吃'],
    cautions: '猫条仍是零食，不能替代主食；肠胃敏感猫先少量试。',
    reputation: '中国网友讨论集中在便宜、好买、适口性和多猫家庭消耗成本。',
    evidence: '主要参考小红书“麦富迪猫条测评”和抖音猫零食试吃内容。',
    sources: [
      { label: '小红书：麦富迪猫条测评', url: 'https://www.xiaohongshu.com/search_result?keyword=%E9%BA%A6%E5%AF%8C%E8%BF%AA%20%E7%8C%AB%E6%9D%A1%20%E6%B5%8B%E8%AF%84' },
      { label: '抖音：麦富迪猫条', url: 'https://www.douyin.com/search/%E9%BA%A6%E5%AF%8C%E8%BF%AA%E7%8C%AB%E6%9D%A1' },
      { label: 'Myfoodie 官方', url: 'https://www.myfoodiepet.com/' },
    ],
  },
  {
    category: '猫条',
    rank: 7,
    brand: '帕特 Pat',
    product: '猫条 / 肉泥零食 / 冻干零食系列',
    origin: '中国',
    priceRange: '中端：约 ¥2-5/条',
    strengths: ['小红书零食测评里常见', '肉泥和冻干零食讨论度较高', '适合做奖励零食候选'],
    cautions: '不要被“高肉”卖点替代营养判断，仍需控制频率和总热量。',
    reputation: '用户评价多围绕适口性、配料表、价格和猫咪复购反应。',
    evidence: '主要参考小红书“帕特猫条测评”和抖音“帕特猫零食”相关内容。',
    sources: [
      { label: '小红书：帕特猫条测评', url: 'https://www.xiaohongshu.com/search_result?keyword=%E5%B8%95%E7%89%B9%20%E7%8C%AB%E6%9D%A1%20%E6%B5%8B%E8%AF%84' },
      { label: '抖音：帕特猫零食', url: 'https://www.douyin.com/search/%E5%B8%95%E7%89%B9%E7%8C%AB%E9%9B%B6%E9%A3%9F' },
    ],
  },
  {
    category: '猫条',
    rank: 8,
    brand: '诚实一口 Honest Bite',
    product: '猫条 / 肉泥 / 奖励零食系列',
    origin: '中国',
    priceRange: '中端：约 ¥2-5/条',
    strengths: ['年轻养猫用户讨论度较高', '品牌视觉和线上渠道强', '适合做零食轮换候选'],
    cautions: '零食适口性强不代表适合高频喂，肥胖猫要把猫条热量算入总热量。',
    reputation: '中国网友常在猫零食清单里提到，评价集中在适口性、价格和配料。',
    evidence: '主要参考小红书“诚实一口猫条”和抖音相关试吃反馈。',
    sources: [
      { label: '小红书：诚实一口猫条', url: 'https://www.xiaohongshu.com/search_result?keyword=%E8%AF%9A%E5%AE%9E%E4%B8%80%E5%8F%A3%20%E7%8C%AB%E6%9D%A1' },
      { label: '抖音：诚实一口猫条', url: 'https://www.douyin.com/search/%E8%AF%9A%E5%AE%9E%E4%B8%80%E5%8F%A3%E7%8C%AB%E6%9D%A1' },
    ],
  },
  {
    category: '猫咪保健品',
    rank: 1,
    brand: '卫仕 Nourse',
    product: '化毛膏 / 益生菌 / 维生素 / 关节护理',
    origin: '中国',
    priceRange: '大众到中端：约 ¥40-200/件',
    strengths: ['中国用户熟悉度高', '产品线覆盖日常保健需求', '线上线下购买方便'],
    cautions: '保健品只适合辅助管理；呕吐、腹泻、尿闭、疼痛等症状不能靠保健品处理。',
    reputation: '国内猫咪保健品讨论中很常见，评价集中在化毛、益生菌和日常补充。',
    evidence: '综合中国市场品牌认知、产品可及性和社媒讨论。',
    sources: [
      { label: '卫仕官方', url: 'https://www.nourse.com.cn/' },
      { label: '小红书猫咪保健品搜索', url: 'https://www.xiaohongshu.com/search_result?keyword=%E7%8C%AB%E5%92%AA%E4%BF%9D%E5%81%A5%E5%93%81%20%E5%8D%AB%E4%BB%95' },
    ],
  },
  {
    category: '猫咪保健品',
    rank: 2,
    brand: '红狗 RedDog',
    product: '营养膏 / 化毛膏 / 益生菌 / 皮毛护理',
    origin: '中国',
    priceRange: '大众到中端：约 ¥40-180/件',
    strengths: ['国内宠物营养品牌认知度高', '适口性产品多', '电商渠道稳定'],
    cautions: '营养膏不能替代正常进食；猫突然不吃或消瘦要先就医。',
    reputation: '常见于国内养猫新手清单，用户评价围绕适口性和日常补充。',
    evidence: '综合中国用户认知、社媒讨论和购买可及性。',
    sources: [
      { label: '红狗官方', url: 'https://www.reddogchina.com/' },
      { label: '小红书红狗猫咪保健品搜索', url: 'https://www.xiaohongshu.com/search_result?keyword=%E7%BA%A2%E7%8B%97%20%E7%8C%AB%E5%92%AA%E4%BF%9D%E5%81%A5%E5%93%81' },
    ],
  },
  {
    category: '猫咪保健品',
    rank: 3,
    brand: '麦德氏 IN-Plus',
    product: '益生菌 / 营养膏 / 皮毛护理 / 关节护理',
    origin: '中国台湾品牌/大陆常见渠道',
    priceRange: '中端：约 ¥60-260/件',
    strengths: ['国内电商和宠物店常见', '益生菌与营养补充线认知度高', '适合按场景做阶段性补充'],
    cautions: '益生菌不等于止泻药；持续软便、便血或呕吐要先就医。',
    reputation: '在国内宠物保健品讨论中常见，用户评价集中在益生菌和营养膏。',
    evidence: '综合中国渠道可见度、用户讨论和产品线覆盖。',
    sources: [
      { label: '麦德氏官方', url: 'https://www.in-plus.com.cn/' },
      { label: '小红书麦德氏猫咪保健品搜索', url: 'https://www.xiaohongshu.com/search_result?keyword=%E9%BA%A6%E5%BE%B7%E6%B0%8F%20%E7%8C%AB%E5%92%AA%E4%BF%9D%E5%81%A5%E5%93%81' },
    ],
  },
  {
    category: '猫咪保健品',
    rank: 4,
    brand: '谷登 Golden',
    product: '益生菌 / 化毛膏 / 营养补充系列',
    origin: '中国',
    priceRange: '大众到中端：约 ¥40-180/件',
    strengths: ['国内宠物保健渠道常见', '益生菌和营养补充讨论度较高', '价格带覆盖较广'],
    cautions: '益生菌不能替代止泻、抗感染或处方治疗，持续软便要先排查病因。',
    reputation: '用户评价集中在适口性、软便场景、价格和复购体验。',
    evidence: '主要参考小红书“谷登猫咪益生菌”和抖音猫咪保健品相关内容。',
    sources: [
      { label: '小红书：谷登猫咪益生菌', url: 'https://www.xiaohongshu.com/search_result?keyword=%E8%B0%B7%E7%99%BB%20%E7%8C%AB%E5%92%AA%20%E7%9B%8A%E7%94%9F%E8%8F%8C' },
      { label: '抖音：谷登猫咪保健品', url: 'https://www.douyin.com/search/%E8%B0%B7%E7%99%BB%E7%8C%AB%E5%92%AA%E4%BF%9D%E5%81%A5%E5%93%81' },
    ],
  },
  {
    category: '猫咪保健品',
    rank: 5,
    brand: '普安特 Puante',
    product: '化毛膏 / 益生菌 / 皮肤护理 / 日常护理系列',
    origin: '中国',
    priceRange: '大众到中端：约 ¥30-160/件',
    strengths: ['线上内容和电商渠道常见', '日常护理产品覆盖面较广', '新手搜索场景出现频率高'],
    cautions: '护理产品不能替代诊断，皮肤病、持续呕吐或腹泻需要就医。',
    reputation: '中国网友常在日常护理和轻症观察内容里提到，评价重点是便利性、适口性和使用场景。',
    evidence: '主要参考小红书“普安特猫咪保健品”和抖音猫咪护理相关视频。',
    sources: [
      { label: '小红书：普安特猫咪保健品', url: 'https://www.xiaohongshu.com/search_result?keyword=%E6%99%AE%E5%AE%89%E7%89%B9%20%E7%8C%AB%E5%92%AA%20%E4%BF%9D%E5%81%A5%E5%93%81' },
      { label: '抖音：普安特猫咪护理', url: 'https://www.douyin.com/search/%E6%99%AE%E5%AE%89%E7%89%B9%E7%8C%AB%E5%92%AA%E6%8A%A4%E7%90%86' },
    ],
  },
  {
    category: '猫咪保健品',
    rank: 6,
    brand: '小宠 EHD',
    product: '化毛膏 / 益生菌 / 营养补充系列',
    origin: '中国',
    priceRange: '大众到中端：约 ¥35-160/件',
    strengths: ['国内养宠用户认知度较高', '日常保健产品覆盖常见需求', '电商购买方便'],
    cautions: '化毛膏只是辅助，频繁吐毛球要同时改善梳毛、饮水和饮食结构。',
    reputation: '用户讨论集中在化毛、益生菌、适口性和价格。',
    evidence: '主要参考小红书“小宠猫咪保健品”和抖音相关内容。',
    sources: [
      { label: '小红书：小宠猫咪保健品', url: 'https://www.xiaohongshu.com/search_result?keyword=%E5%B0%8F%E5%AE%A0%20%E7%8C%AB%E5%92%AA%20%E4%BF%9D%E5%81%A5%E5%93%81' },
      { label: '抖音：小宠猫咪保健品', url: 'https://www.douyin.com/search/%E5%B0%8F%E5%AE%A0%E7%8C%AB%E5%92%AA%E4%BF%9D%E5%81%A5%E5%93%81' },
    ],
  },
  {
    category: '猫咪保健品',
    rank: 7,
    brand: 'Nordic Naturals',
    product: 'Omega-3 Pet / 猫狗鱼油系列',
    origin: '美国品牌/进口渠道',
    priceRange: '中高端到高端：约 ¥120-300/件',
    strengths: ['鱼油品类里辨识度高', '小红书进口鱼油讨论里常见', '适合了解 Omega-3 补充场景'],
    cautions: '鱼油不是越多越好，胰腺炎史、凝血问题、术前或正在用药的猫要先问兽医。',
    reputation: '用户讨论集中在适口性、腥味、毛发状态、保存方式和价格。',
    evidence: '主要参考小红书“Nordic Naturals猫鱼油”、抖音鱼油内容和品牌公开资料。',
    sources: [
      { label: '小红书：Nordic Naturals 猫鱼油', url: 'https://www.xiaohongshu.com/search_result?keyword=Nordic%20Naturals%20%E7%8C%AB%20%E9%B1%BC%E6%B2%B9' },
      { label: '抖音：猫咪鱼油', url: 'https://www.douyin.com/search/%E7%8C%AB%E5%92%AA%E9%B1%BC%E6%B2%B9' },
      { label: 'Nordic Naturals Pet 官方', url: 'https://www.nordic.com/products/pet/' },
    ],
  },
  {
    category: '猫咪保健品',
    rank: 8,
    brand: '卫仕 Nourse',
    product: '鱼油 / 卵磷脂 / 皮毛护理系列',
    origin: '中国',
    priceRange: '大众到中端：约 ¥50-180/件',
    strengths: ['国内鱼油和皮毛护理内容里常见', '购买渠道稳定', '适合和进口鱼油做价格带对比'],
    cautions: '皮毛差、掉毛多不一定缺鱼油，也可能和季节、寄生虫、皮肤病或饮食有关。',
    reputation: '用户讨论集中在适口性、毛发光泽、掉毛和是否容易软便。',
    evidence: '主要参考小红书“卫仕鱼油猫咪”和抖音相关内容。',
    sources: [
      { label: '小红书：卫仕鱼油猫咪', url: 'https://www.xiaohongshu.com/search_result?keyword=%E5%8D%AB%E4%BB%95%20%E9%B1%BC%E6%B2%B9%20%E7%8C%AB%E5%92%AA' },
      { label: '抖音：卫仕鱼油', url: 'https://www.douyin.com/search/%E5%8D%AB%E4%BB%95%E9%B1%BC%E6%B2%B9' },
      { label: '卫仕官方', url: 'https://www.nourse.com.cn/' },
    ],
  },
  {
    category: '猫咪保健品',
    rank: 9,
    brand: '麦德氏 IN-Plus',
    product: '鱼油 / 卵磷脂 / 皮毛营养系列',
    origin: '中国台湾品牌/大陆常见渠道',
    priceRange: '中端：约 ¥60-220/件',
    strengths: ['鱼油和皮毛营养讨论里常见', '电商渠道可见度高', '适合做国产鱼油候选对比'],
    cautions: '新增鱼油后要观察软便、呕吐和食欲变化；不要和多个脂肪类补充品叠加。',
    reputation: '用户评价集中在适口性、毛发、价格和软便情况。',
    evidence: '主要参考小红书“麦德氏鱼油猫咪”和抖音相关内容。',
    sources: [
      { label: '小红书：麦德氏鱼油猫咪', url: 'https://www.xiaohongshu.com/search_result?keyword=%E9%BA%A6%E5%BE%B7%E6%B0%8F%20%E9%B1%BC%E6%B2%B9%20%E7%8C%AB%E5%92%AA' },
      { label: '抖音：麦德氏鱼油', url: 'https://www.douyin.com/search/%E9%BA%A6%E5%BE%B7%E6%B0%8F%E9%B1%BC%E6%B2%B9' },
      { label: '麦德氏官方', url: 'https://www.in-plus.com.cn/' },
    ],
  },
  {
    category: '猫咪保健品',
    rank: 10,
    brand: '红狗 RedDog',
    product: '乳铁蛋白 / 营养补充系列',
    origin: '中国',
    priceRange: '大众到中端：约 ¥60-220/件',
    strengths: ['乳铁蛋白内容里出现频率较高', '国内宠物营养品牌认知度高', '适合了解免疫营养补充品类'],
    cautions: '乳铁蛋白不是治疗药，流鼻涕、咳嗽、发烧、眼鼻分泌物明显时要先就医。',
    reputation: '用户讨论集中在幼猫、换季、适口性、价格和是否值得长期吃。',
    evidence: '主要参考小红书“红狗乳铁蛋白猫咪”和抖音相关内容。',
    sources: [
      { label: '小红书：红狗乳铁蛋白猫咪', url: 'https://www.xiaohongshu.com/search_result?keyword=%E7%BA%A2%E7%8B%97%20%E4%B9%B3%E9%93%81%E8%9B%8B%E7%99%BD%20%E7%8C%AB%E5%92%AA' },
      { label: '抖音：红狗乳铁蛋白', url: 'https://www.douyin.com/search/%E7%BA%A2%E7%8B%97%E4%B9%B3%E9%93%81%E8%9B%8B%E7%99%BD' },
      { label: '红狗官方', url: 'https://www.reddogchina.com/' },
    ],
  },
  {
    category: '猫咪保健品',
    rank: 11,
    brand: 'MAG',
    product: '乳铁蛋白 / 营养膏 / 关节与皮毛护理系列',
    origin: '英国品牌/中国常见渠道',
    priceRange: '中端：约 ¥70-260/件',
    strengths: ['乳铁蛋白和营养补充讨论里常见', '进口/合资感知强', '适合做乳铁蛋白品类对比'],
    cautions: '不要把乳铁蛋白当作增强免疫的万能方案，慢性呼吸道、疱疹病毒相关问题要听兽医方案。',
    reputation: '用户讨论集中在幼猫、泪痕、呼吸道、适口性和价格。',
    evidence: '主要参考小红书“MAG乳铁蛋白猫咪”和公开测评讨论。',
    sources: [
      { label: '小红书：MAG 乳铁蛋白猫咪', url: 'https://www.xiaohongshu.com/search_result?keyword=MAG%20%E4%B9%B3%E9%93%81%E8%9B%8B%E7%99%BD%20%E7%8C%AB%E5%92%AA' },
      { label: '抖音：MAG 乳铁蛋白', url: 'https://www.douyin.com/search/MAG%E4%B9%B3%E9%93%81%E8%9B%8B%E7%99%BD' },
    ],
  },
  {
    category: '猫咪保健品',
    rank: 12,
    brand: '赞乐 Zanlove',
    product: '乳铁蛋白 / 益生菌 / 营养补充系列',
    origin: '中国',
    priceRange: '大众到中端：约 ¥50-180/件',
    strengths: ['乳铁蛋白测评内容里常被提到', '价格带相对友好', '适合了解国产乳铁蛋白候选'],
    cautions: '任何免疫类营养品都不替代疫苗、驱虫、隔离和就医。',
    reputation: '用户讨论集中在配料、适口性、价格和幼猫场景。',
    evidence: '主要参考小红书“赞乐乳铁蛋白猫咪”和乳铁蛋白横评内容。',
    sources: [
      { label: '小红书：赞乐乳铁蛋白猫咪', url: 'https://www.xiaohongshu.com/search_result?keyword=%E8%B5%9E%E4%B9%90%20%E4%B9%B3%E9%93%81%E8%9B%8B%E7%99%BD%20%E7%8C%AB%E5%92%AA' },
      { label: '抖音：猫咪乳铁蛋白', url: 'https://www.douyin.com/search/%E7%8C%AB%E5%92%AA%E4%B9%B3%E9%93%81%E8%9B%8B%E7%99%BD' },
    ],
  },
  {
    category: '生活用品',
    rank: 1,
    brand: 'pidan',
    product: '混合猫砂 / 猫砂盆 / 清洁用品系列',
    origin: '中国',
    priceRange: '大众到中端：约 ¥20-300/件',
    strengths: ['小红书新手用品清单里常见', '猫砂和猫砂盆讨论度高', '外观和渠道对新手友好'],
    cautions: '猫砂是否适合取决于粉尘、结团、除臭和猫咪接受度；不要突然全量更换。',
    reputation: '中国网友常讨论 pidan 猫砂结团、粉尘、除臭和猫砂盆清洁便利性。',
    evidence: '主要参考小红书“pidan猫砂测评”、抖音“pidan猫砂盆”相关内容。',
    sources: [
      { label: '小红书：pidan 猫砂测评', url: 'https://www.xiaohongshu.com/search_result?keyword=pidan%20%E7%8C%AB%E7%A0%82%20%E6%B5%8B%E8%AF%84' },
      { label: '抖音：pidan 猫砂盆', url: 'https://www.douyin.com/search/pidan%E7%8C%AB%E7%A0%82%E7%9B%86' },
      { label: 'pidan 官方', url: 'https://www.pidan.com/' },
    ],
  },
  {
    category: '生活用品',
    rank: 2,
    brand: '小佩 PETKIT',
    product: '饮水机 / 自动喂食器 / 智能猫砂盆系列',
    origin: '中国',
    priceRange: '中端到高端：约 ¥99-3000/件',
    strengths: ['智能用品讨论度高', '饮水机和喂食器线上可见度高', '适合需要定时喂食和饮水管理的家庭'],
    cautions: '智能设备不能替代日常观察，水泵、滤芯、食盆和猫砂仓都要定期彻底清洗。',
    reputation: '中国网友常围绕稳定性、清洁难度、噪音、售后和断网断电场景讨论小佩。',
    evidence: '主要参考小红书“小佩饮水机测评”、抖音“小佩自动喂食器”相关视频。',
    sources: [
      { label: '小红书：小佩饮水机测评', url: 'https://www.xiaohongshu.com/search_result?keyword=%E5%B0%8F%E4%BD%A9%20%E9%A5%AE%E6%B0%B4%E6%9C%BA%20%E6%B5%8B%E8%AF%84' },
      { label: '抖音：小佩自动喂食器', url: 'https://www.douyin.com/search/%E5%B0%8F%E4%BD%A9%E8%87%AA%E5%8A%A8%E5%96%82%E9%A3%9F%E5%99%A8' },
      { label: 'PETKIT 官方', url: 'https://www.petkit.com/' },
    ],
  },
  {
    category: '生活用品',
    rank: 3,
    brand: '霍曼 Homerun',
    product: '智能饮水机 / 自动喂食器 / 烘干箱系列',
    origin: '中国',
    priceRange: '中端到高端：约 ¥129-2000/件',
    strengths: ['小红书智能养猫用品里常见', '饮水机和喂食器讨论度较高', '适合关注设备稳定和清洁体验的用户'],
    cautions: '饮水机滤芯不是越久越好，必须按水质和使用频率清洁更换。',
    reputation: '用户讨论集中在噪音、清洗难度、传感准确性和售后体验。',
    evidence: '主要参考小红书“霍曼饮水机测评”和抖音“霍曼喂食器”相关内容。',
    sources: [
      { label: '小红书：霍曼饮水机测评', url: 'https://www.xiaohongshu.com/search_result?keyword=%E9%9C%8D%E6%9B%BC%20%E9%A5%AE%E6%B0%B4%E6%9C%BA%20%E6%B5%8B%E8%AF%84' },
      { label: '抖音：霍曼喂食器', url: 'https://www.douyin.com/search/%E9%9C%8D%E6%9B%BC%E5%96%82%E9%A3%9F%E5%99%A8' },
      { label: 'Homerun 官方', url: 'https://www.homerunpet.com/' },
    ],
  },
  {
    category: '生活用品',
    rank: 4,
    brand: 'CATLINK',
    product: '智能猫砂盆 / 自动喂食器 / 饮水机系列',
    origin: '中国',
    priceRange: '中高端到高端：约 ¥299-3000/件',
    strengths: ['智能猫砂盆讨论度高', '适合多猫家庭关注排泄记录', '设备联动场景丰富'],
    cautions: '幼猫、体重过轻猫、行动不便猫使用智能猫砂盆要谨慎；任何设备都不能替代观察尿团和便便状态。',
    reputation: '中国网友常讨论 CATLINK 的称重记录、卡砂、清洁、异味和售后。',
    evidence: '主要参考小红书“CATLINK猫砂盆测评”和抖音智能猫砂盆相关视频。',
    sources: [
      { label: '小红书：CATLINK 猫砂盆测评', url: 'https://www.xiaohongshu.com/search_result?keyword=CATLINK%20%E7%8C%AB%E7%A0%82%E7%9B%86%20%E6%B5%8B%E8%AF%84' },
      { label: '抖音：CATLINK 猫砂盆', url: 'https://www.douyin.com/search/CATLINK%E7%8C%AB%E7%A0%82%E7%9B%86' },
      { label: 'CATLINK 官方', url: 'https://www.catlinkus.com/' },
    ],
  },
  {
    category: '生活用品',
    rank: 5,
    brand: 'N1',
    product: '豆腐猫砂 / 混合猫砂系列',
    origin: '中国',
    priceRange: '大众到中端：约 ¥25-90/袋',
    strengths: ['豆腐猫砂讨论里高频出现', '购买渠道常见', '适合对粉尘和冲厕便利有要求的家庭做对比'],
    cautions: '冲厕能力受管道和用量影响，老旧管道不建议大量冲；潮湿环境注意结块和虫害。',
    reputation: '用户讨论集中在粉尘、结团、带出、除臭和性价比。',
    evidence: '主要参考小红书“N1猫砂测评”和抖音豆腐猫砂对比内容。',
    sources: [
      { label: '小红书：N1 猫砂测评', url: 'https://www.xiaohongshu.com/search_result?keyword=N1%20%E7%8C%AB%E7%A0%82%20%E6%B5%8B%E8%AF%84' },
      { label: '抖音：N1 猫砂', url: 'https://www.douyin.com/search/N1%E7%8C%AB%E7%A0%82' },
    ],
  },
  {
    category: '生活用品',
    rank: 6,
    brand: '多尼斯 Dogness',
    product: '自动喂食器 / 饮水机 / 监控互动用品',
    origin: '中国',
    priceRange: '大众到中端：约 ¥99-900/件',
    strengths: ['智能喂食器和饮水用品渠道常见', '价格带覆盖广', '适合需要远程看护基础功能的家庭'],
    cautions: '远程喂食不要成为长期无人照看的理由，出差仍需安排人上门检查。',
    reputation: '用户讨论集中在出粮准确、摄像头、联网稳定和清洁维护。',
    evidence: '主要参考小红书“多尼斯喂食器测评”和抖音相关视频。',
    sources: [
      { label: '小红书：多尼斯喂食器测评', url: 'https://www.xiaohongshu.com/search_result?keyword=%E5%A4%9A%E5%B0%BC%E6%96%AF%20%E5%96%82%E9%A3%9F%E5%99%A8%20%E6%B5%8B%E8%AF%84' },
      { label: '抖音：多尼斯喂食器', url: 'https://www.douyin.com/search/%E5%A4%9A%E5%B0%BC%E6%96%AF%E5%96%82%E9%A3%9F%E5%99%A8' },
    ],
  },
  {
    category: '生活用品',
    rank: 7,
    brand: '富美内特 FURminator',
    product: '去浮毛梳 / 梳毛护理工具',
    origin: '美国品牌/进口渠道',
    priceRange: '中端到高端：约 ¥80-300/件',
    strengths: ['掉毛季梳毛工具讨论里常见', '去浮毛能力辨识度高', '适合短毛和部分中长毛家庭做护理工具'],
    cautions: '不要在同一部位过度梳，皮肤敏感、皮肤病或打结严重时先咨询美容师或兽医。',
    reputation: '中国网友常讨论它的去毛效率、真假货、适用毛长和是否伤毛。',
    evidence: '主要参考小红书“FURminator梳子测评”和抖音猫咪梳毛工具内容。',
    sources: [
      { label: '小红书：FURminator 梳子测评', url: 'https://www.xiaohongshu.com/search_result?keyword=FURminator%20%E6%A2%B3%E5%AD%90%20%E6%B5%8B%E8%AF%84' },
      { label: '抖音：猫咪梳毛工具', url: 'https://www.douyin.com/search/%E7%8C%AB%E5%92%AA%E6%A2%B3%E6%AF%9B%E5%B7%A5%E5%85%B7' },
      { label: 'FURminator 官方', url: 'https://www.furminator.com/' },
    ],
  },
  {
    category: '生活用品',
    rank: 8,
    brand: '雪貂留香 Xuediao',
    product: '除味喷雾 / 环境清洁 / 洗护用品系列',
    origin: '中国',
    priceRange: '大众到中端：约 ¥20-120/件',
    strengths: ['环境除味和洗护内容里常见', '价格带友好', '适合猫砂盆周边清洁场景'],
    cautions: '除味产品不能替代铲屎、通风和猫砂盆清洗；喷雾使用后避免猫直接舔舐湿表面。',
    reputation: '用户讨论集中在除味效果、香味浓度、刺激性和猫咪接受度。',
    evidence: '主要参考小红书“雪貂留香除味测评”和抖音宠物除味内容。',
    sources: [
      { label: '小红书：雪貂留香除味测评', url: 'https://www.xiaohongshu.com/search_result?keyword=%E9%9B%AA%E8%B2%82%E7%95%99%E9%A6%99%20%E9%99%A4%E5%91%B3%20%E6%B5%8B%E8%AF%84' },
      { label: '抖音：宠物除味测评', url: 'https://www.douyin.com/search/%E5%AE%A0%E7%89%A9%E9%99%A4%E5%91%B3%E6%B5%8B%E8%AF%84' },
    ],
  },
  {
    category: '生活用品',
    rank: 9,
    brand: 'ZEZE',
    product: '猫窝 / 猫爬架 / 猫抓板 / 猫玩具系列',
    origin: '中国',
    priceRange: '大众到中端：约 ¥20-600/件',
    strengths: ['猫窝和猫玩具内容里常见', '造型辨识度高', '适合小户型家庭做猫抓板和休息区补充'],
    cautions: '猫窝和猫爬架要重点看稳定性、可清洗性、甲醛和异味；不要只看造型。',
    reputation: '用户讨论集中在颜值、猫咪是否愿意睡、抓板耐用度、掉屑和占地面积。',
    evidence: '主要参考小红书“ZEZE猫窝/猫玩具”、抖音相关开箱内容和公开商品信息。',
    sources: [
      { label: '小红书：ZEZE 猫窝猫玩具', url: 'https://www.xiaohongshu.com/search_result?keyword=ZEZE%20%E7%8C%AB%E7%AA%9D%20%E7%8C%AB%E7%8E%A9%E5%85%B7' },
      { label: '抖音：ZEZE 猫爬架', url: 'https://www.douyin.com/search/ZEZE%E7%8C%AB%E7%88%AC%E6%9E%B6' },
      { label: 'ZEZE 品牌公开资料', url: 'https://www.yami.com/zh/b/zeze/12855' },
    ],
  },
  {
    category: '生活用品',
    rank: 10,
    brand: '华元宠具 HOOPET',
    product: '猫窝 / 猫爬架 / 猫抓桶 / 猫玩具系列',
    origin: '中国',
    priceRange: '大众到中端：约 ¥30-800/件',
    strengths: ['猫窝和猫爬架渠道可见度高', '价格带覆盖广', '适合预算敏感的新手做基础用品候选'],
    cautions: '大型猫爬架要确认承重、底座稳定和剑麻柱耐抓性，多猫家庭不要买过轻底座。',
    reputation: '用户讨论集中在性价比、安装难度、稳定性、猫咪使用频率和抓柱耐用度。',
    evidence: '主要参考小红书“华元宠具猫爬架”、抖音猫窝猫爬架内容和公开品牌信息。',
    sources: [
      { label: '小红书：华元宠具猫爬架', url: 'https://www.xiaohongshu.com/search_result?keyword=%E5%8D%8E%E5%85%83%E5%AE%A0%E5%85%B7%20%E7%8C%AB%E7%88%AC%E6%9E%B6' },
      { label: '抖音：HOOPET 猫窝', url: 'https://www.douyin.com/search/HOOPET%E7%8C%AB%E7%AA%9D' },
      { label: '亚洲宠物展：HOOPET 品牌', url: 'https://online.petfairasia.com/zh-cn/showroom-2025/brands/bcfjhg' },
    ],
  },
  {
    category: '生活用品',
    rank: 11,
    brand: '贵为 GiGwi',
    product: '逗猫玩具 / 电动玩具 / 猫薄荷玩具系列',
    origin: '中国品牌/国际渠道',
    priceRange: '大众到中端：约 ¥15-200/件',
    strengths: ['猫玩具品类里常见', '互动玩具和自嗨玩具选择多', '适合补充日常运动和环境丰容'],
    cautions: '玩具上的羽毛、绳线、小铃铛和塑料件要定期检查，破损后避免误吞。',
    reputation: '用户讨论集中在猫咪兴趣持续时间、耐咬程度、电动玩具噪音和耗材更换。',
    evidence: '主要参考小红书“GiGwi猫玩具”、抖音逗猫玩具内容和电商公开榜单。',
    sources: [
      { label: '小红书：GiGwi 猫玩具', url: 'https://www.xiaohongshu.com/search_result?keyword=GiGwi%20%E7%8C%AB%E7%8E%A9%E5%85%B7' },
      { label: '抖音：贵为猫玩具', url: 'https://www.douyin.com/search/%E8%B4%B5%E4%B8%BA%E7%8C%AB%E7%8E%A9%E5%85%B7' },
      { label: '京东猫玩具品牌榜', url: 'https://www.jd.com/phb/6994f85bd7d8ac9efc4c.html' },
    ],
  },
  {
    category: '生活用品',
    rank: 12,
    brand: '未卡 VETRESKA',
    product: '猫窝 / 猫碗 / 猫抓板 / 外出与生活方式用品',
    origin: '中国',
    priceRange: '中端到高端：约 ¥40-900/件',
    strengths: ['设计感用品内容里常见', '猫碗、猫窝、猫抓板辨识度高', '适合重视家居搭配的用户做对比'],
    cautions: '高颜值用品也要优先看材质安全、清洗便利和猫咪实际使用率。',
    reputation: '用户讨论集中在颜值、价格、质感、实用性和是否容易清洁。',
    evidence: '主要参考小红书“未卡猫窝/猫碗”、抖音家居风猫用品内容和公开品牌资料。',
    sources: [
      { label: '小红书：未卡猫用品', url: 'https://www.xiaohongshu.com/search_result?keyword=%E6%9C%AA%E5%8D%A1%20%E7%8C%AB%E7%94%A8%E5%93%81' },
      { label: '抖音：未卡猫窝', url: 'https://www.douyin.com/search/%E6%9C%AA%E5%8D%A1%E7%8C%AB%E7%AA%9D' },
      { label: 'VETRESKA 官方', url: 'https://www.vetreska.com/' },
    ],
  },
]

export const emergencyTips: EmergencyTip[] = [
  {
    id: 'no-urine',
    symptom: '频繁进猫砂盆、蹲很久但尿不出',
    risk: '急诊',
    firstAid: ['立刻停留观察尿量和精神状态', '保持运输笼可用，尽快联系急诊兽医', '带上近期饮食、用药和排尿记录'],
    doNot: ['不要按压膀胱', '不要喂人用止痛药', '不要等到第二天再看'],
    goNow: '尤其是公猫，疑似尿闭可能在短时间内危及生命，应立即急诊。',
    sources: [
      { label: 'Anicira veterinary emergency signs', url: 'https://anicira.org/resources/10-signs-your-cat-is-having-a-veterinary-emergency/' },
      { label: 'Cornell Feline Health Topics', url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics' },
    ],
  },
  {
    id: 'breathing',
    symptom: '张口呼吸、呼吸急促、舌头或牙龈发紫',
    risk: '急诊',
    firstAid: ['保持安静和通风', '减少搬动和惊吓', '直接去急诊，不要在家等待'],
    doNot: ['不要强行喂水喂食', '不要自行吸氧或用药', '不要让猫剧烈挣扎'],
    goNow: '呼吸异常是最高优先级急症，任何张口呼吸都应按急诊处理。',
    sources: [
      { label: 'VCA emergency care overview', url: 'https://vcahospitals.com/know-your-pet/emergencies-in-cats' },
      { label: 'Cornell Feline Health Center', url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center' },
    ],
  },
  {
    id: 'not-eating',
    symptom: '超过 24 小时不吃或精神明显沉郁',
    risk: '尽快就医',
    firstAid: ['记录最后进食时间、饮水和排便排尿', '提供平时爱吃的主食湿粮', '联系兽医确认就诊时间'],
    doNot: ['不要强灌大量食物', '不要用人用胃药', '不要只靠猫条拖延'],
    goNow: '幼猫、肥胖猫、糖尿病猫或伴随呕吐腹泻时应更早就医。',
    sources: [
      { label: 'Cornell Choosing and Caring for Your New Cat', url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/choosing-and-caring-your-new-cat' },
    ],
  },
  {
    id: 'vomit-diarrhea',
    symptom: '持续呕吐、腹泻、便血或无法留住水',
    risk: '尽快就医',
    firstAid: ['拍照记录呕吐物/粪便', '少量多次提供清水', '暂停新零食和新食物'],
    doNot: ['不要自行使用止泻药或抗生素', '不要强行禁水', '不要继续喂可疑食物'],
    goNow: '幼猫、老年猫、脱水、血便或连续呕吐应立即就医。',
    sources: [
      { label: 'Cornell Feline Health Topics', url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics' },
      { label: 'VCA cat emergencies', url: 'https://vcahospitals.com/know-your-pet/emergencies-in-cats' },
    ],
  },
  {
    id: 'poison',
    symptom: '误食药物、百合、清洁剂、线绳或不明异物',
    risk: '急诊',
    firstAid: ['保留包装、植物或异物照片', '记录误食时间和大致剂量', '立即联系兽医或宠物中毒热线'],
    doNot: ['不要自行催吐', '不要喂牛奶、油或偏方', '不要等待症状出现'],
    goNow: '百合对猫高度危险；线绳异物可能造成肠道损伤，必须尽快评估。',
    sources: [
      { label: 'ASPCA Animal Poison Control', url: 'https://www.aspca.org/pet-care/animal-poison-control' },
      { label: 'Cornell Feline Health Topics', url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics' },
    ],
  },
  {
    id: 'trauma',
    symptom: '坠楼、车祸、咬伤、明显跛行或出血',
    risk: '急诊',
    firstAid: ['用毛巾轻柔包裹减少挣扎', '出血处用干净纱布轻压', '尽快送医检查内伤和骨折'],
    doNot: ['不要强行复位骨折', '不要给人用止痛药', '不要因外表看起来没事就不检查'],
    goNow: '猫很会隐藏疼痛，外伤后即使能走也应尽快检查。',
    sources: [
      { label: 'VCA emergency care overview', url: 'https://vcahospitals.com/know-your-pet/emergencies-in-cats' },
    ],
  },
]

export const globalSources: Source[] = [
  cfaBreeds,
  ticaBreeds,
  { label: 'TheCatAPI', url: 'https://thecatapi.com/' },
  { label: 'Cornell Feline Health Center', url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center' },
  { label: 'WSAVA Nutrition Guidelines', url: 'https://wsava.org/global-guidelines/global-nutrition-guidelines/' },
  { label: 'FDA Animal & Veterinary Recalls', url: 'https://www.fda.gov/animal-veterinary/safety-health/recalls-withdrawals' },
]
