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
      <NuxtImg
        class="img-responsive"
        src="/img/profile.webp"
        alt="profile picture"
        quality="80"
        fit="cover"
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
  @include layout.layout-grid($margins: true) {
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }
  align-self: center;
  justify-self: center;

  &-section {
    display: flex;
    flex-flow: column nowrap;
    gap: 1.5rem;

    grid-row: 2;
    z-index: 3;
  }

  &-profile {
    align-self: center;
    justify-self: end;
    grid-row: 1 / span 2;
    z-index: 2;
    width: auto;
    height: 100%;
  }

  &-logo {
    grid-row: 1;
    z-index: 1;

    // background-repeat: no-repeat;
    // background-size: contain;
    // background-position: center;
    // background-attachment: fixed;
    // background-image: url('@/assets/img/bg_image.webp');

    // mask: url('@/assets/img/logo.svg');
    // mask-repeat: no-repeat;
    // mask-size: 100% 100%;
  }
}
@each $size in map.keys(layout.$breakpoints) {
  @include layout.media-query($size) {
    $content-span: math.max(
      3,
      math.round(map.get(layout.$default-columns, $size) * 0.67)
    );
    $profile-span: math.max(
      3,
      math.round(map.get(layout.$default-columns, $size) * 0.6)
    );

    .about {
      &-section,
      &-logo {
        @include layout.layout-grid-cell($span: $content-span) {
          grid-column-start: 1;
        }
      }

      &-profile {
        @include layout.layout-grid-cell-end($span: $profile-span) {
          grid-column-end: -1;
        }
      }
    }
  }
}
</style>
