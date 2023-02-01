<template>
  <footer
    :style="{ backgroundImage: `url('/img/default/hero-footer.png')` }"
    class="hero hero-footer"
  >
    <div class="text-center text-false-white">
      <BaseImage
        :src="'/logo/latitudex-logo-icon.svg'"
        width="105"
        class="m-auto pt-24"
      />
      <p class="text-2xl drop-shadow-text mt-2">LATITUDE X</p>
    </div>
    <nav class="m-auto">
      <ul
        class="text-center space-x-4 space-y-2 text-base text-false-white m-auto my-8"
      >
        <li class="inline-block">Diario dei viaggi</li>
        <li class="inline-block">Destinazioni</li>
        <li class="inline-block">Formazione</li>
        <li class="inline-block">Chi siamo</li>
        <li class="inline-block">Giulia Gabani</li>
        <li class="inline-block">Francesco Sauro</li>
        <li class="inline-block">Informativa privacy e cookie</li>
      </ul>
    </nav>
  </footer>
</template>

<style scoped>
nav {
  max-width: 30rem;
}
.hero-footer {
  height: 400px;
  max-width: 1440px;
  margin: 0 auto;
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
}
</style>
