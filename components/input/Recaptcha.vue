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
.grecaptcha {
  & div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  @include layout.media-query('xsmall') {
    transform: scale(0.5);
    transform-origin: 0 0;
  }
}
</style>
