import { initTRPC } from '@trpc/server'
import { z } from 'zod'

export const t = initTRPC.create()

export const appRouter = t.router({
  hello: t.procedure.input(z.object({ text: z.string().nullish()}).nullish()).query(({ input }) => {
    return {
      greeting: `Hello ${input?.text ?? 'World'}`,
    }
  }),
})

export type AppRouter = typeof appRouter