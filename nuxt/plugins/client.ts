import { createTRPCNuxtClient, httpBatchLink } from 'trpc-nuxt/client'
import type { AppRouter } from '~/server/trpc/routes'

declare module '#app' {
  interface NuxtApp {
    $client: ReturnType<typeof createTRPCNuxtClient<AppRouter>>
  }
}

export default defineNuxtPlugin(() => {
  const client = createTRPCNuxtClient<AppRouter>({
    links: [
      httpBatchLink({
        url: '/api/trpc'
      })
    ]
  })

  return {
    provide: {
      client
    }
  }
})
