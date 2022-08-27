<template>
  <InputFieldBase
    v-bind="{ ...$props, ...$attrs } as BaseInputFieldProps"
    v-slot="slotProps"
  >
    <input
      ref="textfield"
      v-model="modelValue"
      class="body textfield-input"
      type="text"
      :id="inputName"
      :name="inputName"
      :placeholder="inputPlaceholder"
      @focus="slotProps.onFocus"
      @blur="slotProps.onBlur"
    />
  </InputFieldBase>
</template>

<script lang="ts" setup>
import type { BaseInputFieldProps } from '@/types/BaseInputFieldProps'

const textfield = ref(null)
const modelValue = ref('')
const filled = ref(false)

defineProps({ ...useInputFieldProps() })

onMounted(() => {
  filled.value = textfield.value && textfield.value.value !== ''
  if (filled.value) {
    textfield.value.focus()
  }
})
</script>

<style lang="scss">
.textfield-input:focus + .inputfield-label {
  color: theme.$secondary;
}
</style>

<style lang="scss" scoped>
@use 'sass:map';

@each $size in map.keys(layout.$breakpoints) {
  @include layout.media-query($size) {
    .textfield-input {
      color: theme.$on-background;
      background-color: theme.$background;
      padding: 0.5rem 1rem;
      padding-top: calc(0.5rem + theme.get-line-height('body', $size));
      border-bottom: 0.125rem solid theme.$on-background;
      width: 100%;
      &:focus {
        background-color: theme.$surface;
        border-bottom: 0.25rem solid theme.$secondary;
      }
    }
  }
}
</style>
