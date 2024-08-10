// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon", "@nuxt/eslint"],
  extends: ["nuxt-umami"],
  app: {
    head: {
      title: "Atelier Abyss",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: { lang: "en" },
      meta: [
        { property: 'og:image', content: 'https://i.psray.net/i/2024/04/21/6624dd2e9a5c4.jpg' }
      ]
    },
  },
});