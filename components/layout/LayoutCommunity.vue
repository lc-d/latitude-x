<template>
  <div class="wrapper wrapper-lg mt-16 text-center">
    <h2 class="h1-style">Si sono avventurati con noi</h2>
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
      :loop="true"
      :autoplay="{
        delay: 1000,
        disableOnInteraction: true,
      }"
      class="mt-12"
    >
      <SwiperSlide v-for="(person, index) in appConfig.community" :for="index">
        <figure>
          <BaseImage
            class="rounded-full mb-3 m-auto w-24"
            :src="'/img/community/' + person.src"
            :width="120"
            :format="'webp'"
          />
          <figcaption>{{ person.name }}</figcaption>
        </figure>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()
</script>
