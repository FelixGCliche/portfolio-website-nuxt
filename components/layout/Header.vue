<template>
  <header
    class="header"
    :class="{ 'header-open': toggled, 'header-sticky': isSticky }"
    ref="headerRef"
  >
    <div class="navbar" :class="{ 'navbar-open': toggled }">
      <div class="navbar-button">
        <ButtonIcon label="menu" dir="rtl" @button-click.prevent="toggle">
          <IconMenu icon-name="menu" :size="24" />
        </ButtonIcon>
      </div>
      <NavigationTree
        class="navbar-menu"
        :class="{ 'navbar-menu-open': toggled }"
        @click.prevent="toggleOff"
      />
    </div>
  </header>
</template>

<script lang="ts" setup>
const { toggled, toggle, toggleOff } = useToggle()
const { isSticky, onStick } = useSticky()
const headerRef = ref<HTMLElement | null>(null)

onMounted(() => {
  onStick(headerRef?.value!)
})
</script>

<style lang="scss" scoped>
@use 'sass:map';

@function bg-gradient($color) {
  @return linear-gradient(
    180deg,
    rgba($color, 1) 0%,
    rgba($color, 1) 20%,
    rgba($color, 0.66) 75%,
    transparent 100%
  );
}

.header {
  position: sticky;
  top: -1px;
  z-index: 24;

  &-open {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(1rem);
    background-color: rgba(theme.$background, 0.5);
    transition: backdrop-filter 0.66s cubic-bezier(0.6, 0, 0.07, 1);
  }
}

.navbar {
  z-index: 24;
  @include layout.layout-grid {
    gap: 0;
  }
  grid-template-rows: 4rem;

  &-open {
    grid-template-rows: 4rem 1fr;
    height: 100%;
  }

  &-button {
    display: flex;
    justify-content: flex-end;
    @include layout.responsive-cell-full;
  }

  &-menu {
    transform: translateX(100%);
    grid-column: -3 / span 2;
    width: 0;
    height: 0;
    opacity: 0;

    &-open {
      display: flex;
      width: 100%;
      height: 100%;
      opacity: 1;
      transform: translateX(0%);
      transition: transform 1s cubic-bezier(0.6, 0, 0, 1);
    }
  }
}

@include layout.media-query-min('xsmall') {
  .header-sticky {
    &:before {
      display: block;
      position: absolute;
      content: '';
      width: 100%;
      height: 4rem;
      background: theme.$background;
    }
    &:after {
      display: block;
      position: absolute;
      content: '';
      width: 100%;
      height: 2rem;
      background: bg-gradient(theme.$background);
    }
  }
  .navbar {
    &-button {
      display: none;
    }
    &-menu {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      @include layout.responsive-cell-full;
      width: 100%;
      height: 100%;
      opacity: 1;
      transform: translateX(0%);
    }
  }
}

.fade {
  &-enter-active,
  &-leave-active {
    transition: opacity 300ms ease-out;
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
  }
}
</style>
