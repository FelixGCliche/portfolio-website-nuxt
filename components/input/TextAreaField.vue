<template>
  <InputFieldBase
    v-bind="{ ...$props, ...$attrs } as InputFieldProps"
    v-slot="slotProps"
  >
    <textarea
      ref="textarea"
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
import type { InputFieldProps } from '~~/types/InputField'
import { Ref } from 'vue'

const textarea: Ref<HTMLTextAreaElement> = ref(null)
const modelValue = ref('')
const minTextareaHeight = ref('')

const props = defineProps({ ...useInputFieldProps() })

onMounted(() => {
  minTextareaHeight.value = `${textarea.value.offsetHeight}`
  textarea.value.required = props.inputRequired
})

watch(modelValue, newValue => {
  resizeHeight(newValue)
})

const resizeHeight = (value: string) => {
  const lineHeightProperty = useComputedStyleProperty('--line-height-body')
  const lineHeight = +lineHeightProperty.replace('px', '')

  const lineBreaks = (value.match(/\n/g) || []).length
  const currentHeight = textarea.value.style.height
  const height = `${minTextareaHeight.value + lineBreaks * lineHeight}`

  if (currentHeight >= minTextareaHeight.value && currentHeight < height)
    textarea.value.style.height = `${minTextareaHeight.value}px`
}
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
      height: 100%;
      resize: vertical;

      &:focus {
        background-color: theme.$surface;
        border-bottom: 0.25rem solid theme.$secondary;
      }
    }
  }
}
</style>
