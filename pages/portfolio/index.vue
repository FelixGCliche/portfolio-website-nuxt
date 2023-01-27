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
          <h2 class="headline">{{ project.title }}</h2>
          <h3 class="title">{{ project.year }}</h3>
          <p class="body">{{ project.description }}</p>
          <ButtonPrimary
            class="portfolio-project-button"
            :url="project._path"
            label="Voir plus"
          />
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
@use 'sass:map';
.portfolio {
  margin: 2rem 0;
  @include layout.layout-grid($margins: true) {
    grid-row-gap: 6rem;
  }

  &-project {
    @include layout.layout-grid-cell-full($inner-grid: true);

    &-content {
      @include layout.layout-grid-cell-half;
      @include layout.layout-flex;
      align-self: center;
      width: 100%;

      & > .headline {
        color: theme.$primary;
        @include theme.typography-baseline;
      }
      & > .title {
        color: theme.$secondary;
      }
    }

    &-button {
      width: fit-content;
    }

    &-img {
      @include layout.layout-grid-cell-half;
      min-height: 400px;
      @include theme.bevel(theme.$surface, 2rem);

      @include layout.media-query('xsmall') {
        grid-row: 1;
      }
    }
  }
}
</style>
