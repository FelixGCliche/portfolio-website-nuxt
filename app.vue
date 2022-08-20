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
useHead({
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  htmlAttrs: {
    lang: 'fr'
  }
})
setLocale('fr')
</script>

<style lang="scss" scoped>
.page-grid {
  display: grid;
}
</style>
