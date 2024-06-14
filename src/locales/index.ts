import { createI18n } from 'vue-i18n';
import en from './en.json';
import jp from './jp.json';
import fr from './fr.json';
import pt from './pt.json';

const messages = {
  en,
  jp,
  fr,
  pt,
};

const i18n = createI18n({
  locale: import.meta.env.LOCALE || 'en',
  globalInjection: true,
  fallbackLocale: 'en',
  availableLocales: ['en', 'jp', 'fr', 'pt'],
  messages: messages,
});

export default i18n;
