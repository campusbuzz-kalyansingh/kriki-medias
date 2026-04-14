// ─────────────────────────────────────────
//  KRIKI Media — Site Content Data
// ─────────────────────────────────────────

export const NAV_LINKS = ['Services', 'Portfolio', 'Process', 'Pricing', 'Contact']

export const HERO_WORDS = [
  'Viral AI Videos',
  'Cinematic Ads',
  'Brand Stories',
  'Scroll-Stopping Content',
  'Award-Winning Ads',
]

export const HERO_STATS = [
  { value: '500', suffix: '+', label: 'Ads Created' },
  { value: '98',  suffix: '%', label: 'Satisfaction Rate' },
  { value: '2.4', suffix: 'B+', label: 'Total Views' },
]

export const HERO_FLOAT_CARDS = [
  { icon: '🎬', tag: 'Product Ad',  title: 'Tesla Cybertruck', stat: '↑ 340% CTR',  style: { top: '19%', right: '5%' },   animation: 'float1 6.5s ease-in-out infinite' },
  { icon: '📱', tag: 'Social Reel', title: 'Nike Air Max',     stat: '2.8M views',  style: { top: '46%', right: '1.5%' }, animation: 'float2 8s ease-in-out infinite', delay: '0.5s' },
  { icon: '🚀', tag: 'Brand Film',  title: 'Apple Vision',     stat: 'VIRAL 🔥',    style: { top: '70%', right: '5.5%' }, animation: 'float1 10s ease-in-out infinite', delay: '1s', statNeon: true },
]

export const CLIENT_BRANDS = [
  'Netflix', 'Adidas', 'Spotify', 'Airbnb', 'Tesla',
  'Apple', 'Samsung', 'Amazon', 'Google', 'Meta',
]

export const SERVICES = [
  {
    num: '01',
    icon: '🎬',
    title: 'AI Video Ads',
    desc: 'High-converting ads powered by generative AI and cinematic production. Built to stop the scroll instantly.',
  },
  {
    num: '02',
    icon: '📱',
    title: 'Social Media Ads',
    desc: 'Platform-native vertical content engineered for TikTok, Instagram Reels, and YouTube Shorts algorithms.',
  },
  {
    num: '03',
    icon: '🛍️',
    title: 'Product Showcase',
    desc: 'Stunning 3D-rendered product films that make every angle and every feature completely irresistible.',
  },
  {
    num: '04',
    icon: '💡',
    title: 'Explainer Videos',
    desc: 'Crystal-clear animated explainers that transform complex ideas into compelling, digestible stories.',
  },
  {
    num: '05',
    icon: '🎭',
    title: 'Brand Films',
    desc: 'Cinematic brand narratives that forge deep emotional connections and build long-term loyalty.',
  },
  {
    num: '06',
    icon: '⚡',
    title: '48hr Delivery',
    desc: 'From creative brief to final cut in 48 hours flat. Full production speed, zero quality compromise.',
  },
]

export const PORTFOLIO_ITEMS = [
  { cat: 'Product', title: 'Tesla Cybertruck',    views: '4.2M views', bg: 'linear-gradient(135deg,#08051a,#0a1022)' },
  { cat: 'Fashion', title: 'Nike Air Max 2024',   views: '8.1M views', bg: 'linear-gradient(135deg,#080610,#0e0820)' },
  { cat: 'Brand',   title: 'Spotify Wrapped 2024',views: '12M views',  bg: 'linear-gradient(135deg,#100618,#060e18)' },
  { cat: 'Travel',  title: 'Airbnb Summer Reel',  views: '3.8M views', bg: 'linear-gradient(135deg,#060e10,#081010)' },
  { cat: 'Tech',    title: 'Apple Vision Pro',     views: '22M views',  bg: 'linear-gradient(135deg,#180608,#0a0618)' },
  { cat: 'Product', title: 'Samsung S25 Ultra',    views: '9.4M views', bg: 'linear-gradient(135deg,#080e18,#120818)' },
]

export const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Brief & Vision',
    desc: 'Share your brand goals and audience. We absorb everything in a focused 30-min strategy call with our senior team.',
  },
  {
    num: '02',
    title: 'AI Creation',
    desc: 'Our AI engine and creative directors collaborate to produce polished video concepts delivered within 24 hours.',
  },
  {
    num: '03',
    title: 'Launch & Scale',
    desc: 'Files optimized for every platform. We track, A/B test, and iterate continuously for maximum ROI and scale.',
  },
]

export const TESTIMONIALS = [
  {
    text: 'KRIKI Media completely transformed our ad strategy. The videos they produced drove a 340% increase in click-through rates within the very first week of launch.',
    name: 'Sarah Chen',
    role: 'CMO, TechNova',
    initials: 'SC',
  },
  {
    text: 'The quality and speed are genuinely unreal. We briefed them Monday morning — by Wednesday we had 6 stunning campaign videos ready to deploy across all channels.',
    name: 'Marcus Williams',
    role: 'Head of Growth, Elevate Brand',
    initials: 'MW',
  },
  {
    text: 'Every brand needs AI video in their growth strategy. KRIKI makes it accessible, premium, and incredibly effective. Our ROAS tripled within the first month.',
    name: 'Priya Patel',
    role: 'Founder, LuxAura',
    initials: 'PP',
  },
]

export const PRICING_PLANS = [
  {
    tier: 'Starter',
    price: '$999',
    period: '/video',
    popular: false,
    features: [
      '1 AI Video Ad',
      '3 Format Variants',
      'HD Quality Output',
      '48hr Delivery',
      '2 Revisions',
    ],
  },
  {
    tier: 'Growth',
    price: '$2,499',
    period: '/mo',
    popular: true,
    features: [
      '5 AI Video Ads',
      'Unlimited Formats',
      '4K Ultra Quality',
      '24hr Delivery',
      'Unlimited Revisions',
      'Analytics Dashboard',
    ],
  },
  {
    tier: 'Enterprise',
    price: 'Custom',
    period: '',
    popular: false,
    features: [
      'Unlimited Videos',
      'Dedicated Team',
      '8K Master Quality',
      'Same Day Delivery',
      'White Glove Service',
      'API Access',
    ],
  },
]

export const FOOTER_LINKS = {
  Services: ['Video Ads', 'Social Media', 'Product Videos', 'Explainers'],
  Company:  ['About KRIKI', 'Portfolio', 'Careers', 'Blog'],
  Contact:  ['hello@krikimedia.com', '+1 (555) 0190', 'New York, NY'],
}

export const SOCIAL_ICONS = ['𝕏', 'in', '▶', '📷']

export const LOADER_MESSAGES = [
  'Booting systems...',
  'Loading AI models...',
  'Syncing creative engine...',
  'Calibrating output...',
  'All systems online ✦',
]
