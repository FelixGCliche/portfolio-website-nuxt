<template>
  <form
    ref="formEmail"
    name="form-email"
    class="form-email"
    @submit="validateForm"
  >
    <div class="form-email-inputs">
      <InputTextField
        input-name="from_name"
        input-label="Name"
        :input-required="true"
      />
      <InputEmailField
        input-name="reply_to"
        input-label="Email"
        :input-required="true"
      />
      <InputTextAreaField
        input-name="message"
        input-label="Message"
        :input-required="true"
      />
    </div>
    <div class="form-email-submit">
      <div ref="recaptcha" :class="{ invisible: !toggled }"></div>
      <input
        class="label form-email-submit-button"
        :class="{ invisible: toggled }"
        type="submit"
        value="Submit"
      />
    </div>
  </form>
  <Script
    src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
    async
    defer
  />
</template>

<script lang="ts" setup>
import { Ref } from 'vue'

const { toggled, toggleOn } = useToggle()
const formEmail: Ref<HTMLFormElement> = ref(null)
const recaptcha: Ref<HTMLElement> = ref(null)

onMounted(() => {
  window.onloadCallback = function () {
    window.grecaptcha.render(recaptcha.value, {
      sitekey: useRuntimeConfig().grecaptchaSiteKey,
      theme: 'dark',
      callback: handleSubmit
    })
  }
})

function validateForm(e: Event) {
  e.preventDefault()
  toggleOn()
}

function handleSubmit() {
  useEmail(formEmail.value)
}
</script>

<style lang="scss" scoped>
@use 'sass:map';

.invisible {
  display: none;
}

.form-email {
  display: flex;
  flex-flow: column nowrap;
  gap: 4rem;
  width: 100%;
  height: 100%;

  &-inputs {
    display: grid;
    grid-template-rows: min-content min-content 1fr;
    gap: 4rem;
    width: 100%;
    height: 100%;
  }
  &-submit {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    &-button {
      min-width: 4rem;
      background: transparent;
      padding: 0.25rem 1rem;
      color: theme.$on-background;
      border: none;
      width: fit-content;
      height: fit-content;
      border: 4px solid theme.$primary;

      &:hover {
        @include theme.hover(theme.$on-background) {
          border-color: theme.$secondary;
        }
      }
      &:active {
        @include theme.pressed(theme.$secondary);
      }
    }
  }
}
</style>
