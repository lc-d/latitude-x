<template>
  <div>
    <div
      :style="{ backgroundImage: `url('/img/default/hero-viaggi.jpg')` }"
      class="hero"
    />
    <section class="top-section wrapper">
      <header>
        <h1 class="h1-style text-false-white drop-shadow-text">
          <b>Diario dei viaggi</b>
        </h1>
      </header>
      <ul class="grid-3 mt-8">
        <li v-for="(article, index) in articles" :key="index">
          <SummaryViaggi :article="article" />
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
const articles = await queryContent('/viaggi/').find()
</script>

<style scoped lang="scss">
.hero {
  height: 520px;
  max-width: 1440px;
  margin: 0 auto -240px auto;
  background-size: cover;
  background-position: bottom center;
  background-repeat: no-repeat;
}
</style>
