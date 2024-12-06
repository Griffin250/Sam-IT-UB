import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation files
import en from './locales/en.json';
import no from './locales/no.json';

const resources = {
  en: { translation: en },
  no: { translation: no },
};

i18n
  .use(LanguageDetector) // Detects language from browser settings
  .use(initReactI18next) // Passes i18n instance to React
  .init({
    resources,
    fallbackLng: 'en', // Default language
    interpolation: {
      escapeValue: false, // React handles escaping by default
    },
  });

export default i18n;
