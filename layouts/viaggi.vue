<template>
  <div
    class="wrapper pt-24"
    :class="{
      'wrapper-lg': hasSidebar,
      'wrapper-md': !hasSidebar,
    }"
  >
    <section :class="{ 'md:flex md:space-x-4': hasSidebar }">
      <article :class="{ 'md:w-2/3': hasSidebar }">
        <div v-if="hasImage" :class="{ relative: hasVideo }">
          <figure class="mb-6">
            <BasePicture
              :src="page.cover_image"
              class="img-spacer ratio-16x9"
            />
          </figure>
          <BaseButton
            v-if="hasVideo"
            class="absolute z-10 top-0 left-0 w-full h-full flex items-center justify-center"
            @click="playVideo()"
          >
            <BaseImage
              class="w-auto h-auto"
              :src="'/img/default/play-button.svg'"
            />
            <span class="sr-only">Vedi il video di «{{page.title}}»</span>
          </BaseButton>
        </div>
        <header>
          <small class="text-base text-grey capitalize">{{ page.date }}</small>
          <h1 class="h1-style mt-3">{{ page.title }}</h1>
        </header>
        <div class="prose">
          <slot />
        </div>
        <BaseShare :path="page._path" class="mt-6" />
      </article>
      <aside v-if="hasSidebar" class="md:w-1/3">
        <h3 class="h3-style mt-12 md:mt-0 text-center md:text-left">
          Destinazioni in zona «{{ page.location_name }}»
        </h3>
        <ul class="space-y-4 mt-3 sticky top-20">
          <li
            v-for="(destinazione, index) in destinazioni"
            :key="index"
            class="max-w-sm m-auto"
          >
            <SummaryDestinazioni :article="destinazione" />
          </li>
        </ul>
      </aside>
    </section>
    <section class="max-w-3xl m-auto mt-12">
      <header class="text-center">
        <h2 class="h2-style">Scopri altri viaggi</h2>
      </header>
      <ul class="mt-6 grid-2">
        <li v-if="prev && prev.layout === 'viaggi'">
          <SummaryViaggi :article="prev" />
        </li>
        <li v-if="next && next.layout === 'viaggi'">
          <SummaryViaggi :article="next" />
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
const { page, next, prev } = useContent()
const destinazioni = await queryContent('destinazioni')
  .where({ location_name: { $eq: page.value.location_name } })
  .limit(2)
  .find()
const hasSidebar = computed(() => {
  return destinazioni.length === 0 ? false : true
})
const hasImage = computed(() => {
  return page.value.cover_image ? true : false
})
const hasVideo = computed(() => {
  return page.value.video_url ? true : false
})
const playVideo = function() {
  console.log('play video');

}
</script>
