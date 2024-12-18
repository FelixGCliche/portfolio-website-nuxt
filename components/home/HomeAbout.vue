<template>
  <article class="about">
    <section class="about-section">
      <ContentDoc
        path="/"
        :locale="locale"
        :query="{ where: { _partial: false } }"
      />
      <NuxtLink :to="localePath('contact')">
        <ButtonPrimary
          class="about-section-button"
          :label="$t('home.contactButton')"
        />
      </NuxtLink>
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
    <div
      class="about-logo"
      :style="logoImgStyle"
    />
  </article>
</template>

<script lang="ts" setup>
const { locale } = useI18n()
const localePath = useLocalePath()
const img = useImage()

const logoImgStyle = computed(() =>
  reactive({
    '--background-image-url': `url('${img(`img/bg_image.webp`)}')`,
    '--mask-url': `url('${img(`img/logo.svg`)}')`
  })
)
</script>

<style lang="scss" scoped>
@use 'sass:map';
@use 'sass:math';

.about {
  @include layout.layout-grid-cell-full($inner-grid: true) {
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }
  place-self: center;

  &-section {
    display: flex;
    flex-flow: column nowrap;
    gap: 1.5rem;

    grid-row: 2;
    z-index: 3;

    &-button {
      display: block;
      max-height: min-content;
    }
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

    background-image: var(--background-image-url);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;

    mask: var(--mask-url);
    mask-size: cover;
    mask-repeat: no-repeat;
    mask-size: 100% 100%;
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
        display: grid;
        @include layout.layout-grid-cell($span: $content-span) {
          grid-column-start: 1;
        }
      }

      &-profile {
        display: grid;
        @include layout.layout-grid-cell-end($span: $profile-span) {
          grid-column-end: -1;
        }
      }
    }
  }
}
</style>
