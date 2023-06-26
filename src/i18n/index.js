import { createI18n } from 'vue-i18n'
import ko from './ko'
import en from './en'

const numberFormats = {
  'ko': {
    decimal: {
      style: 'decimal'
    }
  },
  'en': {
    decimal: {
      style: 'decimal'
    }
  }
}

export const i18n = createI18n({
  locale: 'ko',
  legacy: false,
  messages: { ko, en },
  numberFormats
})