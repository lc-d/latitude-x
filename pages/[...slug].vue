<template>
  <NuxtLayout :name="page.layout">
    <ContentDoc />
  </NuxtLayout>
</template>

<script setup>
const { page } = useContent()
// const getPage = computed(()=>{
//   return page.layout ? page.layout : 'page'
// })
// console.log(getPage);
</script>
