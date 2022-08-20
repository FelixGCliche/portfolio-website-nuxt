<template>
  <div class="textfield">
    <input
      ref="textfield"
      class="body textfield-input"
      :class="{ filled: filled }"
      type="text"
      :id="name"
      :name="name"
      v-model="modelValue"
      :placeholder="placeholder"
      @focus="onFocus"
      @blur="onBlur"
      required
    />
    <Transition name="textfield-focus">
      <label v-if="toggled" class="body textfield-label" :for="name">
        {{ label }}
      </label>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
const { toggled, toggleOn, toggleOff } = useToggle()
const textfield = ref(null)
const modelValue = ref('')
const filled = ref(false)

defineProps({
  ...useBaseInputFieldProps({
    name: 'textfield',
    required: false,
    label: 'label',
    placeholder: 'placeholder',
    textarea: false
  })
})
onMounted(() => {
  filled.value = textfield.value && textfield.value.value !== ''
  if (filled) {
    textfield.value.focus()
  }
})

function onFocus() {
  toggleOn()
}

function onBlur() {
  filled.value = textfield.value && textfield.value.value !== ''
  if (!filled.value) {
    toggleOff()
  }
}
</script>

<style lang="scss" scoped>
@use 'sass:map';
@each $size in map.keys(layout.$breakpoints) {
  @include layout.media-query($size) {
    .textfield {
      display: grid;
      position: relative;

      &-label {
        position: absolute;
        color: theme.$primary;
        width: 100%;
        top: 0;
        left: 1rem;
      }

      &-input {
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
        &:focus + .textfield-label {
          color: theme.$secondary;
        }
      }
    }

    .filled {
      margin-top: calc(0.5rem + theme.get-line-height('body', $size));
    }

    .textfield-focus-enter-active,
    .textfield-focus-leave-active {
      transition: opacity 50ms ease-in, transform 200ms ease-in;
    }

    .textfield-focus-enter-from,
    .textfield-focus-leave-to {
      opacity: 0;
      transform: translateY(100%);
      &::placeholder {
        color: transparent;
      }
    }
  }
}
</style>
