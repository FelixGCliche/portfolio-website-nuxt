<template>
  <div class="locale-switch">
    <NuxtLink
      v-for="locale of locales"
      class="label locale-switch-button"
      :to="switchLocalePath(locale.toString())"
    >
      {{ locale }}
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const { locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<style lang="scss" scoped>
.locale-switch {
  display: flex;
  align-items: center;
  gap: 1rem;
  &-button {
    color: theme.$on-background;

    @include theme.hover(theme.$primary);
    @include theme.pressed(theme.$secondary);
  }
}

.router-link-active {
  color: theme.$secondary;
}
</style>
