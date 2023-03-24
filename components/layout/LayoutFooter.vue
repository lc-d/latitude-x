<template>
  <footer
    :style="{ backgroundImage: `url('/img/default/hero-footer.jpg')` }"
    class="hero hero-footer"
  >
    <div class="text-center text-false-white">
      <BaseLink :to="'/'" :title="'Torna alla homepage'" :isLink="false">
       
      <BaseImage
        :src="'/logo/latitudex-logo-icon.svg'"
        width="105"
        height="105"
        alt="'Latitude X logo'"
        class="m-auto pt-24"
      />
      </BaseLink>
      <p class="text-2xl drop-shadow-text mt-2">LATITUDE X</p>
    </div>
    <div class="wrapper">
      <nav class="menu">
        <ContentNavigation v-slot="{ navigation }">
          <ul
            class="text-center space-x-4 space-y-2 text-base text-false-white m-auto mt-6"
          >
            <template v-for="link of navigation" :key="link._path">
              <li v-if="link.title" class="inline-block">
                <BaseLink
                  :to="link._path"
                  :isLink="false"
                  class="is-link-shadow"
                >
                  {{ link.title }}
                  <span v-if="link.children">({{ link.children.length }})</span>
                </BaseLink>
              </li>
            </template>
          </ul>
        </ContentNavigation>
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
