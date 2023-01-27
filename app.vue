<template>
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
const { locale } = useI18n()
const { translations, setTranslations } = useTranslations()

emailjs.init(useRuntimeConfig().emailJSUserID)

await useLazyAsyncData('translation', async () => {
  const content = await queryContent('/translations')
    .locale(locale.value)
    .where({ _partial: true })
    .without([
      '_path',
      '_dir',
      '_draft',
      '_partial',
      '_locale',
      'title',
      'navigation',
      '_id',
      '_type',
      '_source',
      '_file',
      '_extension'
    ])
    .findOne()
  setTranslations(content)
})
</script>
