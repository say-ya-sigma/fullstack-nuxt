import { z } from 'zod'
import { publicProcedure } from '../..'

export const getHey = publicProcedure.input(z.object({ text: z.string().nullish() }).nullish()).query(({ input }) => {
  return {
    greeting: `Hey ${input?.text ?? 'World'}`
  }
})
