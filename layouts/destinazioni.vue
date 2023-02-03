<template>
  <div>
    <div
      v-if="hasImage"
      :style="{ backgroundImage: `url('${page.cover_image}')` }"
      class="hero"
    />
    <div
      class="wrapper"
      :class="{ 'wrapper-lg': hasSidebar, 'wrapper-md': !hasSidebar }"
    >
      <div :class="{ 'md:flex md:space-x-4': hasSidebar }">
        <div :class="{ 'md:w-2/3': hasSidebar }">
          <div class="prose">
            <pre>
              {{ page.location_name }} / {{ viaggi.length }} / {{ hasSidebar }} 
            </pre>
            <slot />
          </div>
        </div>
        <div v-if="hasSidebar" class="md:w-1/3">
          <pre>
          {{ viaggi }} 
          </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { page, type } = useContent()
const viaggi = await queryContent('viaggi')
  .where({ location_name: { $eq: page.value.location_name } })
  .find()

const hasSidebar = computed(() => {
  return viaggi.length === 0 ? false : true
})
const hasImage = computed(() => {
  return page.value.cover_image ? true : false
})
</script>

<style scoped lang="scss">
.hero {
  height: 380px;
  max-width: 1440px;
  margin: 0 auto;
  background-size: cover;
  background-position: bottom center;
  background-repeat: no-repeat;
}
</style>
