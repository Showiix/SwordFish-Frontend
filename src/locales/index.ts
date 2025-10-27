// i18n 国际化配置
import { createI18n } from 'vue-i18n'
import zhCN from './zh-CN'
import enUS from './en-US'

// 定义语言类型
export type Language = 'zh-CN' | 'en-US'

// 从本地存储获取语言设置，默认中文
const getStoredLanguage = (): Language => {
  const stored = localStorage.getItem('language') as Language
  return stored || 'zh-CN'
}

// 创建 i18n 实例
const i18n = createI18n({
  legacy: false, // 使用 Composition API 模式
  locale: getStoredLanguage(), // 默认语言
  fallbackLocale: 'zh-CN', // 回退语言
  messages: {
    'zh-CN': zhCN,
    'en-US': enUS
  },
  // 全局注入 $t
  globalInjection: true
})

export default i18n
