<template>
  <section class="section-contact">
    <h1 class="headline">
      <slot name="headline" />
    </h1>
    <div class="body">
      <slot name="body" />
    </div>
    <div class="button">
      <ButtonIcon
        class="button-email"
        url="mailto: felix@gagnecliche.dev"
        label="felix@gagnecliche.dev"
      >
        <IconEmail
          icon-name="email"
          :size="32"
        />
      </ButtonIcon>
      <ButtonIcon
        class="button-sms"
        url="tel: 418-805-6251"
        label="(418) 805-6251"
      >
        <IconSMS
          icon-name="sms"
          :size="32"
        />
      </ButtonIcon>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.section-contact {
  display: grid;
  gap: 1.5rem;
}
.headline {
  color: theme.$primary;
}

.button {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  gap: 1rem;

  &-email,
  &-sms {
    width: fit-content;
    padding: 0;
  }
}
</style>
