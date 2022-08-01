<template>
  <Title>Félix Gagné Cliche</Title>

  <div class="page-grid" id="home">
    <Navigation />
    <PageHome />
    <div class="page" id="contact">contact</div>
  </div>
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
  height: 100%;
}

.page {
  background-color: red;
  height: 100vh;
}
</style>
