<template>
  <NuxtLink
    class="label locale-switch"
    v-for="locale in locales"
    :to="switchLocalePath(locale.toString())"
  >
    {{ locale }}
  </NuxtLink>
</template>

<script lang="ts" setup>
const { locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<style lang="scss" scoped>
.locale-switch {
  color: theme.$on-background;
  @include theme.hover(theme.$primary);
  @include theme.pressed(theme.$secondary);

  &:checked + &-label {
    color: theme.$secondary;
  }
}
</style>
