<template>
  <div class="navlinks">
    <NuxtLink class="navlink" to="/">Home</NuxtLink>
    <NuxtLink class="navlink" to="/skills">Skills</NuxtLink>
    <NuxtLink class="navlink" to="/experiences">Experiences</NuxtLink>
    <NuxtLink class="navlink" to="/portfolio">Portfolio</NuxtLink>
    <NuxtLink class="navlink" to="/contact">Contact</NuxtLink>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
@use 'sass:map';
.navlinks {
  display: flex;
  flex-flow: row wrap;
  gap: 24px;

  @include layout.media-query_("small") {
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }
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