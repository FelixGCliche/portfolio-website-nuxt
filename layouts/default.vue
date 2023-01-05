<template>
  <div class="page-grid">
    <LayoutHeader />
    <NuxtPage />
    <LayoutFooter />
  </div>
</template>

<style lang="scss" scoped>
@use 'sass:map';

.page-grid {
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  min-height: 100%;
}
</style>
