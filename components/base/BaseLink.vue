<template>
  <NuxtLink :to="to" :title="title">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({
  to: {
    type: String,
    default: "#",
  },
  title: {
    type: String,
    default: "",
  },
});
</script>
