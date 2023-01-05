<template>
  <div class="locale-switch" v-for="value of content.locales" :key="value">
    <input
      class="locale-switch-radio"
      type="radio"
      :id="`locale-${value}`"
      :name="`locale-${value}`"
      :value="value"
      v-model="selectedLocale"
    />
    <label class="label locale-switch-radio-label" :for="`locale-${value}`">{{
      value
    }}</label>
  </div>
</template>

<script lang="ts" setup>
const { content } = useRuntimeConfig().public
const selectedLocale = ref(content.defaultLocale)

watch(selectedLocale, () => {
  useState<string>('locale').value = selectedLocale.value
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
