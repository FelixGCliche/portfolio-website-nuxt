<template>
  <p>hello world</p>
</template>

<script lang="ts" setup>
const {login} = useStrapiUser()
console.log(login)
</script>
