<template>
  <nav class="navlinks">
    <div v-for="link of navigation" :key="link._path">
      <a class="navlink" :href="getSelector(link.title)">{{
        link.description
      }}</a>
    </div>
  </nav>
</template>
<script lang="ts" setup>
const { data: navigation } = await useAsyncData('navigation', () =>
  queryContent('/navigation').locale(useLocale().value).find()
)

const getSelector = (path: string) => {
  const selector = path.toLowerCase()
  return `#${selector}`
}
</script>

<style lang="scss" scoped>
@use 'sass:map';

.navlinks {
  display: flex;
  flex-flow: row nowrap;
  gap: 24px;
  text-transform: uppercase;

  @include layout.media-query('xsmall') {
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    gap: 32px;
  }
}
.navlink {
  @each $size in map.keys(layout.$breakpoints) {
    @include layout.media-query($size) {
      @if $size != 'xsmall' {
        @include theme.typography-label($size);
      } @else {
        @include theme.typography-headline($size);
      }
    }
  }
  color: theme.$primary;

  &:hover {
    @include theme.hover(theme.$secondary);
  }
  &:active {
    @include theme.pressed(theme.$tertiary);
  }
}
</style>
