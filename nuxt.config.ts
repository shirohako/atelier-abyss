// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
  ],
  extends: ['nuxt-umami'],
  app: {
    head: {
      title: 'Atelier Abyss',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  }
})
