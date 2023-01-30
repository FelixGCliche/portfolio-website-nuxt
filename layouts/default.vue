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
  grid-template-rows: 4rem minmax(0, 1fr) min-content;
  min-height: 99%;
}
</style>
