<template>
  <div class="portfolio">
    <ContentList
      path="portfolio"
      :locale="locale"
      :query="{ sort: { year: -1 } }"
      v-slot="{ list }"
    >
      <PortfolioListItem
        v-for="project in list"
        :key="project._path"
        :project="project"
      />
    </ContentList>
  </div>
</template>

<script lang="ts" setup>
const { locale } = useI18n()
</script>

<style lang="scss" scoped>
.portfolio {
  @include layout.layout-grid($margins: true) {
    margin: 12vh 0;
    grid-row-gap: 50vh;

    @include layout.media-query('xsmall') {
      margin: 0;
    }
  }
}
</style>
