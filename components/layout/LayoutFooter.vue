<template>
  <footer
    :style="{ backgroundImage: `url('/img/default/hero-footer.jpg')` }"
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
    <div class="wrapper">
      <nav class="menu">
        <ul
          class="text-center space-x-4 space-y-2 text-base text-false-white m-auto mt-6"
        >
          <li class="inline-block">
            <BaseLink
              :to="'/viaggi'"
              :isLink="false"
              class="drop-shadow-text hover:underline underline-offset-2"
              title="Vedi tutti i viaggi di Latitude X"
            >
              Diario dei viaggi
            </BaseLink>
          </li>
          <li class="inline-block">
            <BaseLink
              :to="'/destinazioni'"
              :isLink="false"
              class="drop-shadow-text hover:underline underline-offset-2"
              title="Vedi tutte le destinazioni di Latitude X"
            >
              Destinazioni
            </BaseLink>
          </li>
          <li class="inline-block">
            <BaseLink
              :to="'/formazione'"
              :isLink="false"
              class="drop-shadow-text hover:underline underline-offset-2"
              title="Vedi l'offeta formativa di Latitude X"
            >
              Formazione
            </BaseLink>
          </li>
          <li class="inline-block">
            <BaseLink
              :to="'/chi-siamo'"
              :isLink="false"
              class="drop-shadow-text hover:underline underline-offset-2"
              title="Vedi Chi siamo"
            >
              Chi siamo
            </BaseLink>
          </li>
          <li class="inline-block">
            <BaseLink
              :to="'/giulia-gabani'"
              :isLink="false"
              class="drop-shadow-text hover:underline underline-offset-2"
              title="Vedi chi è Giulia Gabani"
            >
              Giulia Gabani
            </BaseLink>
          </li>
          <li class="inline-block">
            <BaseLink
              :to="'/francesco-sauro'"
              :isLink="false"
              class="drop-shadow-text hover:underline underline-offset-2"
              title="Vedi chi è Francesco Sauro"
            >
              Francesco Sauro
            </BaseLink>
          </li>
          <li class="inline-block">
            <BaseLink
              :to="'/privacy-cookie'"
              :isLink="false"
              class="drop-shadow-text hover:underline underline-offset-2"
              title="Vedi l'informativa sulla privacy"
            >
              Informativa privacy e cookie
            </BaseLink>
          </li>
        </ul>
      </nav>
      <nav
        v-if="appConfig.info.youtube || appConfig.info.instagram"
        class="inline-flex items-center justify-center space-x-2 text-sm text-false-white pt-3 w-full"
      >
        <p class="drop-shadow-text">Seguici su:</p>
        <ul class="space-x-2">
          <li v-if="appConfig.info.youtube" class="inline-block">
            <BaseLink
              :to="appConfig.info.youtube"
              :isLink="false"
              target="_blank"
              class="drop-shadow-text hover:text-accent"
              title="Vedi il nostro canale Youtube"
            >
              <BaseIcon icon="youtube" />
              <span class="sr-only">Vedi il nostro canale Youtube</span>
            </BaseLink>
          </li>
          <li v-if="appConfig.info.instagram" class="inline-block">
            <BaseLink
              :to="appConfig.info.instagram"
              :isLink="false"
              target="_blank"
              class="drop-shadow-text hover:text-accent"
              title="Vedi la nostra pagina Instagram"
            >
              <BaseIcon icon="instagram" />
              <span class="sr-only">Vedi la nostra pagina Instagram</span>
            </BaseLink>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<style scoped lang="scss">
nav.menu {
  max-width: 30rem;
  margin: 0 auto;
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
