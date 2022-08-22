<template>
  <svg
    class="icon"
    xmlns="http://www.w3.org/2000/svg"
    :height="size"
    :width="size"
    :aria-labelledby="iconName"
    viewBox="0 0 24 24"
  >
    <title :id="iconName" lang="en">{{ iconName }}</title>
    <g fill="currentColor">
      <slot />
    </g>
  </svg>
</template>

<script lang="ts" setup>
defineProps({
  ...useBaseIconProps()
})
</script>
