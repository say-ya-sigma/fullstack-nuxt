// Import your router:
import { appRouter } from '../../trpc/routes'

import { createNuxtApiHandler } from 'trpc-nuxt'

// Export as default the defineNitroTRPCEventHandler function:
export default createNuxtApiHandler({
  router: appRouter,
  createContext: () => {
    // Return your custom defined context here:
    return {}
  }
})
