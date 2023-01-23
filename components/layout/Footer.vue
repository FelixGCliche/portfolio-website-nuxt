<template>
  <footer class="footer">
    <div class="footer-locale-switch">
      <ButtonLocaleSwitch />
    </div>
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

  &-locale-switch {
    display: flex;
    gap: 1rem;
    @include layout.responsive-cell-half;
  }

  &-caption {
    @include layout.responsive-cell-full;
    text-align: center;
    color: theme.$on-surface;
  }
}
</style>
