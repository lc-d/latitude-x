<template>
  <nuxt-img
    :src="getSrc"
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
const getSrc = computed(()=>{
  return props.src ? props.src : '/img/default/placeholder.jpg'
})
</script>
