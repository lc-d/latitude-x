<template>
  <div>
    <NuxtLayout v-if="page" :name="page.layout">
      <ContentDoc />
    </NuxtLayout>
    <NuxtLayout v-else name="page">
      <ContentDoc>
        <template #not-found>
          <LayoutNotFound />
        </template>
      </ContentDoc>
    </NuxtLayout>
  </div>
</template>

<script setup>
const { page } = useContent()
definePageMeta({
  layout: false,
})
</script>
