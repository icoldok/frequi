import { createI18n } from 'vue-i18n';
import en from './locales/enjson';
import ru from './locales/ru.json';

const saved = localStorage.getItem('lang');
const initial = saved || (navigator.language?.toLowerCase().startsWith('ru') ? 'ru' : 'en');

export const i18n = createI18n({
  legacy: false,
  locale: initial,
  fallbackLocale: 'en',
  messages: { en, ru },
});

export function changeLanguage(lng: 'en' | 'ru') {
  // @ts-ignore
  i18n.global.locale.value = lng;
  localStorage.setItem('lang', lng);
}
