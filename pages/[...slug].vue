<template>
  <NuxtLayout :name="page.layout">
    <ContentDoc />
  </NuxtLayout>
</template>

<script setup>
const { page } = useContent()
</script>
