import { router } from '..'
import { createUser } from './actions/createUserAction'
import { deleteUser } from './actions/deleteUserAction'

export const user = router({
  createUser,
  deleteUser
})
