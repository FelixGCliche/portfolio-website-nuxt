<template>
  <component
    :is="buttonType"
    class="button-icon"
    :href="url"
    @click="handleClick"
  >
    <slot />
    <span
      v-if="label"
      class="button-label"
      >{{ label }}</span
    >
  </component>
</template>

<script
  lang="ts"
  setup
>
import { useBaseButtonProps, useButtonType } from 'types/BaseButtonProps'

const props = defineProps({
  ...useBaseButtonProps({
    label: 'button'
  })
})

const emit = defineEmits(['click'])

function handleClick(event: Event) {
  emit('click', event)
}

const buttonType = useButtonType(props.url)
</script>

<style
  lang="scss"
  scoped
>
@use 'sass:map';
.button-icon {
  display: inline-flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-width: 4rem;
  background: none;
  padding: 0.25rem 1rem;
  color: theme.$on-background;
  border: none;

  [dir='rtl'] & {
    flex-flow: row-reverse nowrap;
  }
  &:hover {
    @include theme.hover(theme.$primary);
  }
  &:active {
    @include theme.pressed(theme.$secondary);
  }
}
.button-label {
  @each $size in map.keys(layout.$breakpoints) {
    @include layout.media-query($size) {
      @include theme.typography-label($size);
    }
  }
}
</style>
