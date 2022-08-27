<template>
  <div class="inputfield">
    <slot :onFocus="onFocus" :onBlur="onBlur" />
    <Transition name="input-focus">
      <label v-if="toggled" class="body inputfield-label" :for="inputName">
        {{ inputLabel }}
      </label>
    </Transition>
  </div>
</template>

<script></script>
<script lang="ts" setup>
const { toggled, toggleOn, toggleOff } = useToggle()
defineProps({ ...useInputFieldProps() })

function onFocus() {
  toggleOn()
}
function onBlur() {
  toggleOff()
}
</script>

<style lang="scss" scoped>
.inputfield {
  display: grid;
  position: relative;

  &-label {
    position: absolute;
    color: theme.$primary;
    width: 100%;
    top: 0;
    left: 1rem;
  }
}

.input-focus-enter-active,
.input-focus-leave-active {
  transition: opacity 50ms ease-in, transform 200ms ease-in;
}
.input-focus-enter-from,
.input-focus-leave-to {
  opacity: 0;
  transform: translateY(100%);
  &::placeholder {
    color: transparent;
  }
}
</style>
