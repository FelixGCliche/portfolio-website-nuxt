<template>
  <main class="project">
    <article class="project-section">
      <ContentRenderer :value="project!" />
      <ul class="project-section-tags">
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
        :url="localePath(prev?._path)"
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
        :url="localePath(next?._path)"
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
const localePath = useLocalePath()
const { id } = useRoute().params

const { data: project } = await useAsyncData('project', () =>
  queryContent(`/portfolio/${id}`).locale(locale.value).findOne()
)

const [prev, next] = await queryContent('/portfolio')
  .only(['_path'])
  .sort({ year: -1 })
  .findSurround(`/portfolio/${id}`)

const isProjectValid = (
  project: Pick<ParsedContent, string> | any
): boolean => {
  return project && project._path
}
</script>

<style lang="scss" scoped>
@use 'sass:map';
.project {
  @include layout.layout-grid {
    grid-template-rows: 1fr min-content;

    @each $size in map.keys(layout.$default-columns) {
      @include layout.media-query($size) {
        margin: calc(map.get(layout.$default-gutter, $size)) 0;

        @if $size == 'xsmall' {
          grid-template-rows: auto auto min-content;
        }
      }
    }
  }
  &-section {
    @include layout.layout-grid-cell-half;
    @include layout.layout-flex;
    align-self: center;

    @include layout.media-query('xsmall') {
      order: 2;
    }
    &-tags {
      @include layout.layout-flex(-1rem);
      color: theme.$tertiary;
    }
  }
  &-img {
    @include layout.layout-grid-cell-half;
    background-color: theme.$surface;
    margin: 6rem 0;

    @include layout.media-query('xsmall') {
      order: 1;
      margin: 0;
    }
  }
  &-navigation {
    @include layout.layout-grid-cell-full;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 12rem;

    @include layout.media-query('xsmall') {
      margin: 0;
      order: 3;
    }
  }
}
.hidden {
  opacity: 0;
}
</style>
