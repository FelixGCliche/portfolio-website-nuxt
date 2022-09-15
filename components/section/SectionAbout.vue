<template>
  <section class="section-about">
    <ContentRenderer :value="sectionAbout">
      <h1 class="headline">{{ sectionAbout.headline }}</h1>
      <h2 class="title">{{ sectionAbout.title }}</h2>
      <p class="body">{{ sectionAbout.body }}</p>
      <ButtonPrimary
        class="button-contact"
        :label="sectionAbout.contactLabel"
        url="#contact"
      />
    </ContentRenderer>
  </section>
</template>

<script lang="ts" setup>
const { data: sectionAbout } = await useAsyncData('sectionAbout', () =>
  queryContent('/section/about').locale(useLocale().value).findOne()
)
</script>

<style lang="scss" scoped>
.section-about {
  display: grid;
  gap: 1.5rem;
  margin: 3rem 0;
}
.headline {
  color: theme.$primary;
  overflow: hidden;
}
.headline:after {
  content: '';
  display: inline-block;
  vertical-align: baseline;
  width: 100%;
  margin-right: -100%;
  margin-left: 1rem;
  border-top: 4px solid;
}
.title {
  color: theme.$secondary;
}

.button-contact {
  width: fit-content;
}
</style>
