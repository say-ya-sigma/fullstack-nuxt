<template>
  <div>
    <div>{{ hello.greeting }}</div>
    <div>{{ hey.greeting }}</div>
    <div>{{ user.name }}</div>
    <div>{{ user.email }}</div>
    <ElButton type="primary"> el button </ElButton>
  </div>
</template>

<script lang="ts">
import { defineNuxtComponent } from '#app'

export default defineNuxtComponent({
  name: 'App',
  async setup () {
    const { $client } = useNuxtApp()
    const hello = await $client.hello.getHello.query({ text: 'new world' })
    const hey = await $client.hello.getHey.query({ text: 'new world' })
    const user = await $client.user.getUser.query({ id: 1 })
    return {
      hello,
      hey,
      user
    }
  }
})
</script>
