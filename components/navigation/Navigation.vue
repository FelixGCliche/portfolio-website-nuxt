<template>
  <header class="navbar" ref="navbarRef">
    <Transition name="fade">
      <div class="navbar-background" v-if="isSticky" />
    </Transition>
    <div class="navbar-header">
      <NavigationTree class="navbar-links" />

      <div class="navbar-button">
        <ButtonIcon label="menu" dir="rtl" @button-click.prevent="toggleOn">
          <IconMenu icon-name="menu" :size="24" />
        </ButtonIcon>
      </div>
    </div>
    <Transition name="slide-in">
      <div v-if="toggled" class="navbar-content" @click.prevent="toggleOff">
        <div class="navbar-header">
          <LazyButtonIcon
            dir="rtl"
            label="menu"
            @button-click.prevent="toggleOff"
          >
            <IconClear icon-name="clear" :size="24" />
          </LazyButtonIcon>
        </div>
        <LazyNavigationTree />
      </div>
    </Transition>
  </header>
</template>

<script lang="ts" setup>
const { toggled, toggleOn, toggleOff } = useToggle()
const { isSticky, onStick } = useSticky()
const navbarRef = ref<HTMLElement | null>(null)

onMounted(() => {
  const navbar = navbarRef?.value
  onStick(navbar!)
})
</script>

<style lang="scss" scoped>
@use 'sass:map';

.navbar {
  position: sticky;
  top: -1px;
  z-index: 24;
  min-height: 4rem;

  @include layout.media-query('large') {
    @include layout.layout-grid;
  }
  @include layout.media-query('medium') {
    @include layout.layout-grid;
  }

  &-background {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    content: '';
    @include layout.media-query('large') {
      background: linear-gradient(
        180deg,
        theme.background(1) 0%,
        theme.background(0.5) 75%,
        rgba(0, 0, 0, 0) 100%
      );
    }
    @include layout.media-query('medium') {
      background: linear-gradient(
        180deg,
        theme.background(1) 0%,
        theme.background(0.5) 75%,
        rgba(0, 0, 0, 0) 100%
      );
    }
  }

  &-header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    min-height: 4rem;
    width: 100%;

    @include layout.media-query('large') {
      @include layout.responsive-cell-full;
    }
    @include layout.media-query('medium') {
      @include layout.responsive-cell-full;
    }
    @include layout.media-query('small') {
      padding: 0 2rem;
    }
    @include layout.media-query('xsmall') {
      padding: 0 2rem;
    }
  }

  &-content {
    display: grid;
    grid-template-rows: auto 1fr;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: theme.$surface;
    z-index: 24;
  }

  &-button {
    display: none;
  }
}

@include layout.media-query('xsmall') {
  .navbar-button {
    display: flex;
  }
  .navbar-links {
    display: none;
  }
}

.slide-in-enter-active,
.slide-in-leave-active {
  transition: opacity 500ms ease-out;
}
.slide-in-enter-from,
.slide-in-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 500ms ease-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
