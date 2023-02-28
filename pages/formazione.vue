<template>
  <section class="wrapper wrapper-md pt-24">
    <article class="prose">
      <ContentRenderer :value="article" />
    </article>
    <ul class="grid-2">
      <li v-for="(article, index) in articles" :key="index">
        <SummaryPage :article="article" />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()
const article = await queryContent('/')
  .where({ _path: '/formazione' })
  .findOne()
console.log('article', article)

const articles = await queryContent('/formazione/')
  .where({
    draft: { $ne: 'true' },
  })
  .only(['_path', 'title', 'cover_image'])
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
</script>

<style scoped lang="scss"></style>
