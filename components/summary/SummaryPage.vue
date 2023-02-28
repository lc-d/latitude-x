<template>
  <BaseCard
    :image="article.cover_image"
    :path="article._path"
    :title="article.title"
  >
    <header>
      <h3 class="h4-style">
        <BaseLink :to="article._path" :isLink="false" :title="`Leggi: «${article.title}»`">
          {{ article.title }}
        </BaseLink>
      </h3>
    </header>
    <p class="mt-2 text-sm">
      <BaseLink :to="article._path" :title="`Leggi «${article.title}»`">
       Leggi di più
      </BaseLink>
    </p>
  </BaseCard>
</template>


<script setup lang="ts">
const props = defineProps({
  article: {
    type: Object,
    default: () => {},
  }
})
</script>

