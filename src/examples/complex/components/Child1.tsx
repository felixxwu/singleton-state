import { useGroupACount } from '../store.ts'
import { Fieldset } from '../../Fieldset.tsx'

export function Child1() {
  console.log('Rendered: Child1.tsx')

  const [count, setCount] = useGroupACount()

  return (
    <Fieldset>
      <legend>Child1.tsx</legend>
      <button onClick={() => setCount(count + 1)}>Increment Count A</button>
    </Fieldset>
  )
}
