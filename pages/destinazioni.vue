<template>
  <div>
    <div
      :style="{ backgroundImage: `url('/img/default/hero-destinazioni.png')` }"
      class="hero"
    />
    <section class="top-section wrapper lg:flex lg:space-x-4">
      <header class="lg:w-1/3 mb-8">
        <div class="sticky top-20">
          <h1 class="h1-style">
            <b>Destinazioni</b>
          </h1>
          <small class="text-2xl">
            <b>Scegli la tua meta</b>
          </small>
          <p class="text-base mt-3">
            Esprimi la tua preferenza, potremmo organizzare un viaggio per
            andarci insieme.
          </p>
          <BaseButton class="btn mt-3" @click="isCtaOpen = !isCtaOpen">
            <span v-if="isCtaOpen">Chiudi il box</span>
            <span v-else>Voglio viaggiare con voi qui</span>
          </BaseButton>
          <LayoutCta v-if="isCtaOpen" />
        </div>
      </header>
      <div class="lg:w-2/3">
        <ul class="grid-2">
          <li v-for="(article, index) in articles" :key="index">
            <SummaryDestinazioni :article="article" />
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const isCtaOpen = ref(false)
const articles = await queryContent('/destinazioni/').find()
</script>

<style scoped lang="scss">
.hero {
  height: 400px;
  max-width: 1440px;
  margin: 0 auto -120px auto;
  background-size: cover;
  background-position: bottom center;
  background-repeat: no-repeat;
}
</style>
