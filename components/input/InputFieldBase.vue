<template>
  <div class="inputfield">
    <slot class="inputfield-slot" :onFocus="onFocus" :onBlur="onBlur" />
    <Transition name="inputfield-focus">
      <label v-if="toggled" class="caption inputfield-label" :for="inputName">
        {{ inputLabel }}
      </label>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { Ref } from 'vue'

const { toggled, toggleOn, toggleOff } = useToggle()
const currentActiveElement: Ref<HTMLInputElement> = ref(null)

defineProps({ ...useInputFieldProps() })

function onFocus() {
  if (document.activeElement instanceof HTMLInputElement)
    currentActiveElement.value = document.activeElement as HTMLInputElement

  toggleOn()
}
function onBlur() {
  if (!currentActiveElement.value.value) {
    toggleOff()
  }
}
</script>

<style lang="scss" scoped>
.inputfield {
  position: relative;

  &-label {
    position: absolute;
    color: theme.$primary;
    width: 100%;
    height: 100%;
    top: 1rem;
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
