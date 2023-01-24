<template>
  <section class="section-about">
    <slot />
    <ButtonPrimary
      class="section-about-button-contact label"
      url="/contact"
    >
      <slot name="contact" />
    </ButtonPrimary>
  </section>
</template>

<style lang="scss" scoped>
@use 'sass:map';
.section-about {
  display: grid;
  gap: 1.5rem;
  margin: 3rem 0;

  &:deep(h2) {
    color: theme.$primary;
    @include theme.typography-baseline;
  }

  &:deep(h3) {
    color: theme.$secondary;
  }

  &-button-contact {
    width: fit-content;
    &:deep(p) {
      @each $size in map.keys(layout.$breakpoints) {
        @include layout.media-query($size) {
          @include theme.typography-label($size);
        }
      }
    }
  }
}
</style>
