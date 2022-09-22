<template>
  <div :id="props.containerId" class="grecaptcha"></div>
  <Script
    src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
    :async="true"
    :defer="true"
  />
</template>

<script lang="ts" setup>
const props = defineProps({ ...useRecaptchaProps() })

onMounted(() => {
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
@include layout.media-query('xsmall') {
  .grecaptcha {
    transform: scale(0.66);
    transform-origin: 0 0;
  }
}
</style>
