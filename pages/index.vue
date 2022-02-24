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

      <MenuIcon class="t" :size="48" color="#ff0000" />
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
  @include layout.layout-grid;
}

.cell {
  @include layout.responsive-cell {
    &-full {
      @include layout.grid-cell-full;
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