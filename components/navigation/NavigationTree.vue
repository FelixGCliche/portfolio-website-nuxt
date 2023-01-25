<template>
  <nav class="navigation">
    <ContentNavigation>
      <NuxtLink
        class="navigation-item"
        v-for="link of navigationTree"
        :key="link._path"
        :to="localePath(link._path)"
      >
        {{ link.title }}
      </NuxtLink>
    </ContentNavigation>
  </nav>
</template>
<script lang="ts" setup>
const { locale } = useI18n()
const localePath = useLocalePath()
const { data: navigationTree } = await useAsyncData('navigationTree', () => {
  return fetchContentNavigation(queryContent().locale(locale.value))
})

watch(locale, () => {
  refreshNuxtData('navigationTree')
})
</script>

<style lang="scss" scoped>
@use 'sass:map';

@each $size in map.keys(layout.$breakpoints) {
  @include layout.media-query($size) {
    .navigation {
      display: flex;
      gap: 1.5rem;
      justify-content: flex-end;
      align-items: center;
      text-transform: uppercase;

      @if $size == 'xsmall' {
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
      } @else {
        flex-direction: row;
      }

      &-item {
        display: block;
        color: theme.$primary;

        @if $size == 'xsmall' {
          @include theme.typography-headline($size);
        } @else {
          @include theme.typography-label($size);
        }

        @include theme.hover(theme.$secondary);
        @include theme.pressed(theme.$tertiary);
      }
    }
  }
}
</style>
