<template>
  <NuxtLink
    :to="to"
    :title="title"
    :class="{ 'text-primary underline underline-offset-2': isLink }"
  >
    <slot />
    <BaseIcon v-if="isLink" :icon="'arrow-next'" class="ml-2" />
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({
  to: {
    type: String,
    default: '#',
  },
  title: {
    type: String,
    default: null,
  },
  isLink: {
    type: Boolean,
    default: true,
  },
})
</script>
