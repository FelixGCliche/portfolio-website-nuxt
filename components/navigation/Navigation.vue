<template>
  <nav class="navbar-container">
    <div class="navbar-header">
      <IconButton
        v-if="device == 'small'"
        dir="rtl"
        label="menu"
        @click="toggleOn"
      >
        <MenuIcon :size="24" />
      </IconButton>
      <NavigationLinks v-else />
    </div>
    <Transition name="slide-in">
      <div v-if="toggled" class="navbar-content" @click.prevent="toggleOff">
        <div class="navbar-header">
          <IconButton dir="rtl" label="menu" @click.prevent="toggleOff">
            <ClearIcon :size="24" />
          </IconButton>
        </div>
        <NavigationLinks />
      </div>
    </Transition>
  </nav>
</template>

<script lang="ts" setup>
import { useToggle } from "composables/useToggle";

const emit = defineEmits(["click"]);
const device = ref("large");

onBeforeMount(() => {
  device.value = getComputedStyle(document.documentElement).getPropertyValue(
    "--device-size"
  );
});

const { toggled, toggleOn, toggleOff } = useToggle();

// const close = (event: Event) => {
//   opened.value = false
//   emit('click', event)
//   console.log('closed:', event)
// }

// const open = (event: Event) => {
//   opened.value = true
//   emit('click', event)
//   console.log('opened:', event)
// }

// const opened = ref(false)
</script>

<style lang="scss" scoped>
@use "sass:map";

.navbar-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 16px;

  @include layout.media-query("large") {
    padding: 16px 156px;
  }
}
.navbar-content {
  display: grid;
  grid-template-rows: auto 1fr;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: theme.$surface;
}

.slide-in-enter-active,
.slide-in-leave-active {
  transition: opacity 100ms ease-out, transform 200ms ease-out;
}
.slide-in-enter,
.slide-in-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
