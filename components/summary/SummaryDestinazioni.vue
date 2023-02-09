<template>
  <BaseCard
    :image="article.cover_image"
    :path="article._path"
    :horizontal="true"
    :border="true"
    :title="article.title"
  >
    <header>
      <h3 class="h4-style mt-1">
        <BaseLink :to="article._path" :isLink="false" :title="`Leggi la destinazione: «${article.title}»`">
          {{ article.title }}
        </BaseLink>
      </h3>
    </header>
    <ul class="space-y-3 mt-3 text-sm capitalize">
      <li>
        <BaseIcon :icon="article.activity" class="text-primary mr-1" />
        {{ article.activity }}
      </li>
      <li>
        <BaseIcon :icon="article.season" class="text-primary mr-1" />
        {{ article.season }}
      </li>
      <li>
        <BaseIcon :icon="'heart'" class="text-primary mr-1" />
        {{ article.difficulty }}
      </li>
    </ul>
    <p class="mt-2 text-sm">
      <BaseLink :to="article._path" :title="`Leggi «${article.title}»`">
        Vai qui
      </BaseLink>
    </p>
  </BaseCard>
</template>

<script setup lang="ts">
const props = defineProps({
  article: {
    type: Object,
    default: () => {},
  },
})
</script>
