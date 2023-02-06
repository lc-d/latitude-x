<template>
  <div
    class="wrapper pt-24"
    :class="{
      'wrapper-lg': hasSidebar,
      'wrapper-md': !hasSidebar,
    }"
    @keydown.esc="playVideo"
  >
    <section :class="{ 'md:flex md:space-x-4': hasSidebar }">
      <article :class="{ 'md:w-2/3': hasSidebar }">
        <div v-if="hasImage" :class="{ relative: hasVideo }" class="bg-primary">
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
            <span class="sr-only">Vedi il video di «{{ page.title }}»</span>
          </BaseButton>
        </div>
        <header>
          <small class="text-base text-grey capitalize">
            {{ page.date }} • {{ page.location_name }}
          </small>
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
        <ul class="space-y-4 mt-3 sticky top-2">
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
        <h2 class="h2-style">Dal nostro diario dei viaggi</h2>
      </header>
      <ul class="mt-6 grid-2">
        <li>
          <SummaryViaggi
            v-if="prev && prev.layout === 'viaggi'"
            :article="prev"
          />
        </li>
        <li>
          <SummaryViaggi
            v-if="next && next.layout === 'viaggi'"
            :article="next"
          />
        </li>
      </ul>
    </section>
    <BaseModal v-if="isPlayerOpen" ref="video-wrapper" @close-modal="playVideo">
      <iframe
        width="560"
        height="315"
        :src="'https://www.youtube.com/embed/' + page.video_id"
        :title="'YouTube video player per: «' + page.title + '»'"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </BaseModal>
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
  return page.value.video_id ? true : false
})
const isPlayerOpen = ref(false)
const playVideo = function () {
  isPlayerOpen.value = !isPlayerOpen.value
}
</script>

<style lang="scss" scoped>
  iframe {
    max-width: 100%;
  }
</style>