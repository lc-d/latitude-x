<template>
  <div>
    <div
      :style="{ backgroundImage: `url('/img/default/hero-viaggi.png')` }"
      class="hero"
    ></div>
    <section class="top-section wrapper">
      <header>
        <h1 class="h1-style text-false-white drop-shadow-text">
          <b>Diario dei viaggi</b>
        </h1>
      </header>
      <ul class="grid-3 mt-8">
        <li v-for="(article, index) in articles" :key="index">
          <BaseCard
            :image="article.cover_image"
            :path="article._path"
            :has-video="true"
          >
            <header>
              <small class="text-grey capitalize">{{article.date}}</small>
              <h3 class="h4-style">
                <BaseLink :to="article._path" :isLink="false">
                  {{ article.title }}
                </BaseLink>
              </h3>
            </header>
            <p class="mt-2 text-sm">
              <BaseLink :to="article._path" :title="`Leggi «${article.title}»`">
                Vedi il video
              </BaseLink>
            </p>
          </BaseCard>
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
