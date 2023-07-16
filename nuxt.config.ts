import componentsConfig from './components.config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/sass/style.scss', '@fortawesome/fontawesome-svg-core/styles.css'],
  components: componentsConfig,
  modules: ['@nuxt/content'],
  plugins: [{ src: '~/plugins/font-awesome.ts' }],
});
