import { useContext } from 'react'
import { Fieldset } from '../../../Fieldset.tsx'
import { Codeblock } from '../../../Codeblock.tsx'
import { Context } from '../Context.tsx'

export function CountDisplay() {
  console.log('Rendered: <CountDisplay />')

  const { count } = useContext(Context)

  return (
    <Fieldset>
      <legend>{'<CountDisplay />'}</legend>
      <Codeblock>{'const { count } = useContext(Context)'}</Codeblock>
      <p>Count: {count}</p>
    </Fieldset>
  )
}
