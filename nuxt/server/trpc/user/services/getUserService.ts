import { Prisma, User } from "@prisma/client"
import { ApplicationServiceError, ApplicationServiceResponse, prisma } from "../.."
import { GetUser } from "../actions/getUserAction"

export const getUserService = async (getUser: GetUser): Promise<ApplicationServiceResponse<User>> => {
  try {
    const user = await prisma.user.findFirstOrThrow({
      where: {
        id: getUser.id
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