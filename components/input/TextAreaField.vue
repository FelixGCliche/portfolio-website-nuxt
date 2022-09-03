<template>
  <InputFieldBase
    v-bind="{ ...$props, ...$attrs } as BaseInputFieldProps"
    v-slot="slotProps"
  >
    <textarea
      role="textbox"
      contenteditable
      v-model="modelValue"
      class="body textarea-input"
      type="text"
      :id="inputName"
      :name="inputName"
      :placeholder="inputLabel"
      @focus="slotProps.onFocus"
      @blur="slotProps.onBlur"
    />
  </InputFieldBase>
</template>

<script lang="ts" setup>
import type { BaseInputFieldProps } from '@/types/BaseInputFieldProps'

const modelValue = ref('')

defineProps({ ...useInputFieldProps() })
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
    .textarea-input {
      color: theme.$on-background;
      background-color: theme.$background;
      padding: 0.5rem 1rem;
      padding-top: calc(1rem + theme.get-line-height('body', $size));
      border-bottom: 0.125rem solid theme.$on-background;
      width: 100%;
      resize: vertical;
      min-height: 6rem;

      &:focus {
        background-color: theme.$surface;
        border-bottom: 0.25rem solid theme.$secondary;
      }
    }
  }
}
</style>
