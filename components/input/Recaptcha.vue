<template>
  <div :id="props.containerId" class="grecaptcha"></div>
</template>

<script lang="ts" setup>
const props = defineProps({ ...useRecaptchaProps() })

useHead({
  script: [
    {
      src: 'https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit',
      async: true,
      defer: true,
      tagPosition: 'bodyClose'
    }
  ]
})

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
.grecaptcha {
  @include layout.media-query('xsmall') {
    transform: scale(0.66);
    transform-origin: 0 0;
  }
}
</style>
