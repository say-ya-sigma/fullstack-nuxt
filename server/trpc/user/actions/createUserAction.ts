import { z } from 'zod'
import { publicProcedure } from '../..'
import { createUserResponder } from '../responders/createUserResponder'
import { createUserService } from '../services/createUserService'
import { TRPCError } from '@trpc/server'

const CreateUser = z.object({
  email: z.string().email(),
  password: z.string(),
})

export type CreateUser = z.infer<typeof CreateUser>

export const createUser = publicProcedure.input(CreateUser).query(async ({ input }) => {
  const result = await createUserService(input)
  if (result.error) {
    throw new TRPCError({
      code: (result.error.code),
      message: result.error.message,
    })
  }
  return createUserResponder(result.data)
})
