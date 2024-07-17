export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["@/assets/css/main.scss"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  security: {
    headers: {
      crossOriginEmbedderPolicy:
        process.env.NODE_ENV === "development" ? "unsafe-none" : "require-corp",
      contentSecurityPolicy:
        process.env.NODE_ENV === "development"
          ? false
          : {
              "script-src": [
                "'self'",
                "https:",
                "'unsafe-inline'",
                "'strict-dynamic'",
                "'nonce-{{nonce}}'",
              ],
              "style-src": ["'self'", "https:", "'unsafe-inline'"],
              "base-uri": ["'none'"],
              "img-src": ["'self'", "data:"],
              "font-src": ["'self'", "https:", "data:"],
              "object-src": ["'none'"],
              "script-src-attr": ["'none'"],
              "upgrade-insecure-requests": true,
            },
    },
    corsHandler:
      process.env.NODE_ENV === "development"
        ? {
            origin: "*",
          }
        : {
            origin: "${serverUrl}",
          },
  },
  modules: ["@nuxt/image", "nuxt-security"],
});
