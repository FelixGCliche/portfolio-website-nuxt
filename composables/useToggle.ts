import { ref } from "vue";

export const useToggle = () => {
  const toggled = ref(false);

  const toggle = () => {
    toggled.value = !toggled.value;
  };

  const toggleOn = () => {
    toggled.value = true;
  };

  const toggleOff = () => {
    toggled.value = false;
  };

  return {
    toggled,
    toggle,
    toggleOn,
    toggleOff,
  };
};
