<template>
  <p>hello world</p>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
@use 'sass:map';

p {
  @each $size in map.keys(layout.$columns) {
    @include layout.media-query_($size) {
      @include theme.typography-body($size);
    }
  }
}
</style>