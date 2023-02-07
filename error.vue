<template>
  <div class="bg-grey-lighter">
    <NuxtLoadingIndicator />
    <LayoutHeader />
    <main class="py-24">
      <LayoutNotFound />
    </main>
    <LayoutFooter />
  </div>
</template>

<script setup>
useHead({
  title: 'Errore 404',
  meta: [
    { name: 'og:title', content: 'Errore| Latitude X' },
    { name: 'og:description', content: 'Pagina non trovata' },
  ],
})
</script>
