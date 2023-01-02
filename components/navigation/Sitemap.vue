<template>
  <nav class="navlink">
    <ContentNavigation>
      <div v-for="link of sitemap" :key="link._path">
        <NuxtLink class="navlink-item" :to="link._path">
          {{ link.title }}
        </NuxtLink>
        <div v-if="link.children" v-for="child of link.children">
          <NuxtLink class="navlink-item" :to="child._path">
            {{ child.title }}
          </NuxtLink>
        </div>
      </div>
    </ContentNavigation>
  </nav>
</template>
<script lang="ts" setup>
const { data: sitemap } = await useAsyncData('sitemap', async () => {
  const c = await fetchContentNavigation()
  c.forEach(e =>
    console.log(
      `${e._path} has ${e.children ? e.children?.length : 0} children`,
      e.children
    )
  )
  return c
})

watch(useLocale(), () => {
  refreshNuxtData('navigation')
})
</script>

<style lang="scss" scoped>
@use 'sass:map';

@each $size in map.keys(layout.$breakpoints) {
  @include layout.media-query($size) {
    .navlink {
      display: flex;
      align-items: center;
      text-transform: uppercase;

      @if $size == 'xsmall' {
        flex-direction: column;
        justify-content: center;
      } @else {
        flex-direction: row;
      }

      &-item {
        display: block;
        color: theme.$primary;

        @if $size == 'xsmall' {
          @include theme.typography-headline($size);
          margin-bottom: 2rem;
        } @else {
          @include theme.typography-label($size);
          margin-left: 1.5rem;
        }

        @include theme.hover(theme.$secondary);
        @include theme.pressed(theme.$tertiary);
      }
    }
  }
}
</style>
