<template>
  <nav class="navlink">
    <ContentNavigation>
      <NuxtLink
        class="navlink-item"
        v-for="link of navigationTree"
        :key="link._path"
        :to="link._path"
      >
        {{ link.title }}
      </NuxtLink>
    </ContentNavigation>
  </nav>
</template>
<script lang="ts" setup>
const { data: navigationTree } = await useAsyncData('navigationTree', () => {
  return fetchContentNavigation(queryContent().locale(useLocale().value))
})

watch(useLocale(), () => {
  refreshNuxtData('navigationTree')
})
</script>

<style lang="scss" scoped>
@use 'sass:map';

@each $size in map.keys(layout.$breakpoints) {
  @include layout.media-query($size) {
    .navlink {
      display: flex;
      align-items: flex-end;
      text-transform: uppercase;

      @if $size == 'xsmall' {
        flex-direction: column;
        justify-content: center;
      } @else {
        flex-direction: row;
      }

      &-item {
        display: block;
        color: theme.$primary;

        @if $size == 'xsmall' {
          @include theme.typography-headline($size);
          margin-bottom: 2rem;
        } @else {
          @include theme.typography-label($size);
          margin-left: 1.5rem;
        }

        @include theme.hover(theme.$secondary);
        @include theme.pressed(theme.$tertiary);
      }
    }
  }
}
</style>
