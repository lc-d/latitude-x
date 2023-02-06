<template>
  <Swiper
    :modules="[SwiperAutoplay, SwiperEffectCreative]"
    :slides-per-view="1"
    :loop="true"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: true,
    }"
  >
    <SwiperSlide v-for="(slide, index) in images" :key="index">
      <figure>
        <BasePicture :src="slide.src" />
        <figcaption class="flex justify-between mt-2">
          <small><i v-if="slide.caption">{{ slide.caption }}</i></small>
          <small><b>{{ index+1 }}</b> / {{ images.length }}</small>
        </figcaption>
      </figure>
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
const props = defineProps({
  images: {
    type: Array,
    default: () => [],
  },
})
</script>
