<template>
  <BaseButton class="button-primary" v-bind="{ ...$props, ...$attrs }" />
</template>

<style lang="scss" scoped>
.button-primary {
  border: 4px solid theme.$primary;
}
</style>