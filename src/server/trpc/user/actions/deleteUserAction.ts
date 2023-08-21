import { z } from 'zod'
import { publicProcedure } from '../..'
import { deleteUserResponder } from '../responders/deleteUserResponder'
import { deleteUserService } from '../services/deleteUserService'
import { TRPCError } from '@trpc/server'

const DeleteUser = z.object({
    id: z.number(),
})

export type DeleteUser = z.infer<typeof DeleteUser>

export const deleteUser = publicProcedure.input(DeleteUser).query(async ({ input }) => {
  const result = await deleteUserService(input)
  if (result.error) {
    throw new TRPCError({
      code: result.error.code,
      message: result.error.message,
    })
  }
  return deleteUserResponder(result.data)
})
