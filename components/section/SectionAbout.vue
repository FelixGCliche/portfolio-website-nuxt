<template>
  <section class="section-about">
    <ContentRenderer :value="about">
      <h1 class="headline">{{ about.headline }}</h1>
      <h2 class="title">{{ about.title }}</h2>
      <p class="body">{{ about.description }}</p>
      <ButtonPrimary
        class="button-contact"
        :label="about.contactLabel"
        url="/contact"
      />
    </ContentRenderer>
  </section>
</template>

<script lang="ts" setup>
const { data: about } = await useAsyncData('about', () =>
  queryContent('/section/about').locale(useLocale().value).findOne()
)
</script>

<style lang="scss" scoped>
.section-about {
  display: flex;
  flex-flow: column nowrap;
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
