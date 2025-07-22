import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Import language resources
import enTranslations from './en.json'
import itTranslations from './it.json'

const resources = {
  en: {
    translation: enTranslations
  },
  it: {
    translation: itTranslations
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React already does escaping
    }
  })

export default i18n
