<template>
  <form
    ref="formEmail"
    name="form-email"
    class="form-email"
    @submit="validateForm"
    method="post"
    action="?"
  >
    <div class="form-email-fields">
      <slot name="form-email-fields" />
    </div>
    <div class="form-email-submit">
      <Recaptcha
        v-if="toggled"
        :container-id="grecaptchaContainerId"
        :callback="handleSubmit"
        :theme="RecaptchaTheme.Dark"
        :size="grecaptchaSize"
      />
      <button
        v-else
        class="label form-email-submit-button"
        type="submit"
      >
        <slot name="form-email-submit" />
      </button>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { RecaptchaSize, RecaptchaTheme } from '@/types/Recaptcha'

const { toggled, toggleOn, toggleOff } = useToggle()
const formEmail = ref<HTMLFormElement>()
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
  useEmail(formEmail.value!)
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
  height: 100%;
  &-fields {
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
    @include layout.media-query('xsmall') {
      justify-content: center;
    }
    &-button {
      min-width: 4rem;
      background: transparent;
      padding: 0.25rem 1rem;
      color: theme.$on-background;
      border: none;
      height: fit-content;
      width: max-content;
      border: 4px solid theme.$primary;

      @include theme.hover(theme.$on-background) {
        border-color: theme.$secondary;
      }
      @include theme.pressed(theme.$secondary);
    }
  }
}
</style>
