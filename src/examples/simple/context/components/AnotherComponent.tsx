import { useContext } from 'react'
import { Fieldset } from '../../../Fieldset.tsx'
import { Codeblock } from '../../../Codeblock.tsx'
import { Context } from '../Context.tsx'

export function AnotherComponent() {
  console.log('Rendered: <AnotherComponent />')

  const { someOtherState } = useContext(Context)

  return (
    <Fieldset>
      <legend>{'<AnotherComponent />'}</legend>
      <Codeblock>{'const { someOtherState } = useContext(Context)'}</Codeblock>
      <p>{someOtherState}</p>
    </Fieldset>
  )
}
