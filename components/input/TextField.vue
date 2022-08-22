<template>
  <InputFieldBase
    v-bind="{ ...$props, ...$attrs } as BaseInputFieldProps"
    v-slot="{ toggleOn, toggleOff }"
  >
    <input
      ref="textfield"
      v-model="modelValue"
      class="body textfield-input"
      type="text"
      :id="inputName"
      :name="inputName"
      :placeholder="inputPlaceholder"
      @focus="onFocus"
      @onBlur="onBlur"
    />
  </InputFieldBase>
</template>

<script lang="ts" setup>
import { BaseInputFieldProps } from 'types/BaseInputField'

const textfield = ref(null)
const modelValue = ref('')
const filled = ref(false)
const slot = useSlots()

defineProps({
  ...useInputFieldProps()
})

onMounted(() => {
  filled.value = textfield.value && textfield.value.value !== ''
  if (filled) {
    textfield.value.focus()
  }
})

function onFocus() {
  slot.toggleOff()
}
function onBlur() {
  filled.value = textfield.value && textfield.value.value !== ''
  if (!filled.value) {
    slot.toggleOff()
  }
}
</script>

<style lang="scss" scoped>
@use 'sass:map';

@each $size in map.keys(layout.$breakpoints) {
  @include layout.media-query($size) {
    .textfield-input {
      color: theme.$on-background;
      background-color: theme.$background;
      padding: 0.5rem 1rem;
      border-bottom: 0.125rem solid theme.$on-background;
      width: 100%;
      &:focus {
        background-color: theme.$surface;
        margin-top: calc(0.5rem + theme.get-line-height('body', $size));
        border-bottom: 0.25rem solid theme.$secondary;
      }
      &:focus + .input-label {
        color: theme.$secondary;
      }
    }
  }
}
</style>
