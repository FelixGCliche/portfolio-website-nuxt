<template>
  <div class="locale-switch" v-for="value of locales">
    <input
      class="locale-switch-radio"
      type="radio"
      :id="`locale-${value}`"
      :name="`locale-${value}`"
      :value="value"
      v-model="selectedLocale"
    />
    <label class="label locale-switch-radio-label" :for="`locale-${value}`">
      {{ value }}
    </label>
  </div>
</template>

<script lang="ts" setup>
const { locale, locales, setLocale } = useI18n()

const selectedLocale = ref(locale)
watch(selectedLocale, () => {
  setLocale(selectedLocale.value)
})
</script>

<style lang="scss" scoped>
.locale-switch {
  &-radio {
    appearance: none;
    &-label {
      @include theme.hover(theme.$primary);
      @include theme.pressed(theme.$secondary);
    }
    &:checked + &-label {
      color: theme.$secondary;
    }
  }
}
</style>
