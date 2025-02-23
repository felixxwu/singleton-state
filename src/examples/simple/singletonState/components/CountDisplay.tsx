import { useCount } from '../../store.ts'
import { Fieldset } from '../../../Fieldset.tsx'
import { Codeblock } from '../../../Codeblock.tsx'

export function CountDisplay() {
  console.log('Rendered: <CountDisplay />')

  const [count] = useCount()

  return (
    <Fieldset>
      <legend>{'<CountDisplay />'}</legend>
      <Codeblock>const [count] = useCount()</Codeblock>
      <p>Count: {count}</p>
    </Fieldset>
  )
}
