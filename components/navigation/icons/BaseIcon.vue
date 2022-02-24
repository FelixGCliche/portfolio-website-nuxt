<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :height="size"
    :width="size"
    :aria-labelledby="name"
    viewBox="0 0 24 24"
  >
    <title :id="name" lang="en">{{ name }} icon</title>
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