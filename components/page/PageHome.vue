<template>
  <main class="home-main">
    <div class="section">
      <SectionAbout />
    </div>
    <div class="profile">
      <img
        class="img-responsive"
        src="~img/profile.webp"
        alt="profile picture"
      />
    </div>
    <div class="logo-container">
      <img class="img-responsive" src="~img/portfolio_logo.svg" alt="logo" />
    </div>
    <img class="home-bg" src="~img/bg_image.webp" alt="home background" />
  </main>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@use 'sass:map';

@function get-overlap-start($size) {
  $base: calc(map.get(layout.$columns, $size) + 1);
  @return calc($base * -1);
}

@function get-profile-overlap($size) {
  $base: calc(map.get(layout.$columns, $size) / 2);
  @return calc($base + 1);
}
.home-main {
  @include layout.layout-grid;
  grid-template-rows: 1fr auto auto 1fr;
  height: 100%;
}
.section {
  @include layout.responsive-cell-base {
    grid-row: 3;
    z-index: 3;
  }
}
.profile {
  @include layout.responsive-cell-base {
    grid-row-start: 2;
    grid-row-end: span 3;
    align-self: start;
    z-index: 2;
  }
}
.logo-container {
  grid-row: 2;
  z-index: 1;
  width: 100%;
  height: auto;
  align-self: end;
}
.home-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

@each $size in map.keys(layout.$breakpoints) {
  @include layout.media-query($size) {
    $columns: map.get(layout.$columns, $size);

    .section {
      grid-column-start: get-overlap-start($size);
      @if $size == 'xsmall' {
        grid-column-end: span $columns;
      } @else if $size == 'large' {
        grid-column-end: span calc($columns / 2);
      } @else {
        grid-column-end: span calc(($columns / 2) + 1);
      }
    }
    .logo-container {
      grid-column-start: get-overlap-start($size);
      @if $size == 'xsmall' {
        grid-column-end: span calc($columns / 2);
      } @else if $size == 'large' {
        grid-column-end: span calc($columns / 2) + 2;
      } @else {
        grid-column-end: span calc(($columns / 2) + 1);
      }
    }
    .profile {
      grid-column-start: span get-profile-overlap($size);
      grid-column-end: -1;
    }

    .home-bg {
      @if $size != 'xsmall' {
        mask-image: linear-gradient(
          180deg,
          rgba(0, 0, 0, 1) 0%,
          rgba(0, 0, 0, 0) 66%
        );
      } @else {
        mask-image: linear-gradient(
          180deg,
          rgba(0, 0, 0, 1) 0%,
          rgba(0, 0, 0, 0) 95%
        );
      }
    }
  }
}
</style>
