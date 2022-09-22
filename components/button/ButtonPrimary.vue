<template>
  <ButtonBase
    class="button-primary"
    v-bind="{ ...$props, ...$attrs } as ButtonProps"
  />
</template>

<script lang="ts" setup>
import type { ButtonProps } from '~~/types/Button'
</script>

<style lang="scss" scoped>
.button-primary {
  border: 4px solid theme.$primary;
}
</style>
