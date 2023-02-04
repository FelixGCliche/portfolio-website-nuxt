<template>
  <div class="bevel bevel-container">
    <div class="bevel bevel-inner">
      <ButtonBase
        class="button-primary"
        v-bind="{ ...$props, ...$attrs } as ButtonProps"
      >
        <slot />
      </ButtonBase>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ButtonProps } from '@/types/Button'
</script>

<style lang="scss" scoped>
.bevel {
  @include theme.bevel-border(0.25rem, theme.$primary, 0.5rem);
  max-width: fit-content;

  &-container {
    @include theme.hover(theme.$on-background) {
      @include theme.bevel(theme.$secondary, 8px);
    }
    @include theme.pressed(theme.$secondary);
  }
}

.button-primary {
  padding: 0.5rem;
}
</style>
