<template>
  <div class="max-w-lg m-auto mt-4 pb-4">
    <h2 class="h2-style">Contattaci</h2>
    <p v-if="!formazione" class="text-base mt-2">
       {{ appConfig.text.ctaBoxText }}
    </p>
    <p v-else class="text-base mt-2">
      {{ appConfig.text.formazioneCtaBoxText }}
    </p>
    <small class="inline-block text-sm mt-2">
      <i>
        {{ appConfig.text.ctaBoxDisclaimer }}
      </i>
    </small>
    <div class="max-w-sm m-auto flex space-x-4 mt-4 text-sm">
      <BaseLink
        class="text-primary underline underline-offset-2"
        :to="
          'https://wa.me/' +
          appConfig.info.tel +
          '?text=' +
          getTitle
        "
        :isLink="false"
        target="_blank"
      >
        <BaseIcon :icon="'whatsapp'" />
        Manda un Whatsapp
      </BaseLink>
      <BaseLink
        class="text-primary underline underline-offset-2"
        :to="
          'mailto:' +
          appConfig.info.mail +
          '?subject=' +
          getTitle
        "
        :isLink="false"
        target="_blank"
      >
        <BaseIcon :icon="'mail'" />
        Manda una mail
      </BaseLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  formazione: {
    type: Boolean,
    default: false
  }
})
const getTitle = computed( () => {
  return props.title ? 'Ciao,%20mi%20interessa:%20' + props.title + '.' : 'Ciao,%20vorrei%20informazioni%20su:%20...'
})


</script>
