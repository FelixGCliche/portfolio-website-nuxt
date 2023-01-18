<template>
  <IconBase
    class="icon-menu"
    v-bind="{ ...$props, ...$attrs } as IconProps"
  >
    <path
      d="M0 0h24v24H0V0z"
      fill="none"
    />
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </IconBase>
</template>

<script lang="ts" setup>
import type { IconProps } from '~~/types/Icon'

defineProps({
  ...useIconProps()
})
</script>
