<template>
  <header class="navbar-container">
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
const { toggled, toggleOn, toggleOff } = useToggle()
</script>

<style lang="scss" scoped>
@use 'sass:map';
.navbar-container {
  position: sticky;
  top: 0;
  z-index: 24;
}
.navbar-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 2rem;

  @include layout.media-query('large') {
    background: linear-gradient(
      180deg,
      theme.background(1) 0%,
      theme.background(0.5) 75%,
      rgba(0, 0, 0, 0) 100%
    );
    padding: 2rem 9.75rem;
  }
  @include layout.media-query('medium') {
    background: linear-gradient(
      180deg,
      theme.background(1) 0%,
      theme.background(0.5) 75%,
      rgba(0, 0, 0, 0) 100%
    );
    padding: 2rem 6rem;
  }
  @include layout.media-query('small') {
    padding: 1rem 4rem;
  }
  @include layout.media-query('xsmall') {
    padding: 1rem 2rem;
  }
}
.navbar-content {
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

.navbar-button {
  display: none;
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
  transform: translateY(100%);
  opacity: 0;
}
</style>
