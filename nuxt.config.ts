import componentsConfig from './components.config';

export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: '/logo.svg' }],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  devtools: { enabled: true },
  css: ['@/sass/style.scss', '@fortawesome/fontawesome-svg-core/styles.css'],
  components: componentsConfig,
  modules: ['@nuxt/content', '@pinia/nuxt', '@sidebase/nuxt-session'],
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
