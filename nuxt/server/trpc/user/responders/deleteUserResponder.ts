import { User } from '@prisma/client'

export const deleteUserResponder = (user: User) => {
  return {
    id: user.id
  }
}
