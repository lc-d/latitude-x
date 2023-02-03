<template>
  <div>
    <small class="text-xs">Condividi: </small>
    <ul class="inline-flex space-x-2 ml-2">
      <li>
        <BaseLink
          :to="'https://www.facebook.com/sharer/sharer.php?u=' + getUrl"
          target="_blank"
          title="Condividi su FaceBook"
          :isLink="false"
        >
          <BaseIcon
            class="text-primary hover:text-primary-dark"
            :icon="'facebook'"
          />
          <span class="sr-only">FaceBook</span>
        </BaseLink>
      </li>
      <li>
        <BaseLink
          :to="'https://twitter.com/intent/tweet?url=' + getUrl"
          target="_blank"
          title="Condividi su Twitter"
          :isLink="false"
        >
          <BaseIcon
            class="text-primary hover:text-primary-dark"
            :icon="'twitter'"
          />
          <span class="sr-only">Twitter</span>
        </BaseLink>
      </li>
      <li>
        <BaseButton title="Copia negli appunti" @click="clipboard()">
          <BaseIcon
            class="text-primary hover:text-primary-dark"
            :icon="'link'"
          />
          <span class="sr-only">Copia il link negli appunti</span>
          <span
            v-if="isCopied"
            class="text-xs p-1 rounded bg-accent border border-primary ml-4"
          >
            Link copiato negli appunti
          </span>
        </BaseButton>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()
const props = defineProps({
  path: {
    type: String,
    default: '#',
  },
})
const getUrl = computed(() => {
  return appConfig.info.domain + props.path
})
const isCopied = ref(false)
const clipboard = function () {
  navigator.clipboard.writeText(getUrl.value)
  isCopied.value = true
  setTimeout(() => {
    isCopied.value = false
  }, 2000)
}
</script>
