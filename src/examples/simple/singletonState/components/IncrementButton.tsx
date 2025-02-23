import { useCount } from '../../store.ts'
import { Fieldset } from '../../../Fieldset.tsx'
import { Button } from '../../../Button.tsx'
import { Codeblock } from '../../../Codeblock.tsx'

export function IncrementButton() {
  console.log('Rendered: <IncrementButton />')

  const [, setCount] = useCount()

  return (
    <Fieldset>
      <legend>{'<IncrementButton />'}</legend>
      <Codeblock>const [count, setCount] = useCount()</Codeblock>
      <p>
        <Button onClick={() => setCount(count => count + 1)}>Increment</Button>
      </p>
    </Fieldset>
  )
}
