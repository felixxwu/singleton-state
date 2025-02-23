import { useGroupBCount } from '../store.ts'
import { Fieldset } from '../../Fieldset.tsx'

export function Child4() {
  console.log('Rendered: Child4.tsx')

  const [count, setCount] = useGroupBCount()

  return (
    <Fieldset>
      <legend>Child4.tsx</legend>
      <button onClick={() => setCount(count + 1)}>Increment Count B</button>
    </Fieldset>
  )
}
