<template>
  <nav class="navlink">
    <ContentNavigation>
      <div v-for="link of navigation" :key="link._path">
        <NuxtLink class="navlink-item" :to="link._path">{{
          link.title
        }}</NuxtLink>
      </div>
    </ContentNavigation>
  </nav>
</template>
<script lang="ts" setup>
const { data: navigation } = await useAsyncData('navigation', () =>
  queryContent('/').locale(useLocale().value).find()
)
</script>

<style lang="scss" scoped>
@use 'sass:map';

@each $size in map.keys(layout.$breakpoints) {
  @include layout.media-query($size) {
    .navlink {
      display: flex;
      align-items: center;
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

        &:hover {
          @include theme.hover(theme.$secondary);
        }
        &:active {
          @include theme.pressed(theme.$tertiary);
        }
      }
    }
  }
}
</style>
