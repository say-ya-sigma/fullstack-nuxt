import { router } from '..'
import { createUser } from './actions/createUserAction'
import { deleteUser } from './actions/deleteUserAction'
import { getUser } from './actions/getUserAction'

export const user = router({
  createUser,
  deleteUser,
  getUser
})
