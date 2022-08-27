<template>
  <ButtonBase
    class="button-primary"
    v-bind="{ ...$props, ...$attrs } as BaseButtonProps"
  />
</template>

<script lang="ts" setup>
import type { BaseButtonProps } from '@/types/BaseButtonProps'
</script>

<style lang="scss" scoped>
.button-primary {
  border: 4px solid theme.$primary;
}
</style>
