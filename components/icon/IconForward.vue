<template>
  <IconBase v-bind="{ ...$props, ...$attrs } as IconProps">
    <path d="M0 7V10H18.2501L14.25 16H18L24 7H0Z" />
  </IconBase>
</template>

<script lang="ts" setup>
import type { IconProps } from '@/types/Icon'

defineProps({
  ...useIconProps()
})
</script>
