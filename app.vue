<template>
  <div>
    <div>{{ hello.greeting }}</div>
    <div>{{ hey.greeting }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  async setup () {
    const { $client } = useNuxtApp()
    const hello = await $client.hello.getHello.query({ text: 'new world' })
    const hey = await $client.hello.getHey.query({ text: 'new world' })
    return {
      hello,
      hey
    }
  }
})
</script>
