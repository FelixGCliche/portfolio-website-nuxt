<template>
  <main class="project">
    <article class="project-section">
      <ContentRenderer :value="project!" />
      <div class="project-section-buttons">
        <ButtonIcon
          :url="`https://github.com/FelixGCliche/${$route.params.id}`"
        >
          <IconGithub
            :icon-name="`https://github.com/FelixGCliche/${$route.params.id}`"
            :size="32"
          />
        </ButtonIcon>
        <ButtonPrimary
          v-if="project?.url"
          :url="project?.url"
          :label="$t('portfolio.projectUrlButton')"
        />
      </div>
    </article>
    <div class="project-img">
      <LazyNuxtImg
        class="img-responsive"
        :src="`/img/${project?._path}-thumbnail.webp`"
        :alt="`project picture ${project?.title}`"
        quality="80"
        width="552"
        height="736"
      />
    </div>
    <div
      class="project-video"
      v-if="project?.video"
    >
      <iframe
        :src="`${project?.video}?hl=${locale}`"
        :title="`${project?.title} Gameplay Showcase`"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      />
    </div>
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

const { data: project } = await useLazyAsyncData('project', () =>
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
  @include layout.layout-grid($margins: true) {
    grid-template-rows: auto min-content;
    max-height: 100%;

    @include layout.media-query('xsmall') {
      grid-template-rows: auto auto min-content min-content;
    }
  }

  &-section {
    @include layout.layout-grid-cell-half;
    @include layout.layout-flex;
    align-self: center;

    @include layout.media-query('xsmall') {
      order: 2;
    }

    &-buttons {
      @include layout.layout-flex($gap: -0.5rem, $direction: row);
    }
  }

  &-img {
    @include layout.layout-grid-cell-half;
    align-self: center;

    @include layout.media-query('xsmall') {
      order: 1;
    }
  }

  &-video {
    @include layout.layout-grid-cell-full {
      margin: 4rem 0;
    }
    aspect-ratio: 16 / 9;

    @include layout.media-query('xsmall') {
      order: 3;
      aspect-ratio: 3/ 4;
    }

    & > iframe {
      width: 100%;
      height: 100%;
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
      grid-row: 4;
      order: 4;
    }
  }
}
.hidden {
  opacity: 0;
}
</style>
