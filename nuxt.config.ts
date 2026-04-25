import { bundledLanguagesInfo } from "shiki";

export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  compatibilityDate: "2026-04-25",
  content: {
    build: {
      markdown: {
        highlight: {
          langs: bundledLanguagesInfo.map((l) => l.id),
          theme: {
            default: "github-dark",
            light: "github-light",
          },
        },
      },
    },
  },
  css: ["@/assets/css/main.scss"],
  experimental: {
    payloadExtraction: "client",
  },
  features: {
    inlineStyles: true,
  },
  modules: [
    "@nuxt/content",
    "@nuxt/image",
    "@vercel/analytics",
    "@vercel/speed-insights",
  ],
  vite: {
    optimizeDeps: {
      include: ["@vue/devtools-core", "@vue/devtools-kit"],
    },
  },
});
