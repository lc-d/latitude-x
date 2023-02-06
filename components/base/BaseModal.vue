<template>
  <div
    class="fixed top-0 left-0 h-screen w-full z-20 flex items-center justify-center"
  >
    <div class="bg-false-white p-2 rounded relative z-30">
      <slot />
    </div>
    <span
      class="absolute top-0 left-0 h-screen w-full backdrop-blur-md bg-primary-light-opacity cursor-pointer"
      @click="$emit('close-modal')"
    />
  </div>
</template>
