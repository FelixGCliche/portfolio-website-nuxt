<template>
  <nav class="navlinks">
    <!-- <NuxtLink
      v-for="link in links.data"
      :key="link.id"
      class="navlink"
      :to="link.attributes.url"
    >
      {{ link.attributes.label }}
    </NuxtLink> -->
  </nav>
</template>
<script lang="ts" setup>
import type { Home } from 'composables/useStrapi'
const { fetch } = useStrapi()

// const home = ref<Home>()

const data = await fetch('home')
// console.table(data.value.data)
</script>
<style lang="scss" scoped>
@use 'sass:map';

.navlinks {
  display: flex;
  flex-flow: row nowrap;
  gap: 24px;

  @include layout.media-query('small') {
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    gap: 32px;
  }
}
.navlink {
  @each $size in map.keys(layout.$breakpoints) {
    @include layout.media-query($size) {
      @if $size != 'small' {
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
    @include theme.pressed(theme.$secondary);
  }
}
</style>
