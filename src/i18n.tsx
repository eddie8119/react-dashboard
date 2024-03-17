import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locals/en/translation.json';
import translationZH from './locals/zh/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  zh: {
    translation: translationZH,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;