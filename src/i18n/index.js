import { createI18n } from 'vue-i18n'
import ko from './ko'
import en from './en'

export const i18n = createI18n({
  locale: 'ko',
  legacy: false,
  messages: { ko, en }
})