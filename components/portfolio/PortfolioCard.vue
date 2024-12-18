<template>
  <NuxtLink
    class="portfolio-card"
    :to="localePath(project._path)"
  >
    <div
      class="portfolio-card-inner"
      :style="backgroundImageStyle"
    >
      <div class="portfolio-card-content">
        <h3 class="title">{{ project.title }}</h3>
        <p class="body">{{ project.description }}</p>
        <div class="portfolio-card-tags">
          <p
            class="caption"
            v-for="tag in project.tags"
          >
            {{ tag }}
          </p>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
import { Project } from '@/types/Project'

const img = useImage()
const localePath = useLocalePath()
const { project } = defineProps<{ project: Project }>()

const backgroundImageUrl = ref('')
const backgroundImageStyle = computed(() =>
  reactive({
    '--background-image-url': backgroundImageUrl.value
  })
)

onMounted(() => {
  const imgUrl = img(`img${project._path}-thumbnail.webp`)
  backgroundImageUrl.value = `url('${imgUrl}')`
})
</script>

<style lang="scss" scoped>
$gradient-content: linear-gradient(
  rgba(theme.$primary, 0.87),
  rgba(theme.$secondary, 0.24)
);
.portfolio-card {
  @include layout.layout-grid-cell;
  @include theme.bevel(theme.$primary, 2rem);
  width: 100%;
  aspect-ratio: 3 / 4;
  padding: 0.25rem;
  color: theme.$on-background;

  @include theme.pressed(theme.$on-background);

  &:hover {
    transition: background ease-in 0.2s;
    @include theme.bevel(theme.$secondary, 2rem);
  }

  &-inner {
    @include theme.bevel(theme.$background, 2rem);
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0.5rem;
    background-image: var(--background-image-url);
    background-size: cover;
    background-position: center;

    &:hover {
      background-size: cover;
      background-position: center;
      background-color: theme.$background;
      transition: background 0.66s cubic-bezier(0.6, 0, 0.07, 1);
      & > .portfolio-card-content {
        transition: opacity 0.66s cubic-bezier(0.6, 0, 0.07, 1),
          transform 0.66s cubic-bezier(0.6, 0, 0.07, 1);
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  &-content {
    @include layout.layout-flex {
      max-height: fit-content;
      width: 100%;
      align-self: flex-end;
    }
    @include theme.bevel-clip-path(2rem);
    padding: 2rem;
    background: $gradient-content;
    opacity: 0;
    transform: translateY(50%);

    & > .title {
      display: block;
      @include theme.typography-baseline(2px);
    }
  }

  &-tags {
    display: flex;
    flex-flow: row wrap;
    gap: 0.5rem;

    & > .caption {
      @include theme.bevel(theme.$tertiary, 0.5rem);
      padding: 0.5rem;
    }
  }
}
</style>
