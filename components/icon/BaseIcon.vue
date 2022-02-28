<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :height="size"
    :width="size"
    :aria-labelledby="iconName"
    viewBox="0 0 24 24"
  >
    <title :id="iconName" lang="en">{{ iconName }} icon</title>
    <g :fill="color">
      <slot />
    </g>
  </svg>
</template>

<script lang="ts">
import { useBaseIconProps } from 'composables/useBaseIconProps'


export default defineComponent({
  props: { ...useBaseIconProps({ iconName: 'icon' }) },
  setup() {
  }
})
</script>