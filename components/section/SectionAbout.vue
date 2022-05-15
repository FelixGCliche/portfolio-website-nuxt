<template>
  <section class="section-about">
    <h1 class="headline"></h1>
    <h2 class="title"></h2>
    <p class="body biography"></p>
  </section>
</template>

<script lang="ts" setup>
const { fetch } = useStrapi()

const t = await fetch('home').then(res => console.log(JSON.stringify(res)))
</script>
