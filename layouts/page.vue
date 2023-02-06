<template>
<section>
  <div
      v-if="hasImage"
      :style="{ backgroundImage: `url('${page.cover_image}')` }"
      class="hero"
    />
    <article class="wrapper wrapper-md prose" :class="{ 'pt-24': !hasImage, 'pt-8':hasImage }">
    <slot />
  </article>
</section>
  
</template>

<script setup>
const { page } = useContent()
const hasImage = computed(() => {
  return page.value.cover_image ? true : false
})
</script>

<style scoped lang="scss">
.hero {
  height: 320px;
  max-width: 1440px;
  margin: 0 auto;
  background-size: cover;
  background-position: bottom center;
  background-repeat: no-repeat;
}
</style>
