import { ApplicationServiceError } from "../error/ApplicationServiceError"

export type ApplicationServiceResponse<T> = {
  data: T
  error: null
} | {
  data: null
  error: ApplicationServiceError
}
