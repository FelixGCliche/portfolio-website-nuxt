<template>
  <nav class="sidebar-container">
    <div class="sidebar-header">
      <icon-button dir="rtl" label="menu" @click="toggle">
        <menu-icon :size="24" />
      </icon-button>
    </div>
    <transition name="slide-in">
      <div v-if="opened" class="sidebar-content"> 
        <div class="sidebar-header">
          <icon-button dir="rtl" label="close" @click="toggle">
            <menu-icon :size="24" />
          </icon-button>
        </div>
        <NavigationLinks />
      </div>
    </transition>
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

.sidebar-header {
  display: flex;
  justify-content: flex-end;
  padding: 16px;
}
.sidebar-content {
  display: grid;
  grid-template-rows: auto 1fr;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // height: calc(100% - $sidebar-height);
  background: theme.$surface;
  // background: red;
}

.slide-in-enter-active, .slide-in-leave-active {
    // transition: opacity 300ms ease-out, 
    transition: transform 300ms ease-out;
  }
  .slide-in-enter, .slide-in-leave-to {
    transform: translateY(100%);
    // opacity: 0;
  }

</style>