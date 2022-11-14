<template>
  <header class="navbar" ref="navbar">
    <div class="navbar-header">
      <NavigationTree class="navbar-links" />

      <ButtonIcon
        class="navbar-button"
        label="menu"
        dir="rtl"
        @button-click.prevent="toggleOn"
      >
        <IconMenu icon-name="menu" :size="24" />
      </ButtonIcon>
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
import { Ref } from 'vue'

const { toggled, toggleOn, toggleOff } = useToggle()
const navbar: Ref<HTMLElement> = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([e]) => {
      console.log(e.intersectionRatio, e.isIntersecting)
    },
    { threshold: [1] }
  )
  observer.observe(navbar.value)
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

  &-background-sticky {
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
  transition: opacity 100ms ease-out, transform 200ms ease-out;
}
.slide-in-enter-from,
.slide-in-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
