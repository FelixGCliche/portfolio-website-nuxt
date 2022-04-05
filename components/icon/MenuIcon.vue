<template>
  <BaseIcon
    class="icon-menu"
    icon-name="icon-menu"
    v-bind="{ ...$props, ...$attrs }"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </BaseIcon>
</template>

<script lang="ts" setup>
import { useBaseIconProps } from 'composables/useBaseIconProps'

defineProps({
  ...useBaseIconProps({
    iconName: 'icon'
  })
})
</script>
