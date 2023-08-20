import { User } from '@prisma/client'

export const createUserResponder = (user: User) => {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
  }
}
