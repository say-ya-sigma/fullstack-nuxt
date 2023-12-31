import { User } from "@prisma/client"
import { prisma } from "../.."
import { ApplicationServiceError } from "../../error/ApplicationServiceError"
import { ApplicationServiceResponse } from "../../types/ApplicationService"
import { CreateUser } from "../actions/createUserAction"

export const createUserService = async (createUser: CreateUser): Promise<ApplicationServiceResponse<User>> => {
  try {
    const created = await prisma.user.create({
      data: {
        email: createUser.email,
        password: createUser.password
      }
    })
    return {
      data: created,
      error: null
    }
  } catch (error) {
    console.error(error)
    return {
      data: null,
      error: new ApplicationServiceError('failed prisma.user.create', 'INTERNAL_SERVER_ERROR')
    }
  }
}