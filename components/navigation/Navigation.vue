<template>
  <nav class="navbar-container">
    <div class="navbar-header">
      <NavigationLinks class="navbar-links" />

      <ButtonIcon
        class="navbar-button"
        label="menu"
        dir="rtl"
        @button-click.prevent="toggleOn"
      >
        <IconMenu :size="24" />
      </ButtonIcon>
    </div>
    <Transition name="slide-in">
      <div
        v-if="toggled"
        class="navbar-content"
        @button-click.prevent="toggleOff"
      >
        <div class="navbar-header">
          <ButtonIcon dir="rtl" label="menu" @button-click.prevent="toggleOff">
            <IconClear :size="24" />
          </ButtonIcon>
        </div>
        <NavigationLinks />
      </div>
    </Transition>
  </nav>
</template>

<script lang="ts" setup>
const { toggled, toggleOn, toggleOff } = useToggle()
</script>

<style lang="scss" scoped>
@use 'sass:map';
.navbar-container {
  position: sticky;
  top: 0;
}
.navbar-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;

  @include layout.media-query('large') {
    padding: 1rem 9.75rem;
  }
  @include layout.media-query('medium') {
    padding: 1rem 6rem;
  }
  @include layout.media-query('small') {
    padding: 1rem 4rem;
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
