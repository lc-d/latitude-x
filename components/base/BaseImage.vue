<template>
  <img
    :src="src"
    :alt="alt"
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
  }
});
</script>
