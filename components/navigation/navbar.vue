<template>
  <nav class="navbar">
    <NuxtLink class="navlink" to="/">Home</NuxtLink>
    <NuxtLink class="navlink" to="/skills">Skills</NuxtLink>
    <NuxtLink class="navlink" to="/experiences">Experiences</NuxtLink>
    <NuxtLink class="navlink" to="/portfolio">Portfolio</NuxtLink>
    <NuxtLink class="navlink" to="/contact">Contact</NuxtLink>
  </nav>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
@use 'sass:map';

@mixin navbar {
  @each $size in map.keys(layout.$breakpoints) {
    @include layout.media-query_($size) {
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-end;
      align-items: baseline;
      align-content: center;
      gap: 24px;
      height: 96px;
      padding: 0 156px;

      @if not($size == "large") {
        justify-content: center;
      }
    }
  }
}

.navbar {
  @include navbar;
}
.navlink {
  @each $size in map.keys(layout.$breakpoints) {
    @include layout.media-query_($size) {
      @include theme.typography-label($size);
    }
  }
  color: theme.$primary;

  &:hover,
  &:active {
    @include theme.pressed(theme.$secondary);
  }
}
</style>