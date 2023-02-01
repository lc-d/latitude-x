<template>
  <div>
    <div
      :style="{ backgroundImage: `url('/img/default/hero-destinazioni.png')` }"
      class="hero"
    ></div>
    <section class="top-section wrapper lg:flex">
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
        </div>
      </header>
      <div class="lg:w-2/3">
        <ul class="grid-2">
          <li v-for="(article, index) in articles" :key="index">
            <BaseCard
              :image="article.cover_image"
              :path="article._path"
              :horizontal="true"
              :border="true"
            >
            <header>
              <h3 class="h4-style mt-1">
                <BaseLink :to="article._path" :isLink="false">
                  {{ article.title }}
                </BaseLink>
              </h3>
            </header>
              <ul class="space-y-3 mt-4 text-sm capitalize">
                <li>
                  <BaseIcon :icon="article.activity" class="text-primary mr-1" />
                  {{ article.activity }}
                </li>
                <li>
                  <BaseIcon :icon="article.season" class="text-primary mr-1" />
                  {{ article.season }}
                </li>
                <li>
                  <BaseIcon :icon="'heart'" class="text-primary mr-1" />
                  {{ article.difficulty }}
                </li>
              </ul>
              <p class="mt-2 text-sm">
                <BaseLink
                  :to="article._path"
                  :title="`Leggi «${article.title}»`"
                >
                  Vai qui
                </BaseLink>
              </p>
            </BaseCard>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
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
