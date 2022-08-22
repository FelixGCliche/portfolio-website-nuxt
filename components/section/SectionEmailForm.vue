<template>
  <form class="form-email" action="">
    <InputTextField
      input-name="name"
      input-label="Name"
      input-placeholder="Name"
      :input-required="true"
    />
  </form>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.form-email {
  display: grid;
  grid-template-rows: repeat(3, max-content);
  gap: 4rem;
  width: 100%;
  height: 100%;
}
</style>
