<template>
  <div class="portfolio">
    <ContentList
      path="portfolio"
      :locale="locale"
      :query="{ sort: { year: -1 } }"
      v-slot="{ list }"
    >
      <NuxtLink
        class="portfolio-project"
        v-for="project in list"
        :key="project._path"
        :to="localePath(project._path)"
      >
        <div class="portfolio-project-content">
          <h2 class="headline">
            {{ project.title }}
          </h2>
          <h1 class="display">
            {{ project.description }}
          </h1>
          <h3 class="title">{{ $t('portfolio.projectButton') }}</h3>
        </div>
        <div class="portfolio-project-img">
          <NuxtImg
            class="img-responsive"
            :src="`/img/${project!._path}-thumbnail.webp`"
            :alt="`project thumbnail ${project!.title}`"
            quality="80"
            width="456"
            height="608"
          />
        </div>
      </NuxtLink>
    </ContentList>
  </div>
</template>

<script lang="ts" setup>
const { locale, t } = useI18n()
const localePath = useLocalePath()
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

.portfolio {
  @include layout.layout-grid($margins: true) {
    margin: 25vh 0;
    grid-row-gap: 50vh;
  }

  &-project {
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
      @include theme.bevel(theme.$surface, 2rem);
    }
  }
}
</style>
