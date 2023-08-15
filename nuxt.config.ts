import componentsConfig from './components.config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/sass/style.scss', '@fortawesome/fontawesome-svg-core/styles.css'],
  components: componentsConfig,
  modules: [
    '@nuxt/content',
    '@nuxtjs/stylelint-module',
    '@pinia/nuxt',
    '@sidebase/nuxt-session',
  ],
  plugins: [{ src: '~/plugins/font-awesome.ts' }],
  session: {
    session: {
      expiryInSeconds: 7 * 24 * 60 * 60,
      storageOptions: {
        driver: 'redis',
        options: {
          url: 'redis://localhost:6379',
        },
      },
    },
  },
});
