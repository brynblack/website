export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  compatibilityDate: "2026-04-25",
  css: ["@/assets/css/main.scss"],
  modules: [
    "@nuxt/content",
    "@nuxt/image",
    "@vercel/analytics",
    "@vercel/speed-insights",
    "nuxt-security",
  ],
  security: {
    headers: {
      contentSecurityPolicy:
        process.env.NODE_ENV === "development" ? false : {},
    },
  },
  vite: {
    optimizeDeps: {
      include: ["@vue/devtools-core", "@vue/devtools-kit"],
    },
  },
});
