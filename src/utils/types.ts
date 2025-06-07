// 共通の型定義
export interface User {
  id: string
  name: string
  email: string
  avatar?: string
}

export interface ContactForm {
  name: string
  email: string
  message: string
}

export interface ApiResponse<T> {
  data: T
  message: string
  success: boolean
}

export interface NavigationItem {
  path: string
  label: string
  icon?: string
}

// コンポーネントのプロップス型
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

// APIエラーの型
export interface ApiError {
  code: string
  message: string
  details?: any
}

// テーマ関連の型
export type Theme = 'light' | 'dark'

export interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

// フォームの状態管理用の型
export interface FormState<T> {
  values: T
  errors: Partial<Record<keyof T, string>>
  isSubmitting: boolean
  isValid: boolean
}
