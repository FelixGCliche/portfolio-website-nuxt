<template>
  <InputFieldBase
    v-bind="{ ...$props, ...$attrs } as InputFieldProps"
    v-slot="slotProps"
  >
    <input
      ref="textfield"
      v-model="modelValue"
      class="body textfield-input"
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
import type { InputFieldProps } from '~~/types/InputField'
import { Ref } from 'vue'

const textfield: Ref<HTMLInputElement> = ref(null)
const modelValue = ref('')

const props = defineProps({ ...useInputFieldProps() })

onMounted(() => {
  textfield.value.required = props.inputRequired
})
</script>

<style lang="scss" scoped>
@use 'sass:map';

@each $size in map.keys(layout.$breakpoints) {
  @include layout.media-query($size) {
    .textfield-input {
      color: theme.$on-background;
      background-color: theme.$background;
      padding: 0.5rem 1rem;
      padding-top: calc(1rem + theme.get-line-height('body', $size));
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
