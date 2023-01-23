<template>
  <main class="portfolio-page">
    <article class="portfolio-main">
      <ContentDoc
        path="/portfolio"
        :locale="locale"
      />
    </article>
    <ContentList
      path="portfolio/projects"
      v-slot="{ list }"
    >
      <div
        class="bevel bevel-container"
        v-for="project in list"
        :key="project._path"
      >
        <div class="bevel bevel-inner">
          <div class="portfolio-project">
            <p class="headline portolio-project-name">
              {{ project.title }}
            </p>
            <p class="title">
              {{ project.description }}
            </p>
          </div>
        </div>
      </div>
    </ContentList>
  </main>
</template>

<script lang="ts" setup>
const { locale } = useI18n()
</script>

<style lang="scss" scoped>
.portfolio {
  &-page {
    @include layout.layout-grid;
  }
  &-main {
    @include layout.responsive-cell-full;
  }
  &-project {
    @include layout.responsive-cell;
    display: flex;
    flex-flow: column nowrap;
    gap: 1rem;

    &-name {
      display: inline-block;
      color: theme.$primary;
      & > :after {
        content: '';
        display: inline-block;
        vertical-align: baseline;
        width: 100%;
        margin-right: -100%;
        margin-left: 1rem;
        border-top: 4px solid;
      }
    }
  }
}

.bevel {
  &-container {
    @include layout.responsive-cell-half;
    @include theme.bevel(theme.$surface, 16px);
    padding: 4px;
  }
  &-inner {
    @include theme.bevel(theme.$background, 16 - 1px);
    display: flex;
    align-items: center;
    padding: 2rem;
    height: 100%;
  }
}
</style>
