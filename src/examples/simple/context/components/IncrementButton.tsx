import { useContext } from 'react'
import { Button } from '../../../Button.tsx'
import { Fieldset } from '../../../Fieldset.tsx'
import { Codeblock } from '../../../Codeblock.tsx'
import { Context } from '../Context.tsx'

export function IncrementButton() {
  console.log('Rendered: <IncrementButton />')

  const { setCount } = useContext(Context)

  return (
    <Fieldset>
      <legend>{'<IncrementButton />'}</legend>
      <Codeblock>{'const { setCount } = useContext(Context)'}</Codeblock>
      <p>
        <Button onClick={() => setCount(count => count + 1)}>Increment</Button>
      </p>
    </Fieldset>
  )
}
