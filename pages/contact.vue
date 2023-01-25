<template>
  <main class="contact">
    <section class="section contact-section">
      <ContentDoc
        path="/contact"
        :locale="locale"
        v-slot="{ doc: contact }"
      >
        <ContentRenderer
          class="section-content contact-section-content"
          :value="contact"
        />
      </ContentDoc>
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

    <!-- <div
      class="contact-form"
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
    </div> -->
  </main>
</template>

<script lang="ts" setup>
const { locale } = useI18n()
</script>

<style lang="scss" scoped>
@use 'sass:map';

@each $size in map.keys(layout.$breakpoints) {
  @include layout.media-query($size) {
    .contact {
      @include layout.layout-grid;

      &-section {
        @include layout.layout-grid-cell-half;
      }

      &-buttons {
        display: flex;
        flex-flow: column nowrap;
        gap: 1rem;

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
