<template>
  <div class="inputfield">
    <slot
      class="inputfield-slot"
      :onFocus="onFocus"
      :onBlur="onBlur"
    />
    <Transition name="inputfield-focus">
      <label
        v-if="toggled"
        class="caption inputfield-label"
        :for="inputName"
      >
        {{ inputLabel }}
      </label>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
const { toggled, toggleOn, toggleOff } = useToggle()
const currentActiveElement = ref<HTMLInputElement | HTMLTextAreaElement>()

const props = defineProps({ ...useInputFieldProps() })

function onFocus() {
  currentActiveElement.value = document.activeElement as
    | HTMLInputElement
    | HTMLTextAreaElement

  toggleOn()
  currentActiveElement.value.placeholder = props.inputPlaceholder!
}
function onBlur() {
  if (!currentActiveElement?.value) {
    return
  }
  if (!currentActiveElement.value!.value) {
    toggleOff()
    currentActiveElement.value.placeholder = props.inputLabel!
  }
}
</script>

<style lang="scss">
input:focus + .inputfield-label,
textarea:focus + .inputfield-label {
  color: theme.$secondary;
}
</style>

<style lang="scss" scoped>
.inputfield {
  position: relative;

  &-label {
    position: absolute;
    color: theme.$primary;
    top: 0.75rem;
    left: 1rem;
  }
}

.inputfield-focus-enter-active,
.inputfield-focus-leave-active {
  transition: opacity 150ms ease-in, transform 150ms ease-in;
}
.inputfield-focus-enter-from,
.inputfield-focus-leave-to {
  opacity: 0;
  font-size: smaller;
  transform: translateY(50%);
}
</style>
