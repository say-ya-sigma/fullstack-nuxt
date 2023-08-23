import { User } from '@prisma/client'

export const getUserResponder = (user: User) => {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
  }
}
