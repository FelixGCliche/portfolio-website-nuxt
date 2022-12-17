<template>
  <div :id="props.containerId" class="grecaptcha"></div>
</template>

<script lang="ts" setup>
const props = defineProps({ ...useRecaptchaProps() })

onMounted(() => {
  const recaptchaScript = document.createElement('script')
  recaptchaScript.src =
    'https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit'
  recaptchaScript.async = true
  recaptchaScript.defer = true

  window.onloadCallback = function () {
    window.grecaptcha.render(props.containerId, {
      sitekey: useRuntimeConfig().grecaptchaSiteKey,
      theme: props.theme,
      size: props.size,
      callback: props.callback
    })
  }
})
</script>

<style lang="scss">
.grecaptcha {
  @include layout.media-query('xsmall') {
    transform: scale(0.66);
    transform-origin: 0 0;
  }
}
</style>
