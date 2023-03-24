<template>
  <h2 class="h1-style text-center">{{ appConfig.text.communtyTitle }}</h2>
  <Swiper
    :modules="[SwiperAutoplay]"
    :breakpoints="{
      0: {
        slidesPerView: 3,
      },
      540: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 6,
      },
      1024: {
        slidesPerView: 8,
      },
    }"
    :loop="false"
    :autoplay="{
      delay: 1000,
      disableOnInteraction: true,
    }"
    class="mt-12"
  >
    <SwiperSlide v-for="(person, index) in appConfig.community" :for="index">
      <figure class="text-center">
        <BaseImage
          class="rounded-full mb-3 m-auto w-24"
          :src="'/img/community/' + person.src"
          width="120"
          height="120"
        />
        <figcaption class="text-sm"><i>{{ person.name }}</i></figcaption>
      </figure>
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()
</script>
