<template>
  <footer class="footer">
    <span class="caption footer-caption"
      >&copy; Copyright Félix Gagné Cliche 2023</span
    >
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  padding: 2rem 0;
  z-index: 2;
  @include layout.layout-grid;

  &-caption {
    @include layout.responsive-cell-full;
    text-align: center;
    color: theme.$on-surface;
  }
}
</style>
