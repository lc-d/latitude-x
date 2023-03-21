<template>
  <div
    v-if="!bannerConsent"
    class="fixed bottom-0 left-0 w-full px-2 py-4 bg-primary-light z-10"
  >
    <div class="wrapper md:flex justify-between items-center">
      <p class="text-sm">
        {{ appConfig.text.cookieBanner }}
        <BaseLink
          to="/privacy-cookie"
          class="text-black underline"
          :is-link="false"
        >
          Leggi l'informativa sulla privacy
        </BaseLink>
      </p>
      <div class="mt-2 md:mt-0 md:w-1/3 text-right">
        <BaseButton @click="cookieButton(false)" class="text-xs mr-2 underline">
          Rifiuto
        </BaseButton>
        <BaseButton
          @click="cookieButton(true)"
          class="btn border-primary-dark text-primary-dark"
        >
          <b>Accetto</b>
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
const appConfig = useAppConfig()
useHead({
  script: [
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-WQXS9NCKB4',
      tagPosition: 'bodyClose',
    },
  ],
})

const expiration = new Date(new Date().setMonth(new Date().getMonth() + 8))
let bannerConsent = useCookie('cookie.banner', { expires: expiration })
let cookieConsent = useCookie('cookie.consent', { expires: expiration })

function cookieButton(consent) {
  bannerConsent.value = true
  if (consent) {
    cookieConsent.value = true
    addCookie()
  } else {
    cookieConsent.value = false
  }
}
function addCookie() {
  window.dataLayer = window.dataLayer || []
  function gtag() {
    dataLayer.push(arguments)
  }
  gtag('js', new Date())
  gtag('config', 'G-WQXS9NCKB4', { anonymize_ip: true })
}
onMounted(() => {
  if (cookieConsent.value === true) addCookie()
})
</script>
