<template>
  <NuxtLink
    v-for="l of locales"
    class="label locale-switch"
    :to="switchLocalePath(l.toString())"
  >
    {{ l }}
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
}

.router-link-active {
  color: theme.$secondary;
}
</style>
