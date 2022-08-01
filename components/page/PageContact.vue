<template>
  <div class="page-contact">
    <h1 class="headline">Contactez-moi!</h1>
    <div class="section">
      <SectionContact />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@use 'sass:map';
.page-contact {
  @include layout.layout-grid;
  padding: 8rem 0;
  height: 100vh;
  grid-template-rows: min-content 1fr;
}
.headline {
  @include layout.responsive-cell-full;
  color: theme.$primary;
  overflow: hidden;
}
.headline:after {
  content: '';
  display: inline-block;
  vertical-align: baseline;
  width: 100%;
  margin-right: -100%;
  margin-left: 1rem;
  border-top: 4px solid;
}

@each $size in map.keys(layout.$breakpoints) {
  @include layout.media-query($size) {
    $columns: map.get(layout.$columns, $size);

    .section {
      @if $size == 'xsmall' {
        @include layout.responsive-cell($columns);
      } @else {
        @include layout.responsive-cell(calc(($columns / 2) - 1));
      }
    }
  }
}
</style>
