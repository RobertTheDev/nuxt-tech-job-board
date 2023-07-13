import componentsConfig from './components.config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/sass/style.scss'],
  components: componentsConfig,
  modules: ['@nuxt/content'],
});
