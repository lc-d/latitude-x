<template>
  <header
    class="bg-primary-light-opacity z-10 absolute w-full backdrop-blur-sm"
    :class="{ open: isOpen, 'backdrop-blur-md': isOpen }"
    @keydown.esc="isOpen = false"
  >
    <div class="wrapper flex justify-between items-center">
      <div class="sm:w-1/3">
        <BaseLink :to="'/'" :title="'Torna alla homepage'" :isLink="false">
          <BaseImage
            height="50"
            width="186"
            :src="'logo/latitudex-logo-default.svg'"
            :alt="'Latitude X logo'"
          />
        </BaseLink>
      </div>
      <BaseButton
        id="menu-button"
        class="block sm:hidden"
        aria-haspopup="true"
        aria-controls="main-menu"
        :aria-expanded="isOpen"
        @click="menuToggle"
      >
        <span v-if="isOpen" class="text-primary-darker">
          <BaseIcon :icon="'close'" :size="'lg'" />
          <span class="sr-only">Chiudi il menu principale</span>
        </span>
        <span v-else class="text-primary-darker">
          <BaseIcon :icon="'menu'" :size="'lg'" />
          <span class="sr-only">Apri il menu principale</span>
        </span>
      </BaseButton>
      <nav id="main-menu" class="hidden sm:block" labelledby="menu-button">
        <ul
          class="flex text-sm"
          :class="{ 'space-x-4': !isOpen, 'space-y-8': isOpen }"
        >
          <li>
            <BaseLink :to="'/viaggi'" :isLink="false">
              DIARIO DEI VIAGGI
            </BaseLink>
          </li>
          <li>
            <BaseLink :to="'/destinazioni'" :isLink="false">
              DESTINAZIONI
            </BaseLink>
          </li>
          <li>
            <BaseLink :to="'/formazione'" :isLink="false">FORMAZIONE</BaseLink>
          </li>
          <li>
            <BaseLink :to="'/chi-siamo'" :isLink="false">CHI SIAMO</BaseLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const isOpen = ref(false)
const menuToggle = () => {
  isOpen.value = !isOpen.value
}
</script>

<style lang="scss" scoped>
header {
  .wrapper {
    height: 70px;
  }
}
a:hover {
  text-decoration: underline;
  text-underline-offset: 2px;
}
.open {
  height: 100vh;
  nav {
    display: block;
    position: absolute;
    position: absolute;
    left: 0;
    top: 100px;
    width: 100%;
  }
  ul {
    display: block;
    li {
      text-align: center;

      a:hover {
        text-decoration: underline;
      }
    }
  }
  button {
    display: block;
  }
}
</style>
