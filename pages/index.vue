<template>
  <div class="grid">
    <div class="cell cell-full">
      <h1 class="display">Lorem Ipsum</h1>
    </div>
    <div class="cell">
      <p
        class="body"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat condimentum congue nulla nulla netus amet pulvinar faucibus.</p>
    </div>
    <div class="cell">
      <p
        class="body"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat condimentum congue nulla nulla netus amet pulvinar faucibus.</p>
    </div>
    <div class="cell">
      <p
        class="body"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat condimentum congue nulla nulla netus amet pulvinar faucibus.</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
@use 'sass:map';

h1,
p {
  color: theme.$on-background;
}
.grid {
  @each $size in map.keys(layout.$breakpoints) {
    @include layout.media-query_($size) {
      @include layout.layout-grid($size) {
      }
    }
  }
}

.cell {
  @each $size in map.keys(layout.$breakpoints) {
    @include layout.media-query_($size) {
      @include layout.grid-cell($size) {
        border: 4px solid theme.$secondary;
        padding: 24px;
      }

      &-full {
        $span: map.get(layout.$columns, $size);
        grid-column: span $span;
      }
    }
  }
}

.display {
  @each $size in map.keys(layout.$breakpoints) {
    @include layout.media-query_($size) {
      @include theme.typography-display($size);
    }
  }
}
.body {
  @each $size in map.keys(layout.$breakpoints) {
    @include layout.media-query_($size) {
      @include theme.typography-body($size);
    }
  }
}
</style>