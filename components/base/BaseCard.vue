<template>
  <article
    class="card"
    :class="{ 'grid grid-cols-2 space-x-4': horizontal, 'card-border': border }"
  >
    <BaseLink
      :to="path"
      :isLink="false"
      class="block"
      :class="{ relative: hasVideo }"
      :title="`Leggi «${title}»`"
    >
      <span
        class="img-spacer"
        :class="{ 'ratio-1x1 h-full': horizontal, 'ratio-3x2': !horizontal }"
      >
        <BaseImage :src="image" />
      </span>
      <BaseImage
        v-if="hasVideo"
        class="absolute z-10 right-0 bottom-0 w-8 h-8"
        :src="'/img/default/play.svg'"
      />
    </BaseLink>
    <div :class="{ 'p-1': !border }">
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
  path: {
    type: String,
    default: '',
  },
  horizontal: {
    type: Boolean,
    default: false,
  },
  border: {
    type: Boolean,
    default: false,
  },
  hasVideo: {
    type: Boolean,
    default: false,
  },
})
</script>
