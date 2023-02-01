<template>
  <article class="card" :class="{ 'grid grid-cols-2 space-x-4': horizontal }">
    <BaseLink :to="path" :isLink="false" :class="{ 'img-spacer ratio-1x1': horizontal }">

      <BaseImage
        :src="image"
        :alt="alt"
      />
      </BaseLink>
    <div>
      <header>
        <h3 class="h4-style">
          <BaseLink :to="path" :isLink="false">
            <b>{{ title }}</b>
          </BaseLink>
        </h3>
      </header>
      <slot />
    </div>
  </article>
</template>

<script setup lang="ts">
const props = defineProps({
  image: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: '',
  },
  path: {
    type: String,
    default: '',
  },
  horizontal: {
    type: Boolean,
    default: false,
  },
})
const hasImage = computed(() => {
  return props.image ? true : false
})
</script>
