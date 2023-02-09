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
    <nav class="m-auto">
      <ul class="text-center space-x-4 space-y-2 text-base text-false-white m-auto my-8">
        <li class="inline-block">
          <BaseLink :to="'/viaggi'" :isLink="false" class="drop-shadow-text hover:underline underline-offset-2" title="Vedi tutti i viaggi di Latitude X">
            Diario dei viaggi
          </BaseLink>
        </li>
        <li class="inline-block">
          <BaseLink :to="'/destinazioni'" :isLink="false" class="drop-shadow-text hover:underline underline-offset-2" title="Vedi tutte le destinazioni di Latitude X">
            Destinazioni
          </BaseLink>
        </li>
        <li class="inline-block">
          <BaseLink :to="'/formazione'" :isLink="false" class="drop-shadow-text hover:underline underline-offset-2" title="Vedi l'offeta formativa di Latitude X">
            Formazione
          </BaseLink>
        </li>
        <li class="inline-block">
          <BaseLink :to="'/chi-siamo'" :isLink="false" class="drop-shadow-text hover:underline underline-offset-2" title="Vedi Chi siamo">
            Chi siamo
          </BaseLink>
        </li>
        <li class="inline-block">
          <BaseLink :to="'/giulia-gabani'" :isLink="false" class="drop-shadow-text hover:underline underline-offset-2" title="Vedi chi è Giulia Gabani">
            Giulia Gabani
          </BaseLink>
        </li>
        <li class="inline-block">
          <BaseLink :to="'/francesco-sauro'" :isLink="false" class="drop-shadow-text hover:underline underline-offset-2" title="Vedi chi è Francesco Sauro">
            Francesco Sauro
          </BaseLink>
        </li>
        <li class="inline-block">
          <BaseLink :to="'/privacy-cookie'" :isLink="false" class="drop-shadow-text hover:underline underline-offset-2" title="Vedi l'informativa sulla privacy">
            Informativa privacy e cookie
          </BaseLink>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<style scoped lang="scss">
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
