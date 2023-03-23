<template>
  <div>
    <div
      :style="{ backgroundImage: `url('/img/default/hero-viaggi.jpg')` }"
      class="hero"
    />
    <section class="top-section wrapper">
      <header>
        <h1 class="h1-style text-false-white drop-shadow-text">
          <b>Diario dei viaggi</b>
        </h1>
      </header>
      <ul class="grid-3 mt-8">
        <li v-for="(article, index) in listedArticles" :key="index">
          <SummaryViaggi :article="article" />
        </li>
      </ul>
      <div v-if="isPagged" class="text-center mt-12">
        <BaseButton v-if="areMoreArticles" @click="getMoreArticles" class="btn">
          Carica altri viaggi
        </BaseButton>
        <p class="mt-2">
          <small v-if="areMoreArticles">Elencati <b>{{ listedArticles.length }}</b> di <b>{{ articles.length }}</b> viaggi</small>
          <small v-else>Hai caricato tutti i viaggi</small>
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()
const limit = ref(appConfig.info.pagination)
const skip = limit.value
const isPagged = ref(true)
const $img = useImage()
const articles = await queryContent('/viaggi/')
  .where({
    draft: { $ne: 'true' },
  })
  .only(['_path', 'title', 'cover_image', 'date'])
  .sort({ date: -1 })
  .find()

const listedArticles = computed(() => {
  return articles.slice(0, limit.value)
})
onMounted(() => {
  if (listedArticles.value.length === articles.length) {
   isPagged.value = false
  }
})
const areMoreArticles = computed(() => {
  return listedArticles.value.length === articles.length ? false : true
})
const getMoreArticles = () => {
  limit.value += skip
}
useHead({
  title: appConfig.meta.viaggiTitle,
  meta: [
    { name: 'description', content: appConfig.meta.viaggiDescription },
    { name: 'og:title', content: appConfig.meta.viaggiTitle },
    { name: 'og:description', content: appConfig.meta.viaggiDescription },
  ],
})
const backgroundStyles = computed(() => {
  const imgUrl = $img('/img/default/hero-viaggi.jpg', { width: 1440 })
  return { backgroundImage: `url('${imgUrl}')` }
})
</script>

<style scoped lang="scss">
.hero {
  height: 520px;
  max-width: 1440px;
  margin: 0 auto -240px auto;
  background-size: cover;
  background-position: bottom center;
  background-repeat: no-repeat;
}
</style>
