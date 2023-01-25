<template>
  <main class="project">
    <article class="project-section">
      <ContentRenderer
        class="project-section"
        :value="project!"
      />
      <ul class="project-tags">
        <li
          class="caption"
          v-for="tag in project?.tags"
        >
          {{ tag }}
        </li>
      </ul>
    </article>
    <div class="project-img"></div>
    <div class="project-navigation">
      <ButtonIcon
        :class="[
          { hidden: !isProjectValid(prev) },
          'project-navigation-button'
        ]"
        :url="prev?._path"
      >
        <IconBack
          icon-name="previous"
          :size="24"
        />
      </ButtonIcon>
      <p class="title">{{ project?.title }}</p>
      <ButtonIcon
        :class="[
          { hidden: !isProjectValid(next) },
          'project-navigation-button'
        ]"
        :url="next?.path"
      >
        <IconForward
          icon-name="next"
          :size="24"
        />
      </ButtonIcon>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ParsedContent } from '@nuxt/content/dist/runtime/types'

const { locale } = useI18n()
const route = useRoute()

const { data: project } = await useAsyncData('project', () =>
  queryContent(`/portfolio/${route.params.id}`).locale(locale.value).findOne()
)

const [prev, next] = await queryContent('/portfolio')
  .only(['_path'])
  .sort({ year: -1 })
  .findSurround(`/portfolio/${route.params.id}`)

const isProjectValid = (
  project: Pick<ParsedContent, string> | any
): boolean => {
  return project && project._path
}
</script>

<style lang="scss" scoped>
.project {
  @include layout.layout-grid {
    grid-template-rows: min-content 1fr min-content;

    @include layout.media-query-min('xsmall') {
      grid-template-rows: 1fr auto;
    }
  }

  &-section {
    @include layout.responsive-cell-half-mobile;
    align-self: center;
    display: flex;
    flex-flow: column nowrap;
    gap: 1.5rem;

    &:deep(h1) {
      color: theme.$primary;
    }
    &:deep(h3) {
      color: theme.$secondary;
    }
  }

  &-tags {
    display: flex;
    flex-flow: column nowrap;
    gap: 0.5rem;
  }

  &-img {
    @include layout.responsive-cell-full-mobile;
    background-color: theme.$surface;

    @include layout.media-query-min('xsmall') {
      @include layout.responsive-cell-half;
      margin: 6rem 0;
    }
  }

  &-navigation {
    display: flex;
    align-items: center;
    justify-content: center;
    @include layout.responsive-cell-full;
  }
}

.hidden {
  opacity: 0;
}
</style>
