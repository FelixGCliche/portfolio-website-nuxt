<template>
  <footer class="footer">
    <div class="footer-content">
      <ButtonLocaleSwitch />
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
  @include layout.layout-grid;
  grid-template-rows: repeat(2, minmax(0, min-content));
  align-self: center;
  z-index: 23;

  &-content {
    @include layout.layout-grid-cell-full;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &-caption {
    @include layout.layout-grid-cell-full;
    text-align: center;
    color: theme.$on-surface;
  }
}
</style>
