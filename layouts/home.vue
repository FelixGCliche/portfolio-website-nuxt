<template>
  <div class="page-grid">
    <Navigation />
    <NuxtPage />
  </div>
</template>

<style lang="scss" scoped>
@use 'sass:map';

@each $size in map.keys(layout.$breakpoints) {
  @include layout.media-query($size) {
    .page-grid {
      display: grid;
      grid-template-rows: min-content 1fr;
      height: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;

      @if $size != 'xsmall' {
        background-image: linear-gradient(
            0deg,
            theme.$background 24%,
            theme.background(0.24)
          ),
          url('@/assets/img/bg_image.webp');
      } @else {
        background-image: linear-gradient(
            0deg,
            theme.background() 10%,
            theme.background(0.24) 95%
          ),
          url('@/assets/img/bg_image.webp');
      }
    }
  }
}
</style>
