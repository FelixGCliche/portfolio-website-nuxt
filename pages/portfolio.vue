<template>
  <main class="portfolio-page">
    <ContentList
      path="portfolio/projects"
      :locale="locale"
      :query="{ sort: { year: -1 } }"
      v-slot="{ list }"
    >
      <div
        class="bevel bevel-container"
        v-for="project in list"
        :key="project._path"
      >
        <div class="bevel bevel-inner">
          <div class="portfolio-project">
            <h1 class="headline">
              {{ project.title }}
            </h1>
            <p class="title">{{ project.description }}</p>
            <div class="portfolio-project-buttons">
              <ButtonIcon
                v-if="project.url"
                :url="project.url"
              >
                <IconGithub
                  icon-name="github"
                  :size="32"
                />
              </ButtonIcon>
            </div>
          </div>
        </div>
      </div>
    </ContentList>
  </main>
</template>

<script lang="ts" setup>
const { locale } = useI18n()

useHead({ title: 'Portfolio' })
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
    height: 100%;

    &-buttons {
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      height: 100%;
    }
  }
}

.bevel {
  $bevel-size: 1.5rem;
  &-container {
    @include layout.responsive-cell-half-mobile;
    @include theme.bevel(theme.$primary, $bevel-size);
    padding: 4px;
  }
  &-inner {
    @include theme.bevel(theme.$background, calc($bevel-size - 1px));
    padding: 2rem;
    height: 100%;
  }
}
</style>
