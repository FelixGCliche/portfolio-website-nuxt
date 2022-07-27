<template>
  <section class="section-about">
    <h1 class="headline">{{ home.attributes.title }}</h1>
    <h2 class="title">{{ home.attributes.headline }}</h2>
    <p class="body biography">{{ home.attributes.biography }}</p>
    <ButtonPrimary class="button-contact" label="Contact Me" />
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
  gap: 1.5rem;
  margin: 3rem 0;
}
.headline {
  color: theme.$primary;
  overflow: hidden;
}
.headline:after {
  content: '';
  display: inline-block;
  vertical-align: baseline;
  width: 100%;
  margin-right: -100%;
  margin-left: 1rem;
  border-top: 4px solid;
}
.title {
  color: theme.$secondary;
}

.button-contact {
  width: fit-content;
}
</style>
