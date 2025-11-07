import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en/translation.json';
import kz from './locales/kz/translation.json';
import ru from './locales/ru/translation.json';

const resources = {
  en: { translation: en },
  kz: { translation: kz },
  ru: { translation: ru },
};

const defaultLng = localStorage.getItem('app_lang') || 'kz';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: defaultLng,
    fallbackLng: 'kz',
    interpolation: { escapeValue: false },
  });

export default i18n;
