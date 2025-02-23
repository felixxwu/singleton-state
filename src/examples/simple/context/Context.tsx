import { createContext, Dispatch, SetStateAction } from 'react'

export const Context = createContext<{
  count: number
  setCount: Dispatch<SetStateAction<number>>
  someOtherState: string
}>(null!)
