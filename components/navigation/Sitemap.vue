<template>
  <nav class="navlink">
    <ContentNavigation>
      <div v-for="link of sitemap" :key="link._path" class="navlink-group">
        <NuxtLink :to="localePath(link._path)" class="label navlink-item">
          {{ link.title }}
        </NuxtLink>
        <div v-if="link.children" v-for="child of link.children">
          <NuxtLink :to="localePath(child._path)" class="body navlink-item">
            {{ child.title }}
          </NuxtLink>
        </div>
      </div>
    </ContentNavigation>
  </nav>
</template>
<script lang="ts" setup>
const { locale } = useI18n()
const localePath = useLocalePath()
const { data: sitemap } = await useAsyncData('sitemap', async () => {
  return fetchContentNavigation(queryContent().locale(locale.value))
})

watch(locale, () => {
  refreshNuxtData('sitemap')
})
</script>

<style lang="scss" scoped>
@use 'sass:map';

@each $size in map.keys(layout.$breakpoints) {
  @include layout.media-query($size) {
    .navlink {
      display: flex;
      align-items: flex-start;
      gap: 1rem;

      &-group {
        display: flex;
        flex-flow: column nowrap;
        gap: 0.5rem;
      }

      &-item {
        display: block;
        color: theme.$on-background;

        @include theme.hover(theme.$primary);
        @include theme.pressed(theme.$secondary);
      }
    }
  }
}
</style>
