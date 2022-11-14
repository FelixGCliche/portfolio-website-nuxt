<template>
  <Title>Félix Gagné Cliche</Title>

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts">
declare global {
  interface Window {
    onloadCallback: () => void
    grecaptcha: any
  }
}
</script>

<script lang="ts" setup>
import emailjs from 'emailjs-com'

useHead({
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  htmlAttrs: {
    lang: 'fr'
  }
})

setLocale('fr')

emailjs.init(useRuntimeConfig().emailJSUserID)
</script>

<style lang="scss" scoped>
.page-grid {
  display: grid;
}
</style>
