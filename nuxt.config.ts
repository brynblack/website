export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['@/assets/css/main.scss'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
})
