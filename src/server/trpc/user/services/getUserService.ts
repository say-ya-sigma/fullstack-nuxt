import { Prisma, User } from "@prisma/client"
import { ApplicationServiceError, ApplicationServiceResponse, prisma } from "../.."
import { DeleteUser } from "../actions/deleteUserAction"

export const getUserService = async (deleteUser: DeleteUser): Promise<ApplicationServiceResponse<User>> => {
  try {
    const user = await prisma.user.findFirstOrThrow({
      where: {
        id: deleteUser.id
      }
    })
    return {
      data: user,
      error: null
    }
  } catch (error) {
    console.error(error)
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
      return {
        data: null,
        error: new ApplicationServiceError('user not found', 'NOT_FOUND')
      }
    }
    return {
      data: null,
      error: new ApplicationServiceError('failed prisma.user.delete', 'INTERNAL_SERVER_ERROR')
    }
  }
}