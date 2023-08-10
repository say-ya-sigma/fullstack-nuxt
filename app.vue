<template>
  <div>
    {{ hello.greeting }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  async setup() {
    const { $client } = useNuxtApp()
    const hello = await $client.hello.query({ text: 'Hello' })
    return {
      hello
    }
  },
})
</script>
