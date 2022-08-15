<template>
  <input type="text" />
</template>

<script lang="ts" setup>
import { useBaseInputFieldProps } from '~~/composables/useInputFieldProps'
defineProps({
  ...useBaseInputFieldProps()
})
</script>
