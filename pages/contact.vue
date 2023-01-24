<template>
  <main class="page-contact">
    <section class="section">
      <ContentDoc
        path="/contact"
        :locale="locale"
        v-slot="{ doc }"
      >
        <ContentRenderer
          class="section-content"
          :value="doc"
        />
      </ContentDoc>
      <div class="section-buttons">
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
      class="section section-form"
      id="contact-email"
    >
      <div class="bevel bevel-container">
        <div class="bevel bevel-inner">
          <ContentDoc
            path="/contact/#contact-email"
            :locale="locale"
            :head="false"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
const { locale } = useI18n()
</script>

<style lang="scss" scoped>
.page-contact {
  @include layout.layout-grid {
    grid-row-gap: 4rem;
  }
}

.section {
  @include layout.responsive-cell-half-mobile;
  place-self: center;
  display: flex;
  flex-flow: column nowrap;
  gap: 1.5rem;

  &-content {
    display: flex;
    flex-flow: column nowrap;
    gap: 1.5rem;
    padding: 2rem 0;

    &:deep(h2) {
      color: theme.$primary;
      @include theme.typography-baseline;
    }
  }

  &-buttons {
    display: flex;
    flex-flow: column nowrap;
    gap: 1rem;

    &-email,
    &-sms {
      width: fit-content;
      padding: 0;
    }
  }

  &-form {
    width: 100%;
    @include layout.responsive-cell-half-mobile;
  }
}

.bevel {
  &-container {
    @include theme.bevel(theme.$surface, 16px);
    padding: 4px;
  }
  &-inner {
    @include theme.bevel(theme.$background, 16 - 1px);
    padding: 2rem;
  }
}
</style>
