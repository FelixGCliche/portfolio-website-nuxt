import { ref } from "vue";

export const useToggle = () => {
  const toggled = ref(false);

  const toggle = (event: Event) => {
    toggled.value = !toggled.value;
  };

  const toggleOn = (event: Event) => {
    toggled.value = true;
  };

  const toggleOff = (event: Event) => {
    toggled.value = false;
  };

  return {
    toggled,
    toggle,
    toggleOn,
    toggleOff,
  };
};
