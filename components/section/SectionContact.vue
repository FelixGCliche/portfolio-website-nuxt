<template>
  <section class="section-contact">
    <ContentRenderer :value="sectionContact">
      <h2 class="headline">{{ sectionContact.headline }}</h2>
      <p class="body">{{ sectionContact.body }}</p>
    </ContentRenderer>
  </section>
</template>

<script lang="ts" setup>
const { data: sectionContact } = await useAsyncData('sectionContact', () =>
  queryContent('/section/contact').locale(useLocale().value).findOne()
)
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
</style>
