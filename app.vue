<template>
  <Title>Félix Gagné Cliche</Title>

  <span id="home" />
  <main class="page-grid">
    <Navigation />
    <PageHome />
    <span id="contact" />
    <LazyPageContact />
  </main>
</template>

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

emailjs.init('fQsPv5E3xcb_a9l0T')
</script>

<style lang="scss" scoped>
.page-grid {
  display: grid;
}
</style>
