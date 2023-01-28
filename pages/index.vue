<template>
  <div
    class="about"
    :style="maskStyles"
  >
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
const maskPosition = ref('')
const maskSize = ref('')

const maskStyles = computed(() =>
  reactive({
    '--mask-position': maskPosition.value,
    '--mask-size': maskSize.value
  })
)
onMounted(() => {
  getMaskStyles()
  window.addEventListener('resize', getMaskStyles)
})

function getMaskStyles() {
  const logoRect = document
    .querySelector('.about-logo')
    ?.getBoundingClientRect()
  maskPosition.value = `${logoRect?.left}px ${logoRect?.top}px`
  maskSize.value = `${logoRect?.width}px`
}
</script>

<style lang="scss" scoped>
@use 'sass:map';
@function get-overlap-start($size) {
  $base: calc(map.get(layout.$default-columns, $size) + 1);
  @return calc($base * -1);
}

@function get-profile-overlap($size) {
  $base: calc(map.get(layout.$default-columns, $size) / 2);
  @return calc($base + 1);
}
@each $size in map.keys(layout.$breakpoints) {
  @include layout.media-query($size) {
    $columns: map.get(layout.$default-columns, $size);

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

        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        background-image: url('@/assets/img/bg_image.webp');

        mask: url('@/assets/img/logo.svg');
        mask-repeat: no-repeat;
        mask-position: var(--mask-position);
        mask-size: var(--mask-size);
      }

      &-section {
        display: flex;
        flex-flow: column nowrap;
        gap: 1.5rem;

        align-self: center;
        grid-row: 3;
        z-index: 3;
        grid-column-start: get-overlap-start($size);
        grid-column-end: span $columns;
        @if $size == 'large' {
          grid-column-end: span calc($columns / 2) + 2;
        } @else {
          grid-column-end: span calc(($columns / 2) + 1);
        }
      }

      &-profile {
        align-self: center;
        grid-row-start: 2;
        grid-row-end: span 2;
        z-index: 2;
        grid-column-start: span get-profile-overlap($size);
        grid-column-end: -1;
      }

      &-logo {
        grid-row: 2;
        z-index: 1;
        width: 100%;
        align-self: start;
        grid-column-start: get-overlap-start($size);

        @if $size == 'xsmall' {
          @include layout.layout-grid-cell-full;
        } @else if $size == 'large' {
          grid-column-start: get-overlap-start($size);
          grid-column-end: span calc($columns / 2) + 2;
        } @else {
          grid-column-start: get-overlap-start($size);
          grid-column-end: span calc(($columns / 2) + 1);
        }
      }
    }
  }
}
</style>
