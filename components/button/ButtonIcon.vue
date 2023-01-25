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
      class="label"
      >{{ label }}</span
    >
  </component>
</template>

<script lang="ts" setup>
const props = defineProps({
  ...useButtonProps()
})

const emit = defineEmits(['button-click'])

function handleClick(event: Event) {
  emit('button-click', event)
}

const buttonType = useButtonType(props.url)
</script>

<style lang="scss" scoped>
@use 'sass:map';
.button-icon {
  display: flex;
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

  @include theme.hover(theme.$primary);
  @include theme.pressed(theme.$secondary);
}
</style>
