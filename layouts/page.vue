<template>
  <div class="wrapper wrapper-md prose" :class="{'pt-24':!hasImage}">
    <slot />
  </div>
</template>

<script setup>
const { page } = useContent()
const hasImage = computed(()=> {
 return page.value.cover_image ? true : false
})
</script>
