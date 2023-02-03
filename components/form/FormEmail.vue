<template>
  <form
    ref="formEmailRef"
    name="form-email"
    class="form-email"
    @submit="validateForm"
    method="post"
    action="?"
  >
    <div class="form-email-inputs">
      <LazyInputTextField
        input-name="from_name"
        :input-label="$t('emailForm.nameLabel')"
        :input-placeholder="$t('emailForm.namePlaceholder')"
        :input-required="true"
      />
      <LazyInputEmailField
        input-name="reply_to"
        :input-label="$t('emailForm.emailLabel')"
        :input-placeholder="$t('emailForm.emailPlaceholder')"
        :input-required="true"
      />
      <LazyInputTextAreaField
        input-name="message"
        :input-label="$t('emailForm.messageLabel')"
        :input-placeholder="$t('emailForm.messagePlaceholder')"
        :input-required="true"
      />
    </div>
    <div class="form-email-submit">
      <LazyInputRecaptcha
        v-if="toggled"
        :container-id="grecaptchaContainerId"
        :callback="handleSubmit"
        :theme="RecaptchaTheme.Dark"
        :size="grecaptchaSize"
      />
      <button
        class="label form-email-submit-button"
        type="submit"
      >
        {{ $t('emailForm.submit') }}
      </button>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { RecaptchaSize, RecaptchaTheme } from '@/types/Recaptcha'
const { toggled, toggleOn, toggleOff } = useToggle()
const formEmailRef = ref<HTMLFormElement>()
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
  useEmail(formEmailRef.value!)
  window.grecaptcha.reset(grecaptchaContainerId)
}
</script>

<style lang="scss" scoped>
@use 'sass:map';
.form-email {
  @include layout.layout-flex(2.5rem);
  padding: 4rem;
  width: 100%;
  height: 100%;

  @include layout.media-query('xsmall') {
    padding: 2rem;
  }

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
    @include layout.media-query('xsmall') {
      justify-content: center;
    }

    &-button {
      @include theme.bevel-border(0.25rem, theme.$primary, 0.5rem);
      min-width: 4rem;
      background: transparent;
      padding: 0.25rem 1rem;
      color: theme.$on-background;
      height: fit-content;
      width: max-content;
      border: 4px solid theme.$primary;

      &:focus,
      &:focus-visible {
        border: 4px solid theme.$secondary;
      }
    }
  }
}
</style>
