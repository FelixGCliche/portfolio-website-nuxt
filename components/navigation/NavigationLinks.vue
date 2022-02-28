<template>
  <nav class="navlinks">
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

.navlinks {
  display: flex;
  flex-flow: row nowrap;
  gap: 24px;

  @include layout.media-query("small") {
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    gap: 32px;
  }
}
.navlink {
  @each $size in map.keys(layout.$breakpoints) {
<<<<<<< HEAD
    @include layout.media-query($size) {
      @if $size != "small" {
=======
    @include layout.media-query_($size) {
      @if not $size == 'small' {
>>>>>>> aa606428c7fbb82e3f5b2ae93bd771ac6311b302
        @include theme.typography-label($size);
      } @else {
        @include theme.typography-headline($size);
      }
    }
  }
  color: theme.$primary;

  &:hover,
  &:active {
    @include theme.pressed(theme.$secondary);
  }
}
</style>