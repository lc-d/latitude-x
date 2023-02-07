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

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>