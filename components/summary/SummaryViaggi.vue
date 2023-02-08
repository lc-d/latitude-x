<template>
  <BaseCard
    :image="article.cover_image"
    :path="article._path"
    :has-video="true"
  >
    <header>
      <small class="text-grey capitalize">{{ $date(article.date) }}</small>
      <h3 class="h4-style">
        <BaseLink :to="article._path" :isLink="false">
          {{ article.title }}
        </BaseLink>
      </h3>
    </header>
    <p class="mt-2 text-sm">
      <BaseLink :to="article._path" :title="`Leggi «${article.title}»`">
        Vedi il video
      </BaseLink>
    </p>
  </BaseCard>
</template>


<script setup lang="ts">
const { $date } = useNuxtApp()
const props = defineProps({
  article: {
    type: Object,
    default: () => {},
  }
})
</script>

