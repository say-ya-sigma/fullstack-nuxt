import { Prisma, User } from "@prisma/client"
import { prisma } from "../.."
import { ApplicationServiceError } from "../../error/ApplicationServiceError"
import { ApplicationServiceResponse } from "../../types/ApplicationService"
import { DeleteUser } from "../actions/deleteUserAction"

export const deleteUserService = async (deleteUser: DeleteUser): Promise<ApplicationServiceResponse<User>> => {
  try {
    const deleted = await prisma.user.delete({
      where: {
        id: deleteUser.id
      }
    })
    return {
      data: deleted,
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