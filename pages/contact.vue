<template>
  <div class="page-contact">
    <div class="section section-contact">
      <ContentRendererMarkdown :value="contact!" />
    </div>

    <div class="section section-form" id="contact-email">
      <div class="bevel bevel-container">
        <div class="bevel bevel-inner">
          <SectionEmailForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { locale } = useI18n()
const { data: contact } = await useAsyncData('contact', () => {
  return queryContent('/contact')
    .where({ _path: '/contact' })
    .locale(locale.value)
    .findOne()
})

watch(locale, () => {
  refreshNuxtData('contact')
})

onMounted(() => {
  refreshNuxtData('contact')
})
</script>

<style lang="scss" scoped>
.page-contact {
  @include layout.layout-grid {
    grid-row-gap: 4rem;
  }

  @include layout.media-query-min('small') {
  }
}

.section {
  @include layout.responsive-cell-full;
  place-self: center;

  @include layout.media-query-min('small') {
    @include layout.responsive-cell-half;
  }

  &-form {
    width: 100%;
    @include layout.media-query-min('small') {
      @include layout.responsive-cell-half;
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
