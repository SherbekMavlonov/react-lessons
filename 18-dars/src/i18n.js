import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        Home: 'Home',
        Contact: 'Contact',
        Product: 'Product',
      },
    },
    uz: {
      translation: {
        Home: 'Bosh sahifa',
        Contact: 'Bog`lanish',
        Product: 'Maxsulotlar',
      },
    },
  },
  lng: localStorage.getItem('lang') || 'uz',
  fallbackLng: localStorage.getItem('lang') || 'uz',

  interpolation: {
    escapeValue: false,
  },
})
