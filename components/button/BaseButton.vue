<template>
  <component
    :is="buttonType"
    class="button-base"
    :href="url"
    @click="handleClick"
  >
    <slot />
    <span class="button-label">{{ label }}</span>
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

const buttonType = useButtonType(props.url)

function handleClick(event: Event) {
  emit('click', event)
}
</script>

<style
  lang="scss"
  scoped
>
@use 'sass:map';

.button-base {
  display: inline-flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  min-width: 4rem;
  background: transparent;
  padding: 0.25rem 1rem;
  color: theme.$on-background;
  border: none;

  &:hover {
    @include theme.hover(theme.$on-background) {
      border-color: theme.$secondary;
    }
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
