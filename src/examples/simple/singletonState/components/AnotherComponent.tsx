import { Fieldset } from '../../../Fieldset.tsx'
import { SomeOtherState } from '../../store.ts'
import { Codeblock } from '../../../Codeblock.tsx'

export function AnotherComponent() {
  console.log('Rendered: <AnotherComponent />')

  const someOtherState = SomeOtherState.useState()

  return (
    <Fieldset>
      <legend>{'<AnotherComponent />'}</legend>
      <Codeblock>const someOtherState = SomeOtherState.useState()</Codeblock>
      <p>{someOtherState}</p>
    </Fieldset>
  )
}
