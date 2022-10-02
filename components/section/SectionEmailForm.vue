<template>
  <form
    ref="formEmail"
    name="form-email"
    class="form-email"
    @submit="validateForm"
    method="post"
    action="?"
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
      <InputRecaptcha
        v-if="toggled"
        :container-id="grecaptchaContainerId"
        :callback="handleSubmit"
        :theme="RecaptchaTheme.Dark"
        :size="grecaptchaSize"
      />
      <input
        v-else
        class="label form-email-submit-button"
        type="submit"
        value="Submit"
      />
    </div>
  </form>
</template>

<script lang="ts" setup>
import { Ref } from 'vue'
import { RecaptchaSize, RecaptchaTheme } from '~~/types/Recaptcha'

const { toggled, toggleOn, toggleOff } = useToggle()
const formEmail: Ref<HTMLFormElement> = ref(null)
const grecaptchaContainerId = 'form-email-submit-grecaptcha'
const grecaptchaSize = ref(RecaptchaSize.Normal)

onMounted(() => {
  window.addEventListener('resize', onResize)
})

function onResize() {
  const deviceSize = useComputedStyleProperty('--device-size')
  if (deviceSize === 'xsmall' || deviceSize === 'small') {
    grecaptchaSize.value = RecaptchaSize.Compact
  } else {
    grecaptchaSize.value = RecaptchaSize.Normal
  }
}

function validateForm(e: Event) {
  e.preventDefault()
  toggleOn()
}

function handleSubmit() {
  toggleOff()
  useEmail(formEmail.value)
  window.grecaptcha.reset(grecaptchaContainerId)
}
</script>

<style lang="scss" scoped>
@use 'sass:map';

.form-email {
  display: flex;
  flex-flow: column nowrap;
  gap: 4rem;
  padding: 2rem;
  width: 100%;

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
      height: fit-content;
      width: max-content;
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
