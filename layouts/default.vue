<template>
  <div class="layout">
    <LayoutHeader />
    <NuxtPage />
    <LayoutFooter />
  </div>
</template>

<style lang="scss" scoped>
@use 'sass:map';

.layout {
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  min-height: 100%;

  & > * {
    @include layout.layout-grid;
  }
}
</style>
