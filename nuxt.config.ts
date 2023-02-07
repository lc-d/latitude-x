// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    // '@nuxt/image-edge', // TODO: waiting for module update
    'nuxt-swiper',
  ],
  content: {
    documentDriven: true
  }
})
