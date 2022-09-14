<template>
  <form name="form-email" class="form-email">
    <input type="hidden" name="form-name" value="form-email" />
    <InputTextField
      input-name="name"
      input-label="Name"
      :input-required="true"
    />
    <InputTextField
      input-name="email"
      input-label="Email"
      :input-required="true"
    />
    <InputTextAreaField
      input-name="message"
      input-label="Message"
      :input-required="true"
    />
    <button class="button-submit" type="submit">
      <label class="label" for="button-submit">Submit</label>
    </button>
  </form>
</template>

<script lang="ts"></script>

<style lang="scss" scoped>
@use 'sass:map';

.form-email {
  display: grid;
  grid-template-rows: repeat(3, max-content);
  gap: 4rem;
  width: 100%;
  height: 100%;
}

.button-submit {
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
</style>
