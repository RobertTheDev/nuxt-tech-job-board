// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/styles/index.css'],
  components: [
    {
      path: '~/components',
    },
    {
      path: '~/components/auth/',
      pathPrefix: false,
    },
    {
      path: '~/components/job-posts/',
      pathPrefix: false,
    },
  ],
});
