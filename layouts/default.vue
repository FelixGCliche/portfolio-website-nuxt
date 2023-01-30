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
  background-color: theme.$background;
  grid-template-rows: min-content minmax(0, 1fr) min-content;
  min-height: 100%;
  height: 100%;
}
</style>
