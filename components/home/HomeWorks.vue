<template>
  <article class="works">
    <h1 class="display works-header">{{ $t('home.worksHeader') }}</h1>
    <div class="works-list">
      <ContentList
        path="portfolio"
        :locale="locale"
        :query="{ sort: { year: -1 }, limit: 4 }"
        v-slot="{ list }"
      >
        <LazyPortfolioCard
          v-for="project in list"
          :key="project._path"
          :project="project"
        />
      </ContentList>
    </div>
  </article>
</template>

<script lang="ts" setup>
const { locale } = useI18n()
</script>

<style lang="scss" scoped>
@use 'sass:map';
@use 'sass:math';
.works {
  @include layout.layout-grid-cell-full($inner-grid: true);

  &-header {
    @include layout.layout-grid-cell;
    @include theme.typography-baseline;
    color: theme.$primary;
    align-self: start;
    margin-bottom: 4rem;
  }
  &-list {
    @include layout.layout-grid-cell($span: 8, $inner-grid: true) {
      row-gap: 4rem;
    }
    @include layout.media-query('xsmall') {
      @include layout.layout-grid-cell($inner-grid: true);
    }
  }
}
</style>
