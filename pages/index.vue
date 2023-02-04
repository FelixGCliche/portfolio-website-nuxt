<template>
  <main class="home">
    <HomeAbout />
    <HomeWorks />
  </main>
</template>

<script lang="ts" setup>
const { locale } = useI18n()
</script>

<style lang="scss" scoped>
.home {
  @include layout.layout-grid($margins: true) {
    row-gap: 10rem;
  }
}
</style>
