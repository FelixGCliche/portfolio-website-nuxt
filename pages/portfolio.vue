<template>
  <ContentDoc
    path="/portfolio"
    :locale="locale"
  />
</template>

<script lang="ts" setup>
const { locale } = useI18n()
</script>
