<template>
  <div class="page-contact">
    <div class="section section-contact">
      <ContentDoc path="/contact/contact" />
    </div>
    <div class="section section-form">
      <ContentDoc path="/contact/email-form" />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.page-contact {
  @include layout.layout-grid;
  grid-template-rows: repeat(4, auto);

  @include layout.media-query-min('small') {
    grid-template-rows: repeat(3, auto);
  }
}

.section {
  @include layout.responsive-cell-full;
  place-self: center;

  @include layout.media-query-min('small') {
    @include layout.responsive-cell-half;
  }
  &-contact {
    grid-row: 2;
  }

  &-form {
    border: 1px solid red;
    grid-row: 3;
    @include layout.media-query-min('small') {
      grid-row: 2;
      @include layout.responsive-cell-half;
    }
  }
}
</style>
