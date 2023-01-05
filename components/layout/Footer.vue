<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-locale-switch">
        <ButtonLocaleSwitch />
      </div>
      <NavigationSitemap class="footer-sitemap" />
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

  &-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @include layout.responsive-cell-full;
  }

  &-caption {
    @include layout.responsive-cell-full;
    text-align: center;
    color: theme.$on-surface;
  }

  &-sitemap {
    display: flex;
  }

  &-locale-switch {
    display: flex;
  }
}
</style>
