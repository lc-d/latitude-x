<template>
  <div class="bg-grey-lighter">
    <NuxtLoadingIndicator />
    <LayoutHeader />
    <main class="mb-24">
      <NuxtPage />
    </main>
    <LayoutFooter />
  </div>
</template>

<script setup>
  useHead({
    titleTemplate: '%s | Latitude X',
  })
</script>