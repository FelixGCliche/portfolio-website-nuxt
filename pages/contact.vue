<template>
  <main class="contact">
    <section class="contact-section">
      <ContentDoc
        path="/contact"
        :locale="locale"
      />
      <div class="contact-buttons">
        <ButtonIcon
          class="section-buttons-email"
          url="mailto: felix@gagnecliche.dev"
          label="felix@gagnecliche.dev"
        >
          <IconEmail
            icon-name="email"
            :size="32"
          />
        </ButtonIcon>
        <ButtonIcon
          class="section-buttons-sms"
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

    <div
      class="contact-form"
      id="contact-email"
    >
      <div class="bevel bevel-container">
        <div class="bevel bevel-inner">
          <FormEmail />
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
const { locale } = useI18n()
</script>

<style lang="scss" scoped>
@use 'sass:map';
.contact {
  @include layout.layout-grid($margins: true);

  &-section {
    @include layout.layout-grid-cell-half;
    @include layout.layout-flex;
    align-self: center;
  }

  &-buttons {
    @include layout.layout-flex;

    & > a {
      padding: 0;
    }
  }

  &-form {
    @include layout.layout-grid-cell-half;
    place-self: center;
    width: 100%;
  }
}

.bevel {
  @include theme.bevel-border(0.25rem, theme.$surface, 1rem);
}
</style>
