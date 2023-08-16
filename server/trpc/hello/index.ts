import { router } from '..'
import { getHello } from './actions/getHelloAction'
import { getHey } from './actions/getHeyAction'

export const hello = router({
  getHello,
  getHey
})
