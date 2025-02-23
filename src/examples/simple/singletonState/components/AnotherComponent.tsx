import { Fieldset } from '../../../Fieldset.tsx'
import { useSomeOtherState } from '../../store.ts'
import { Codeblock } from '../../../Codeblock.tsx'

export function AnotherComponent() {
  console.log('Rendered: <AnotherComponent />')

  const [someOtherState] = useSomeOtherState()

  return (
    <Fieldset>
      <legend>{'<AnotherComponent />'}</legend>
      <Codeblock>const [someOtherState] = useSomeOtherState()</Codeblock>
      <p>{someOtherState}</p>
    </Fieldset>
  )
}
