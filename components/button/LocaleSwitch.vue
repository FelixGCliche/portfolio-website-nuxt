<template>
  <div class="locale-switch">
    <NuxtLink
      v-for="locale of availableLocales"
      class="label locale-switch-button"
      :id="locale.code"
      :to="switchLocalePath(locale.code)"
    >
      {{ locale.code }}
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import { LocaleObject } from 'vue-i18n-routing'

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const availableLocales = computed(() => {
  return locales.value.filter(
    (current: LocaleObject) => current.code !== locale.value
  )
})
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
</style>
