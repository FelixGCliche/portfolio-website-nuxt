<template>
  <component
    :is="useButtonType(url)"
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
  ...useButtonProps()
})

const emit = defineEmits(['button-click'])

const handleClick = (event: Event) => {
  emit('button-click', event)
}
</script>

<style lang="scss" scoped>
@use 'sass:map';

.button-base {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  min-width: 4rem;
  background: transparent;
  color: theme.$on-background;
  border: none;
}
</style>
