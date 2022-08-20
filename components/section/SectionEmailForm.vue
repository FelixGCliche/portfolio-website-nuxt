<template>
  <form class="form-email" action="">
    <InputTextField
      name="name"
      :required="true"
      label="Name"
      placeholder="Name"
    />
    <InputTextField
      name="email"
      :required="true"
      label="Email"
      placeholder="Email"
    />
    <InputTextField
      name="message"
      :required="false"
      label="Message"
      placeholder="Your email here"
    />
  </form>
</template>

<style lang="scss" scoped>
.form-email {
  display: grid;
  grid-template-rows: repeat(3, max-content);
  gap: 4rem;
  width: 100%;
  height: 100%;
}
</style>
