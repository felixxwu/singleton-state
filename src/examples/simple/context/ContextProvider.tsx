import React, { useState } from 'react'
import { Context as Context1 } from './Context.tsx'

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState(0)
  const someOtherState = ''

  return <Context1 value={{ count, setCount, someOtherState }}>{children}</Context1>
}
