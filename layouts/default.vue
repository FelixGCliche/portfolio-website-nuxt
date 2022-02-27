<template>
  <div>
    <Sidebar class="navigation"/>
    <Nuxt />
  </div>
</template>

<style lang="scss" scoped>
.navigation {
  z-index: 999;
}
.nuxt {
  z-index: 0;
}
</style>