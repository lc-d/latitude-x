<template>
  <span :class="getColor">
    <span v-if="$slots.default" class="mr-2">
      <ContentSlot :use="$slots.default" unwrap="p" />
    </span>
    <BaseIcon :icon="icon" :size="size" />
  </span>
</template>
<script setup lang="ts">
const props = defineProps({
  icon: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: '',
  },
})
const getColor = computed(() => {
  return props.color ? 'text-' + props.color : null
})
</script>
