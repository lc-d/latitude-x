<template>
  <div>
    <NuxtLayout v-if="page" :name="page.layout">
      <ContentDoc>
        <template #empty>
          <p class="text-center mt-12"><b>Questo file non ha contenuto. Scrivi qualcosa!</b></p>
        </template>
      </ContentDoc>
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
  layout: false
})
const getTitle = computed(()=>{
  return page && page.value ? page.value.title : 'Errore 404'
})
const getDescription = computed(()=>{
  return page && page.value ? page.value.description:'Pagina non trovata'
})
useHead({
  meta: [
    { name: 'og:title', content: getTitle + ' | Latitude X' },
    { name: 'og:description', content: getDescription },
  ],
})
</script>
