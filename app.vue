<template>
  <Title>Félix Gagné Cliche</Title>

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts">
declare global {
  interface Window {
    onloadCallback: () => void
    grecaptcha: any
  }
}
</script>

<script lang="ts" setup>
import emailjs from '@emailjs/browser'

emailjs.init(useRuntimeConfig().emailJSUserID)
</script>

<style lang="scss" scoped>
.page-grid {
  display: grid;
}
</style>
