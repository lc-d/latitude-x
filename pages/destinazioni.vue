<template>
  <div>
    <div
      :style="{ backgroundImage: `url('/img/default/hero-destinazioni.jpg')` }"
      class="hero"
    />
    <section class="top-section wrapper lg:flex lg:space-x-4">
      <header class="lg:w-1/3 mb-8">
        <div class="sticky top-2">
          <h1 class="h1-style">
            <b>Destinazioni</b>
          </h1>
          <small class="text-2xl">
            <b>{{ appConfig.text.ctaListTitle }}</b>
          </small>
          <p class="text-base mt-3">
            {{ appConfig.text.ctaListText }}
          </p>
          <BaseButton class="btn mt-3" @click="isCtaOpen = !isCtaOpen">
            <span v-if="isCtaOpen">Chiudi il box</span>
            <span v-else>Voglio viaggiare con voi qui</span>
          </BaseButton>
          <LayoutCta v-if="isCtaOpen" />
        </div>
      </header>
      <div class="lg:w-2/3">
        <ul class="grid-2">
          <li v-for="(article, index) in articles" :key="index">
            <SummaryDestinazioni :article="article" />
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()
const isCtaOpen = ref(false)
const articles = await queryContent('/destinazioni/')
  .where({
    draft: { $ne: 'true' }
  })
  .only(['_path', 'title', 'cover_image', 'activity', 'season', 'difficulty'])
  .sort({ date: -1 })
  .find()

useHead({
  title: appConfig.meta.destinazioniTitle,
  meta: [
    { name: 'description', content: appConfig.meta.destinazioniDescription },
    { name: 'og:title', content: appConfig.meta.destinazioniTitle },
    { name: 'og:description', content: appConfig.meta.destinazioniDescription },
  ],
})

// NOTE: nuxt-image `useImage()` do not work 
/*
const $img = useImage()
const backgroundStyles = computed(() => {
  const imgUrl = $img('/img/default/hero-destinazioni.jpg', { width: 1440 })
  return { backgroundImage: `url('${imgUrl}')` }
})
*/
</script>

<style scoped lang="scss">
.hero {
  height: 400px;
  max-width: 1440px;
  margin: 0 auto -120px auto;
  background-size: cover;
  background-position: bottom center;
  background-repeat: no-repeat;
}
</style>
