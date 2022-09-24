import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { translationsEN, translationsJA } from '.';

const resources = {
  en: {
    translations: translationsEN,
  },
  ja: {
    translations: translationsJA,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  ns: ['translations'],
  defaultNS: 'translations',
  interpolation: {
    escapeValue: false,
    formatSeparator: ',',
  },
  react: {
    useSuspense: true,
  },
});

export default i18n;
