import { Count } from '../../store.ts'
import { Fieldset } from '../../../Fieldset.tsx'
import { Codeblock } from '../../../Codeblock.tsx'

export function CountDisplay() {
  console.log('Rendered: <CountDisplay />')

  const count = Count.useState()

  return (
    <Fieldset>
      <legend>{'<CountDisplay />'}</legend>
      <Codeblock>const count = Count.useState()</Codeblock>
      <p>Count: {count}</p>
    </Fieldset>
  )
}
