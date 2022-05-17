<template>
  <div class="grid">
    <div class="cell cell-half">
      <SectionAbout />
    </div>
    <div class="profile"></div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@use 'sass:map';

.grid {
  @include layout.layout-grid;
  height: 100%;
}
.cell {
  @include layout.responsive-cell {
    &-full {
      @include layout.responsive-cell-full;
    }
    &-half {
      @include layout.responsive-cell-half;
    }
  }
}
</style>
