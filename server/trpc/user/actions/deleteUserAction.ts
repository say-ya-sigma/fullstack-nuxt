import { z } from 'zod'
import { prisma, publicProcedure } from '../..'
import { deleteUserResponder } from '../responders/deleteUserResponder'

const DeleteUser = z.object({
    id: z.number(),
})

export type DeleteUser = z.infer<typeof DeleteUser>

export const deleteUser = publicProcedure.input(DeleteUser).query(async ({ input }) => {
  const deleted = await prisma.user.delete({
    where: {
      id: input.id
    }
  })
  return deleteUserResponder(deleted)
})
