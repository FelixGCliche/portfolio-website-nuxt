<template>
  <div class="page-grid">
    <Navigation />
    <NuxtPage />
  </div>
</template>

<style lang="scss" scoped>
.page-grid {
  display: grid;
  grid-template-rows: min-content 1fr;
  height: 100%;
}
</style>
