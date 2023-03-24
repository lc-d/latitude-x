<template>
  <NuxtLink
    :to="to"
    :class="{ 'is-link': isLink }"
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
  isLink: {
    type: Boolean,
    default: true,
  },
})
</script>
