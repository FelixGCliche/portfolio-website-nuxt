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
          <Http2ServerResponse class="headline">
            {{ project.title }}
          </Http2ServerResponse>
          <h1 class="portfolio-project-content-description">
            {{ project.description }}
          </h1>
          <h3 class="title">{{ $t('portfolio.projectButton') }}</h3>
        </div>
        <div class="portfolio-project-img"></div>
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

.portfolio {
  @include layout.layout-grid($margins: true) {
    margin: 25vh 0;
    grid-row-gap: 50vh;
  }

  &-project {
    @include layout.layout-grid-cell-full($inner-grid: true);

    &-content {
      @include layout.layout-grid-cell($span: 7);
      @include layout.layout-flex;
      align-self: center;
      margin: 2rem 0;
      width: 100%;

      & > .headline {
        color: theme.$primary;
        @include theme.typography-baseline;
      }

      & > .title {
        color: theme.$secondary;
      }

      &-description {
        color: theme.$on-background;

        @each $size in map.keys(layout.$breakpoints) {
          @include layout.media-query($size) {
            @include theme.typography-display($size);

            @if $size == 'xsmall' {
              @include theme.typography-headline($size);
            }
          }
        }
      }
    }

    &-button {
      width: fit-content;
    }

    &-img {
      @include layout.layout-grid-cell($span: 5);
      min-height: 400px;
      @include theme.bevel(theme.$surface, 2rem);

      @include layout.media-query('xsmall') {
        grid-row: 1;
      }
    }
  }
}
</style>
