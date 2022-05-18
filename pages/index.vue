<template>
  <div class="grid">
    <div class="section">
      <SectionAbout />
    </div>
    <div class="profile">
      <img class="img-responsive" src="assets\img\profile.png" alt="" />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@use 'sass:map';

@function getOverlapStart($size) {
  $base: calc(map.get(layout.$columns, $size) + 1);
  @return calc($base * -1);
}

@function getProfileOverlap($size) {
  $base: calc(map.get(layout.$columns, $size) / 2);
  @return calc($base + 1);
}
.grid {
  @include layout.layout-grid;
  height: 100%;
}
.section {
  @include layout.responsive-cell-base {
    grid-row: 2;
    z-index: 2;
  }
}
.profile {
  @include layout.responsive-cell-base {
    grid-row-start: 1;
    grid-row-end: span 3;
    z-index: 1;
  }
}

@each $size in map.keys(layout.$breakpoints) {
  @include layout.media-query($size) {
    $columns: map.get(layout.$columns, $size);
    .section {
      grid-column-start: getOverlapStart($size);
      @if $size == 'xsmall' {
        grid-column-end: span $columns;
      } @else if $size == 'large' {
        grid-column-end: span calc($columns / 2);
      } @else {
        grid-column-end: span calc(($columns / 2) + 1);
      }
    }
    .profile {
      grid-column-start: span getProfileOverlap($size);
      grid-column-end: -1;
    }
  }
}
</style>
