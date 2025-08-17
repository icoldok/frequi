import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import App from './App.vue';
import { VueDraggableGrid } from './plugins/vue-grid-layout';
import router from './router';

import { PrimeVue, FtTheme, ToastService } from './plugins/primevue';
import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import ru from './locales/ru.json';

const messages = { en, ru } as const;

const browserLocale = (navigator.language || 'en').toLowerCase().startsWith('ru') ? 'ru' : 'en';

const i18n = createI18n({
  legacy: false,
  locale: browserLocale,
  fallbackLocale: 'en',
  messages,
});

const myApp = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
myApp.use(pinia);

myApp.use(PrimeVue, {
  theme: {
    preset: FtTheme,
    options: {
      darkModeSelector: '.ft-dark-theme',
      cssLayer: {
        name: 'primevue',
        order: 'theme, base, primevue',
      },
    },
  },
});
myApp.use(ToastService);

myApp.use(router);
myApp.use(VueDraggableGrid);
myApp.use(i18n);

// Vue.config.productionTip = false;
myApp.mount('#app');
