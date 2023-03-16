<template>
  <div>
    <header
      :style="{ backgroundImage: `url('/img/default/hero-header.jpg')` }"
      class="hero"
    >
      <div class="hero-wrapper flex items-center">
        <div class="wrapper text-center md:text-left">
          <LayoutLogo class="m-auto md:m-0" />
          <h1 class="h1-style text-false-white drop-shadow-text mt-3">
            Benvenuti a
            <b class="inline-block">Latitude X</b>
            <br />
            <small>{{ appConfig.text.motto }}</small>
          </h1>
        </div>
      </div>
    </header>
    <section class="top-section wrapper">
      <div class="md:flex md:space-x-4">
        <div class="md:w-2/3">
          <BaseLink
            :to="'/viaggi'"
            title="Vedi tutti i viaggi di Latitude X"
            class="text-false-white text-lg drop-shadow-text hover:text-false-white"
          >
            <b>Diario dei viaggi</b>
          </BaseLink>
          <ul class="grid-2 mt-3">
            <li v-for="(viaggio, index) in viaggi" :key="index">
              <SummaryViaggi :article="viaggio" />
            </li>
          </ul>
        </div>
        <div class="md:w-1/3 mt-12 md:mt-0 max-w-sm md:max-w-none m-auto">
          <BaseLink
            :to="'/destinazioni'"
            title="Vedi tutte le destinazioni di Latitude X"
            class="md:text-false-white text-lg md:drop-shadow-text md:hover:text-false-white"
          >
            <b>Destinazioni</b>
          </BaseLink>
          <ul class="space-y-4 mt-3 relative">
            <li
              v-for="(destinazione, index) in destinazioni"
              :key="index"
              class="max-w-sm"
            >
              <SummaryDestinazioni :article="destinazione" />
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section>
      <div
        :style="{ backgroundImage: `url('/img/default/hero-middle.jpg')` }"
        class="hero hero-middle"
      >
        <div class="wrapper flex items-center justify-end">
          <div class="md:w-1/2 text-false-white text-right drop-shadow-text">
            <blockquote class="h2-style">
              «{{ appConfig.text.quote }}»
            </blockquote>
            <p class="mt-4">
              <i>{{ appConfig.text.quoteAuthor }}</i>
            </p>
          </div>
        </div>
      </div>
      <div class="wrapper mt-12 prose">
        <div class="md:flex md:space-x-4">
          <div class="md:w-1/2">
            <p>
              <BaseImage
                :src="'/logo/latitudex-logo-default.svg'"
                alt="Logo di Latitude X"
                class="max-w-xs"
              />
            </p>
            <p class="h3-style" v-html="appConfig.text.aboutP1" />
            <p class="h3-style" v-html="appConfig.text.aboutP2" />
            <p>
              <em v-html="appConfig.text.aboutP3" />
            </p>
          </div>
          <div class="md:w-1/2">
            <div class="sm:flex sm:space-x-4">
              <div class="sm:w-1/2">
                <p>
                  <BaseImage
                    :src="'/img/default/giulia.jpg'"
                    alt="Foto di Giulia Gabani di profilo con la corda d'arrampicata sulla spalla"
                    class="m-auto -mb-6"
                  />
                </p>
                <h2 id="giulia-gabani">Giulia Gabani</h2>
                <ul class="text-sm">
                  <li
                    v-for="(text, index) in appConfig.text.giulia"
                    :key="index"
                  >
                    {{ text }}
                  </li>
                </ul>
                <BaseLink
                  :to="'/giulia-gabani'"
                  title="Leggi di più su Giulia Gabani"
                >
                  Leggi di più
                </BaseLink>
              </div>
              <div class="sm:w-1/2 mt-12 sm:mt-0">
                <p>
                  <BaseImage
                    :src="'/img/default/francesco.jpg'"
                    alt="Foto di Francesco Maria Sauro di profilo con la corda d'arrampicata sulla spalla"
                    class="m-auto -mb-6"
                  />
                </p>
                <h2 id="francesco-sauro">Francesco Sauro</h2>
                <ul class="text-sm">
                  <li
                    v-for="(text, index) in appConfig.text.francesco"
                    :key="index"
                  >
                    {{ text }}
                  </li>
                </ul>
                <BaseLink
                  :to="'/francesco-sauro'"
                  title="Leggi di più su Francesco Sauro"
                >
                  Leggi di più
                </BaseLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="wrapper wrapper-lg mt-16">
        <LayoutCommunity />
      </div>
    </section>
    <section>
      <div class="wrapper wrapper-lg mt-16">
        <LayoutSponsor />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()
const viaggi = await queryContent('/viaggi/')
  .where({
    draft: { $ne: 'true' },
  })
  .only(['_path', 'title', 'cover_image', 'date'])
  .sort({ date: -1 })
  .limit(4)
  .find()
const destinazioni = await queryContent('/destinazioni/')
  .where({
    draft: { $ne: 'true' },
  })
  .only(['_path', 'title', 'cover_image', 'activity', 'season', 'difficulty'])
  .sort({ date: -1 })
  .limit(3)
  .find()

useHead({
  title: appConfig.meta.homeTitle,
  meta: [
    { name: 'description', content: appConfig.meta.homeDescription },
    { name: 'og:title', content: appConfig.meta.homeTitle },
    { name: 'og:description', content: appConfig.meta.homeDescription },
  ],
})
</script>

<style scoped lang="scss">
.hero {
  height: 720px;
  max-width: 1440px;
  margin: 0 auto -120px auto;
  background-size: cover;
  background-position: center right;
  background-repeat: no-repeat;
  &-wrapper {
    height: 550px;
  }
  &-middle {
    margin: -120px auto 0 auto;
    background-position: center center;
    .wrapper {
      height: 720px;
    }
  }
}
</style>
