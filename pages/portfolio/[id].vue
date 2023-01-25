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
        :url="surroundPath(prev)"
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
        :url="surroundPath(next)"
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
const router = useRouter()

const { data: project } = await useAsyncData('project', () =>
  queryContent(`/portfolio/projects/${route.params.id}`)
    .locale(locale.value)
    .findOne()
)

const [prev, next] = await queryContent('/portfolio/projects')
  .only(['_path'])
  .sort({ year: -1 })
  .findSurround(`/portfolio/projects/${route.params.id}`)

const isProjectValid = (
  project: Pick<ParsedContent, string> | any
): boolean => {
  return project && project._path
}

function surroundPath(project: Pick<ParsedContent, string>): string {
  if (isProjectValid(project)) {
    return project._path.replace('/projects', '')
  }
  return ''
}

function onWheel(e: WheelEvent) {
  e.preventDefault
  console.log(e.deltaY)
  if (e.deltaY < 0) {
    if (isProjectValid(prev)) {
      console.log(surroundPath(prev))
      router.push(surroundPath(prev))
    }
  }

  if (e.deltaY > 0) {
    if (isProjectValid(next)) {
      console.log(surroundPath(next))
      router.push(surroundPath(next))
    }
  }
}

onMounted(() => {
  document.onwheel = (e: WheelEvent) => onWheel(e)
})
</script>

<style lang="scss" scoped>
@use 'sass:map';
@function get-overlap-start($size) {
  $base: calc(map.get(layout.$columns, $size) + 1);
  @return calc($base * -1);
}

@function get-profile-overlap($size) {
  $base: calc(map.get(layout.$columns, $size) / 2);
  @return calc($base + 1);
}
.project {
  @include layout.layout-grid {
    grid-template-rows: 1fr auto;
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
    background-color: red;
    margin: 6rem 0;
    @include layout.responsive-cell-half-mobile;
  }

  &-navigation {
    display: flex;
    align-items: center;
    justify-content: center;
    @include layout.responsive-cell-full {
      grid-row: 2;
    }
  }
}

.hidden {
  opacity: 0;
}
</style>
