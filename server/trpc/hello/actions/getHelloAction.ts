import { z } from 'zod'
import { publicProcedure } from '../..'

export const getHello = publicProcedure.input(z.object({ text: z.string().nullish() }).nullish()).query(({ input }) => {
  return {
    greeting: `Hello ${input?.text ?? 'World'}`
  }
})
