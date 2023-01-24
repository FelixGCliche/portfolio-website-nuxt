<template>
  <footer class="footer">
    <div class="footer-content">
      <ButtonLocaleSwitch />
    </div>
    <div class="footer-content footer-content-right">
      <ButtonIcon url="https://github.com/FelixGCliche">
        <IconGithub
          icon-name="github"
          :size="24"
        />
      </ButtonIcon>
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
    gap: 1rem;
    @include layout.responsive-cell-half;
    &-right {
      justify-content: flex-end;
    }
  }

  &-caption {
    @include layout.responsive-cell-full;
    text-align: center;
    color: theme.$on-surface;
  }
}
</style>
