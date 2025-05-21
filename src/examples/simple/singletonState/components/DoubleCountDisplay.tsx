import { DoubleCount } from '../../store.ts'
import { Fieldset } from '../../../Fieldset.tsx'
import { Codeblock } from '../../../Codeblock.tsx'

export function DoubleCountDisplay() {
  console.log('Rendered: <DoubleCountDisplay />')

  const count = DoubleCount.useState()

  return (
    <Fieldset>
      <legend>{'<DoubleCountDisplay />'}</legend>
      <Codeblock>const count = DoubleCount.useState()</Codeblock>
      <p>Count: {count}</p>
    </Fieldset>
  )
}
