<template>
  <div>
    <Title>Félix Gagné Cliche {{ locale }}</Title>

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
const locale = useLocale()

useHead({
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8'
})
</script>
