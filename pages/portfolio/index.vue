<template>
  <div class="portfolio">
    <ContentList
      path="portfolio"
      :locale="locale"
      :query="{ sort: { year: -1 } }"
      v-slot="{ list }"
    >
      <div
        class="portfolio-project"
        v-for="project in list"
        :key="project._path"
      >
        <div class="portfolio-project-content">
          <h1 class="headline">{{ project.title }}</h1>
          <h3 class="title">{{ project.year }}</h3>
          <p class="body">{{ project.description }}</p>
        </div>
        <div class="portfolio-project-img"></div>
      </div>
    </ContentList>
  </div>
</template>

<script lang="ts" setup>
const { locale } = useI18n()
</script>

<style lang="scss" scoped>
.portfolio {
  @include layout.layout-grid {
    grid-row-gap: 6rem;
  }

  &-project {
    @include layout.responsive-cell-full;
    @include layout.layout-grid-inner;

    &-content {
      @include layout.responsive-cell-half-mobile;
      align-self: center;
    }

    &-img {
      @include layout.responsive-cell-half-mobile;
      background-color: theme.$surface;
      min-height: 400px;
      @include theme.bevel-clip-path(2rem);

      @include layout.media-query('xsmall') {
        grid-row: 1;
      }
    }
  }
}
</style>
