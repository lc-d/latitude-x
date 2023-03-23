// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge', // TODO: waiting for module update
    'nuxt-swiper',
    '@nuxtjs/robots',
  ],
  content: {
    documentDriven: true
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  robots: {
    rules: {
      disallow: '',
      allow: '/',
      sitemap: 'https://latitudex.it/sitemap.xml'
    } 
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  }
})
