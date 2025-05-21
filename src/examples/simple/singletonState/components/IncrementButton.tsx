import { Count } from '../../store.ts'
import { Fieldset } from '../../../Fieldset.tsx'
import { Button } from '../../../Button.tsx'
import { Codeblock } from '../../../Codeblock.tsx'

export function IncrementButton() {
  console.log('Rendered: <IncrementButton />')

  return (
    <Fieldset>
      <legend>{'<IncrementButton />'}</legend>
      <Codeblock>Count.set(count =&gt; count + 1)</Codeblock>
      <p>
        <Button onClick={() => Count.set(count => count + 1)}>Increment</Button>
      </p>
    </Fieldset>
  )
}
