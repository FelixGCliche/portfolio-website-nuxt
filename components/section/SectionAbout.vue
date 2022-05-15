<template>
  <section class="section-about">
    <h1 class="headline">{{ home.attributes.title }}</h1>
    <h2 class="title">{{ home.attributes.headline }}</h2>
    <p class="body biography">{{ home.attributes.biography }}</p>
  </section>
</template>

<script lang="ts" setup>
import type { Home } from 'types/Strapi'

const { fetch } = useStrapi()
const home = ref()
try {
  home.value = (await fetch<Home>('home')).data
} catch (error) {
  console.log(error.message)
}
</script>

<style lang="scss" scoped>
.section-about {
  display: flex;
  flex-flow: column nowrap;
}
</style>
