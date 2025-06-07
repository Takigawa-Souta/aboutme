// アプリケーション全体で使用する定数
export const APP_NAME = 'About Me'
export const APP_VERSION = '1.0.0'

// API関連の定数
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001'

// ページルート
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact'
} as const

// アニメーション設定
export const ANIMATION_DURATION = {
  FAST: 200,
  MEDIUM: 300,
  SLOW: 500
} as const

// レスポンシブブレークポイント
export const BREAKPOINTS = {
  MOBILE: 480,
  TABLET: 768,
  DESKTOP: 1024,
  LARGE_DESKTOP: 1200
} as const
