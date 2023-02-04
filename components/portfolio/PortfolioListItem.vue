<template>
  <NuxtLink
    class="item"
    :to="localePath($props.project._path)"
  >
    <div class="item-content">
      <h2 class="headline">
        {{ $props.project.title }}
      </h2>
      <h1 class="display">
        {{ $props.project.description }}
      </h1>
      <h3 class="title">{{ $t('portfolio.projectButton') }}</h3>
    </div>
    <div class="item-img">
      <NuxtImg
        class="img-responsive"
        :src="`/img/${$props.project._path}-thumbnail.webp`"
        :alt="`project thumbnail ${$props.project.title}`"
        quality="80"
        width="456"
        height="608"
      />
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
import { Project } from '@/types/Project'

const localePath = useLocalePath()
defineProps<{ project: Project }>()
</script>

<style lang="scss" scoped>
@use 'sass:map';

@function get-span($size, $add) {
  @if $size == 'xsmall' {
    @return 4;
  } @else {
    $half: calc(map.get(layout.$default-columns, $size) / 2);
    @return $half + $add;
  }
}

.item {
  @include layout.layout-grid-cell-full($inner-grid: true);

  &-content {
    @each $size in map.keys(layout.$breakpoints) {
      @include layout.media-query($size) {
        @include layout.layout-grid-cell($span: get-span($size, 1));
      }
    }
    @include layout.layout-flex;
    align-self: center;
    margin: 2rem 0;
    width: 100%;

    & > .headline {
      color: theme.$primary;
      @include theme.typography-baseline;
    }

    & > .display {
      color: theme.$on-background;
    }

    & > .title {
      color: theme.$secondary;
    }
  }

  &-button {
    width: fit-content;
  }

  &-img {
    @each $size in map.keys(layout.$breakpoints) {
      @include layout.media-query($size) {
        @include layout.layout-grid-cell($span: get-span($size, -1));
        @if $size == 'xsmall' {
          grid-row: 1;
          aspect-ratio: 4/3;
        }
      }
    }
    aspect-ratio: 3/4;
    @include theme.bevel(transparent, 2rem);
  }
}
</style>
