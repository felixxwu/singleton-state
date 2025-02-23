import { useGroupACount } from '../store.ts'
import { Fieldset } from '../../Fieldset.tsx'

export function Child2() {
  console.log('Rendered: Child2.tsx')

  const [count, setCount] = useGroupACount()

  return (
    <Fieldset>
      <legend>Child2.tsx</legend>
      <button onClick={() => setCount(count + 1)}>Increment Count A</button>
    </Fieldset>
  )
}
