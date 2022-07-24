<template>
  <nav class="navlinks">
    <NuxtLink
      v-for="link in links.data"
      :key="link.id"
      class="navlink"
      :to="link.attributes.url"
      @click.prevent="scrollToTop"
    >
      {{ link.attributes.label }}
    </NuxtLink>
  </nav>
</template>
<script lang="ts" setup>
import type { NavigationLink } from 'types/Strapi'

const { fetch } = useStrapi()
const links = ref()
try {
  links.value = await fetch<NavigationLink>('navigation-links')
} catch (error) {
  console.log(error.message)
}

const scrollToTop = () => window.scrollTo(0, 0)
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
