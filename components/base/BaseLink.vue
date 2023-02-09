<template>
  <NuxtLink
    :to="to"
    :class="{ 'text-primary hover:text-primary-dark underline underline-offset-2': isLink }"
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
