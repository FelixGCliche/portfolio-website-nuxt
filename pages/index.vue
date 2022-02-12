<template>
  <div>
    <p v-if="user">Welcome {{ user.username }}!</p>

    <div v-else>
      <h1>Login</h1>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Strapi4Response } from '@nuxtjs/strapi/dist/runtime/types';

const user = useStrapiUser()
const { find } = useStrapi4()

const onFetch = async () => {
  await find<Strapi4Response<any>>('projects')
    .then(res => console.log(res.data))
}

if (user) {
  onFetch()
}
</script>