<template>
    <h2 class="h3-style text-center">{{ appConfig.text.sponsorTitle }}</h2>
    <ul class="grid grid-6 mt-6 content-center justify-items-center">
    <li v-for="(sponsor, index) in appConfig.sponsor" :key="index" class="flex items-center">
     <figure class="text-center">
        <BaseImage
          class="rounded bg-white mb-3 p-1 m-auto"
          :src="sponsor.src ? '/img/sponsor/' + sponsor.src : null"
          width="120"
          height="120"
        />
        <figcaption class="text-sm">{{ sponsor.name }}</figcaption>
      </figure>
    </li>
    </ul>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()
</script>