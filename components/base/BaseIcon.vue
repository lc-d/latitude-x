<template>
  <svg class="icon" :class="getSize">
    <use :xlink:href="'/img/default/icons.svg#' + icon" />
  </svg>
</template>

<script setup lang="ts">
const props = defineProps({
  icon: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: '',
  },
})
const getSize = computed(() => {
    return props.size ? 'icon-'+props.size:null
})
</script>

<style lang="scss" scoped>
.icon {
  fill: none;
  display: inline-block;
  vertical-align: middle;
  width: 1.5rem;
  height: 1.5rem;
  &-xs {
    width: 0.75rem;
    height: 0.75rem;
  }
  &-sm {
    width: 1rem;
    height: 1rem;
  }
  &-lg {
    width: 2.5rem;
    height: 2.5rem;
  }
  &-xl {
    width: 4rem;
    height: 4rem;
  }
}
</style>
