<template>
     <h2 class="h3-style text-center">{{ appConfig.text.sponsorTitle }}</h2>
    <ul class="grid grid-3 mt-6">
    <li v-for="(sponsor, index) in appConfig.sponsor" :key="index">
     <figure class="text-center">
        <BaseImage
          class="rounded-full mb-3 m-auto w-36"
          :src="sponsor.src ? '/img/sponsor/' + sponsor.src : null"
          :width="180"
        />
        <figcaption class="text-sm">{{ sponsor.name }}</figcaption>
      </figure>
    </li>
    </ul>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()
</script>