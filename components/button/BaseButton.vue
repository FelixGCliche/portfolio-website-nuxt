<template>
  <component :is="buttonType" class="button-base" :href="url">
    <slot />
    <span class="button-label">{{ label }}</span>
  </component>
</template>

<script lang="ts" setup>
import { useBaseButtonProps, useButtonType } from 'composables/useBaseButtonProps'


const props = defineProps({
  ...useBaseButtonProps({
    label: 'button'
  })
})

const emits = defineEmits({
  click: (event: Event) => {
    return event
  }
})

const buttonType = useButtonType(props.url)
</script>

<style lang="scss" scoped>
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
    @include layout.media-query_($size) {
      @include theme.typography-label($size);
    }
  }
}
</style>