<template>
  <div class="page-contact">
    <h1 class="display">Contactez-moi!</h1>
    <div class="section">
      <SectionContact />
    </div>
    <div class="form">
      <SectionEmailForm />
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
.display {
  @include layout.responsive-cell-full;
  color: theme.$primary;
  overflow: hidden;
}
.display:after {
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
    .display:after {
      content: '';
      display: inline-block;
      vertical-align: baseline;
      width: 100%;
      margin-right: -100%;
      margin-left: 1rem;
      border-top: 4px solid;

      @if $size == 'xsmall' {
        display: none;
      }
    }

    .section {
      @if $size == 'xsmall' {
        @include layout.responsive-cell($columns);
      } @else {
        @include layout.responsive-cell(calc(($columns / 2) - 1));
      }
    }
    .form {
      margin: 4rem 0;
      border: 0.25rem solid theme.$surface;
      padding: 2rem;
      @if $size == 'xsmall' {
        display: none;
      } @else {
        @include layout.responsive-cell(calc(($columns / 2) + 1));
      }
    }
  }
}
</style>
