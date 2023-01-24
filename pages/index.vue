<template>
  <div
    class="page-home"
    :style="maskStyles"
  >
    <ContentDoc
      path="/"
      :locale="locale"
      v-slot="{ doc: about }"
    >
      <ContentRenderer
        class="section"
        :value="about"
      />
    </ContentDoc>
    <div class="profile">
      <img
        class="img-responsive"
        src="~img/profile.webp"
        alt="profile picture"
      />
    </div>
    <div class="logo-container" />
  </div>
</template>

<script lang="ts" setup>
const { locale } = useI18n()
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
    .querySelector('.logo-container')
    ?.getBoundingClientRect()
  const profileRect = document
    .querySelector('.profile')
    ?.getBoundingClientRect()
  maskPosition.value = `${logoRect?.x}px ${profileRect?.y}px`
  maskSize.value = `${logoRect?.width}px`
}
</script>

<style lang="scss" scoped>
@use 'sass:map';
@function get-overlap-start($size) {
  $base: calc(map.get(layout.$columns, $size) + 1);
  @return calc($base * -1);
}

@function get-profile-overlap($size) {
  $base: calc(map.get(layout.$columns, $size) / 2);
  @return calc($base + 1);
}
.page-home {
  @include layout.layout-grid;
  grid-template-rows: repeat(4, auto);

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
}

@each $size in map.keys(layout.$breakpoints) {
  @include layout.media-query($size) {
    $columns: map.get(layout.$columns, $size);

    .section {
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
    .logo-container {
      grid-row: 2;
      z-index: 1;
      width: 100%;
      height: auto;
      align-self: end;
      grid-column-start: get-overlap-start($size);

      @if $size == 'large' {
        grid-column-end: span calc($columns / 2) + 2;
      } @else {
        grid-column-end: span calc(($columns / 2) + 1);
      }
    }
    .profile {
      @include layout.responsive-cell-base {
        grid-row-start: 2;
        grid-row-end: span 2;
        z-index: 2;
        grid-column-start: span get-profile-overlap($size);
        grid-column-end: -1;
      }
    }
  }
}
</style>
