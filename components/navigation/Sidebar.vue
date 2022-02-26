<template>
  <nav class="sidebar-container">
    <icon-button dir="rtl" label="menu" @click="toggle">
      <menu-icon :size="24" />
    </icon-button>
    <div class="sidebar" v-if="opened" @click="toggle">
      <NavigationLinks />
    </div>
  </nav>
</template>

<script lang="ts" setup>

const opened = ref(false)

const emit = defineEmits(['click'])

function toggle(event: Event) {
  console.log('sidebar toggled: ', event)
  opened.value = !opened.value
  emit('click', event)
}
</script>

<style lang="scss" scoped>

$sidebar-height: 56px;

.sidebar-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  padding: 16px;
  width: 100%;
}
.sidebar {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: $sidebar-height;
  left: 0;
  width: 100%;
  height: calc(100% - $sidebar-height);
  background: theme.$background;
}
</style>