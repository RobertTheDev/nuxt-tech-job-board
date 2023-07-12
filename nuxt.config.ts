// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/styles/index.css'],
  components: [
    {
      path: '~/components',
    },
    {
      path: '~/components/account-settings/',
      pathPrefix: false,
    },
    {
      path: '~/components/auth/',
      pathPrefix: false,
    },
    {
      path: '~/components/companies/',
      pathPrefix: false,
    },
    {
      path: '~/components/job-posts/',
      pathPrefix: false,
    },
    {
      path: '~/components/profile/',
      pathPrefix: false,
    },
  ],
});
