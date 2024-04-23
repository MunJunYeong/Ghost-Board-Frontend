import { getAccessorType } from 'typed-vuex'
import * as signIn from '@/store/signIn'
 
const initialStore = () => ({
  modules: {
    signIn
  }
})
 
export const accessorType = getAccessorType(initialStore())