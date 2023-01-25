<template>
  <IconBase v-bind="{ ...$props, ...$attrs } as IconProps">
    <path d="M24 16V13H5.74988L9.75 7H6L0 16H24Z" />
  </IconBase>
</template>

<script lang="ts" setup>
import type { IconProps } from '@/types/Icon'

defineProps({
  ...useIconProps()
})
</script>
