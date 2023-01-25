<template>
  <ButtonBase
    class="button-primary"
    v-bind="{ ...$props, ...$attrs } as ButtonProps"
  >
    <div class="bevel bevel-container">
      <div class="bevel bevel-inner">
        <slot class="label" />
      </div>
    </div>
  </ButtonBase>
</template>

<script lang="ts" setup>
import type { ButtonProps } from '@/types/Button'
</script>

<style lang="scss" scoped>
.bevel {
  &-container {
    @include theme.bevel(theme.$primary, 8px);
    padding: 4px;
    @include theme.hover(theme.$on-background) {
      @include theme.bevel(theme.$secondary, 8px);
    }
    @include theme.pressed(theme.$secondary);
  }
  &-inner {
    @include theme.bevel(theme.$background, 8 - 1px);
    padding: 0.5rem;
  }
}
</style>
