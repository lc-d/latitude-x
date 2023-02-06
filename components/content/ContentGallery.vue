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
        <BaseImage :src="slide.src" />
        <figcaption class="flex justify-between mt-0 text-base">
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

<style lang="scss" scoped>
figure picture img {
  margin-bottom: 1em;
}

</style>