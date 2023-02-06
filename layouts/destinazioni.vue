<template>
  <div>
    <div
      v-if="hasImage"
      :style="{ backgroundImage: `url('${page.cover_image}')` }"
      class="hero"
    />
    <div
      class="wrapper"
      :class="{
        'wrapper-lg': hasSidebar,
        'wrapper-md': !hasSidebar,
        'pt-6': hasImage,
        'pt-24': !hasImage,
      }"
    >
      <section :class="{ 'md:flex md:space-x-4': hasSidebar }">
        <article :class="{ 'md:w-2/3': hasSidebar }">
          <header>
            <h1 class="h1-style">{{ page.title }}</h1>
            <div class="sm:flex mt-6">
              <div class="sm:w-1/2">
                <ul class="space-y-3 text-sm">
                  <li>
                    <BaseIcon :icon="'location'" class="text-primary mr-1" />
                    Luogo:
                    <b>{{ page.location_name }}</b>
                  </li>
                  <li>
                    <BaseIcon :icon="page.activity" class="text-primary mr-1" />
                    Attività:
                    <b>{{ page.activity }}</b>
                  </li>
                  <li>
                    <BaseIcon :icon="page.season" class="text-primary mr-1" />
                    Stagione:
                    <b>{{ page.season }}</b>
                  </li>
                  <li>
                    <BaseIcon :icon="'heart'" class="text-primary mr-1" />
                    Difficoltà:
                    <b>{{ page.difficulty }}</b>
                  </li>
                </ul>
              </div>

              <div class="sm:w-1/2 mt-6 sm:mt-0">
                <h3 class="h3-style">Vuoi andare qui?</h3>
                <p class="text-sm mt-2">
                  Contattaci manifestandoci il tuo interesse, se sarà possibile
                  organizzeremo un viaggio con te.
                </p>
                <BaseButton class="btn mt-3" @click="isCtaOpen = !isCtaOpen">
                  <span v-if="isCtaOpen">Chiudi il box</span>
                  <span v-else>Voglio andare qui</span>
                </BaseButton>
              </div>
            </div>
          </header>
          <LayoutCta v-if="isCtaOpen" :title="page.title" />
          <div class="prose">
            <slot />
          </div>
          <BaseShare :path="page._path" class="mt-6" />
        </article>
        <aside v-if="hasSidebar" class="md:w-1/3">
          <h3 class="h3-style mt-12 md:mt-0">Dal nostro diario dei viaggi</h3>
          <ul class="space-y-4 mt-3 sticky top-2">
            <li
              v-for="(viaggio, index) in viaggi"
              :key="index"
              class="max-w-sm m-auto"
            >
              <SummaryViaggi :article="viaggio" />
            </li>
          </ul>
        </aside>
      </section>
      <section class="max-w-3xl m-auto mt-12">
        <header class="text-center">
          <h2 class="h2-style">Scopri altre destinazioni</h2>
        </header>
        <ul class="mt-6 grid-2">
          <li>
            <SummaryDestinazioni
              v-if="prev && prev.layout === 'destinazioni'"
              :article="prev"
            />
          </li>
          <li>
            <SummaryDestinazioni
              v-if="next && next.layout === 'destinazioni'"
              :article="next"
            />
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
const isCtaOpen = ref(false)
const { page, next, prev } = useContent()
const viaggi = await queryContent('viaggi')
  .where({ location_name: { $eq: page.value.location_name } })
  .limit(2)
  .find()
const hasSidebar = computed(() => {
  return viaggi.length === 0 ? false : true
})
const hasImage = computed(() => {
  return page.value.cover_image ? true : false
})
</script>

<style scoped lang="scss">
.hero {
  height: 380px;
  max-width: 1440px;
  margin: 0 auto;
  background-size: cover;
  background-position: bottom center;
  background-repeat: no-repeat;
}
</style>
