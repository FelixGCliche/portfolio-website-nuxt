<template>
  <div class="page-home">
    <div class="section">
      <ContentDoc path="/" :locale="useLocale().value" />
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
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'home'
})
</script>

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
.page-home {
  @include layout.layout-grid;
  grid-template-rows: repeat(4, auto);
}

@each $size in map.keys(layout.$breakpoints) {
  @include layout.media-query($size) {
    $columns: map.get(layout.$columns, $size);

    .section {
      @include layout.responsive-cell-base {
        grid-row: 3;
        z-index: 3;
        grid-column-start: get-overlap-start($size);
      }

      @if $size == 'xsmall' {
        grid-column-end: span $columns;
      } @else if $size == 'large' {
        grid-column-end: span calc($columns / 2) + 2;
      } @else {
        grid-column-end: span calc(($columns / 2) + 1);
      }
    }
    .logo-container {
      grid-row: 2;
      z-index: 1;
      width: 100%;
      height: auto;
      align-self: end;
      grid-column-start: get-overlap-start($size);

      @if $size == 'large' {
        grid-column-end: span calc($columns / 2) + 2;
      } @else {
        grid-column-end: span calc(($columns / 2) + 1);
      }
    }
    .profile {
      @include layout.responsive-cell-base {
        grid-row-start: 2;
        grid-row-end: span 2;
        z-index: 2;
        grid-column-start: span get-profile-overlap($size);
        grid-column-end: -1;
      }
    }
  }
}
</style>
