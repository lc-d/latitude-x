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
  htmlAttrs: {
    lang: 'it',
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'format-detection', content: 'telephone=no' },
  ],
  link: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/logo/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/logo/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/logo/favicon-16x16.png',
    },
    {
      rel: 'mask-icon',
      color: '#5bbad5',
      href: '/logo/safari-pinned-tab.svg',
    },
    {
      rel: 'manifest',
      crossorigin: 'use-credentials',
      href: '/logo/site.webmanifest',
    },
  ],
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
