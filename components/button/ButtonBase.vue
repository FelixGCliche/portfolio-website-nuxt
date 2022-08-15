<template>
  <component
    :is="buttonType($props.url)"
    class="button-base"
    :href="url"
    @button-click="handleClick"
  >
    <slot />
    <span class="label">{{ label }}</span>
  </component>
</template>

<script lang="ts" setup>
defineProps({
  ...useBaseButtonProps({
    label: 'button'
  })
})

const buttonType = (url: string) => {
  return useButtonType(url)
}

const emit = defineEmits(['button-click'])

const handleClick = (event: Event) => {
  emit('button-click', event)
}
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
