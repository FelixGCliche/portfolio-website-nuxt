<template>
  <div class="about">
    <section class="about-section">
      <ContentDoc
        path="/"
        :locale="locale"
        :query="{ where: { _partial: false } }"
      />
      <ButtonPrimary
        class="about-section-button"
        url="/contact"
        :label="t('home.contactButton')"
      />
    </section>
    <div class="about-profile">
      <img
        class="img-responsive"
        src="~img/profile.webp"
        alt="profile picture"
      />
    </div>
    <div class="about-logo" />
  </div>
</template>

<script lang="ts" setup>
const { locale, t } = useI18n()
</script>

<style lang="scss" scoped>
@use 'sass:map';
@use 'sass:math';

.about {
  @include layout.layout-grid($margins: true);
  grid-template-rows: 1fr min-content min-content 1fr;
  @include layout.media-query('xsmall') {
    grid-template-rows: repeat(4, auto);
  }

  &:after {
    content: '';
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  &-section {
    display: flex;
    flex-flow: column nowrap;
    gap: 1.5rem;

    align-self: center;
    grid-row: 3;
    z-index: 3;
  }

  &-profile {
    align-self: center;
    grid-row: 2 / span 2;
    z-index: 2;
  }

  &-logo {
    grid-row: 2 / span 2;
    @include layout.media-query('large') {
      grid-row: 2;
    }
    z-index: 1;
    width: 100%;
    height: 100%;
    align-self: start;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-image: url('@/assets/img/bg_image.webp');

    mask: url('@/assets/img/logo.svg');
    mask-repeat: no-repeat;
    mask-size: contain;
  }
}
@each $size in map.keys(layout.$breakpoints) {
  @include layout.media-query($size) {
    $span: math.round(map.get(layout.$default-columns, $size) * 0.66);
    .about {
      &-section,
      &-logo {
        @include layout.layout-grid-cell($span: $span) {
          grid-column-start: 1;
        }
      }

      &-profile {
        @include layout.layout-grid-cell-end($span: $span) {
          grid-column-end: -1;
        }
      }
    }
  }
}
</style>
