<template>
  <InputFieldBase
    v-bind="{ ...$props, ...$attrs } as InputFieldProps"
    v-slot="slotProps"
  >
    <textarea
      ref="textareaRef"
      v-model="modelValue"
      class="body textarea-input"
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
import type { InputFieldProps } from '@/types/InputField'

const textareaRef = ref<HTMLTextAreaElement>()
const modelValue = ref('')
const baseHeight = ref(0)

const props = defineProps({ ...useInputFieldProps() })

onMounted(() => {
  const textarea = textareaRef.value!
  textarea.required = props.inputRequired
  textarea.placeholder = props.inputLabel!
  baseHeight.value = textarea.offsetHeight
  textarea.addEventListener('input', onResize)
})

const onResize = (event: Event) => {
  const targetElement = event.target! as HTMLElement
  targetElement.style.height = `${baseHeight.value}px`
  const newHeight = Math.max(baseHeight.value, targetElement.scrollHeight)
  targetElement.style.height = `${newHeight}px`
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
