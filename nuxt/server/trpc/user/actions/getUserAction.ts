import { z } from 'zod'
import { publicProcedure } from '../..'
import { getUserResponder } from '../responders/getUserResponder'
import { getUserService } from '../services/getUserService'
import { TRPCError } from '@trpc/server'

const GetUser = z.object({
    id: z.number(),
})

export type GetUser = z.infer<typeof GetUser>

export const getUser = publicProcedure.input(GetUser).query(async ({ input }) => {
  const result = await getUserService(input)
  if (result.error) {
    throw new TRPCError({
      code: result.error.code,
      message: result.error.message,
    })
  }
  return getUserResponder(result.data)
})
