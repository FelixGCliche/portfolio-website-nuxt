<template>
  <section class="section-contact">
    <!-- <ContentRenderer :value="sectionContact">
      <h2 class="headline">{{ sectionContact.headline }}</h2>
      <p class="body">{{ sectionContact.body }}</p>
    </ContentRenderer> -->
    <div class="contact-buttons">
      <ButtonIcon
        class="button-email"
        url="mailto: felix@gagnecliche.dev"
        label="felix@gagnecliche.dev"
      >
        <IconEmail icon-name="email" :size="32" />
      </ButtonIcon>
      <ButtonIcon
        class="button-sms"
        url="tel: 418-805-6251"
        label="(418) 805-6251"
      >
        <IconSMS icon-name="sms" :size="32" />
      </ButtonIcon>
    </div>
  </section>
</template>

<script lang="ts" setup>
// const { data: sectionContact } = await useAsyncData('sectionContact', () =>
//   queryContent('/section/contact').locale(useLocale().value).findOne()
// )
</script>

<style lang="scss" scoped>
.section-contact {
  display: grid;
  gap: 1.5rem;
  margin: 3rem 0;
}
.headline {
  color: theme.$secondary;
}

.contact-buttons {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  gap: 1rem;
}

.button-email,
.button-sms {
  width: fit-content;
  padding: 0;
}
</style>
