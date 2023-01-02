<template>
  <div class="page-grid">
    <LayoutHeader />
    <NuxtPage />
  </div>
</template>

<style lang="scss" scoped>
@use 'sass:map';

.page-grid {
  display: grid;
  grid-template-rows: min-content 1fr;
  height: 100%;
}
</style>
