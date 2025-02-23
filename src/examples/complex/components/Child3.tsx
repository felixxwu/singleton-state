import { useGroupBCount } from '../store.ts'
import { Fieldset } from '../../Fieldset.tsx'

export function Child3() {
  console.log('Rendered: Child3.tsx')

  const [count, setCount] = useGroupBCount()

  return (
    <Fieldset>
      <legend>Child3.tsx</legend>
      <button onClick={() => setCount(count + 1)}>Increment Count B</button>
    </Fieldset>
  )
}
