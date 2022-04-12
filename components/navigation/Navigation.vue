<template>
  <nav class="navbar-container">
    <div class="navbar-header">
      <IconButton v-if="device == 'small'" dir="rtl" label="menu" @click="open">
        <MenuIcon :size="24" />
      </IconButton>
      <NavigationLinks v-else />
    </div>
    <Transition name="slide-in">
      <div v-if="toggled" class="navbar-content" @click.prevent="close">
        <div class="navbar-header">
          <ButtonIcon dir="rtl" label="menu" @click.prevent="close">
            <ClearIcon :size="24" />
          </ButtonIcon>
        </div>
        <NavigationLinks />
      </div>
    </Transition>
  </nav>
</template>

<script lang="ts" setup>
const emit = defineEmits(["click"]);
const { toggled, toggleOn, toggleOff } = useToggle();

onBeforeMount(() => {
  device.value = getComputedStyle(document.documentElement).getPropertyValue(
    "--device-size"
  );
});

const close = (event: Event) => {
  emit("click", event);
  toggleOff();
};

const open = (event: Event) => {
  emit("click", event);
  toggleOn();
};
const device = ref("large");
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
