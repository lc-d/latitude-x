<template>
  <div>
    <header
      :style="{ backgroundImage: `url('img/default/hero.png')` }"
      class="hero"
    >
      <div class="hero-wrapper flex items-center">
        <div class="wrapper text-center md:text-left">
          <PageLogo class="m-auto md:m-0" />
          <h1 class="h1-style text-false-white drop-shadow-text mt-3">
            Benvenuti a
            <b>Latitude X</b>
            <br />
            <small>Dove trovi l'avventura.</small>
          </h1>
        </div>
      </div>
    </header>

    <section class="top-section wrapper">
      <div class="h-72"></div>
    </section>
  </div>
</template>

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
}
</style>
