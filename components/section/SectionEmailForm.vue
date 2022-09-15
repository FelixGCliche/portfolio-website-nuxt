<template>
  <form
    ref="formEmail"
    name="form-email"
    class="form-email"
    @submit.prevent="handleSubmit"
    action="POST"
  >
    <div class="form-email-inputs">
      <input type="hidden" name="contact_number" />
      <InputTextField
        input-name="from_name"
        input-label="Name"
        :input-required="true"
      />
      <InputTextField
        input-name="reply_to"
        input-label="Email"
        :input-required="true"
        type='"email'
      />
      <InputTextAreaField
        input-name="message"
        input-label="Message"
        :input-required="true"
      />
    </div>
    <div class="submit">
      <button class="submit-button" type="submit">
        <label class="label" for="button-submit">Submit</label>
      </button>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { Ref } from 'vue'
import emailjs from 'emailjs-com'

const formEmail: Ref<HTMLFormElement> = ref(null)

function handleSubmit() {
  console.log(`${formEmail.value} submitted`)

  emailjs.sendForm('portfolio', 'default', formEmail.value, 'fQsPv5E3xcb_a9l0T')
}
</script>

<style lang="scss" scoped>
@use 'sass:map';

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
}

.submit {
  display: flex;
  justify-content: flex-end;
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
</style>
