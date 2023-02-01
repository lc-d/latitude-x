<template>
  <nuxt-picture
    :src="src"
    :alt="alt"
    :format="hasFormat ? format : null"
    :placeholder="placeholder"
    loading="lazy"
  />
</template>

<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    default: "",
  },
  alt: {
    type: String,
    default: "",
  },
  placeholder: {
    type: Boolean,
    default: true,
  },
  format: {
    type: String,
    default: "webp",
  },
});
const hasFormat = computed(() => {
  return props.format ? true : false;
});
</script>
