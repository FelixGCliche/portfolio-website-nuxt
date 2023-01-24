<template>
  <ContentDoc
    :path="`/portfolio/projects/${$route.params.id}`"
    :locale="locale"
  />
</template>

<script lang="ts" setup>
const { locale } = useI18n()
</script>
