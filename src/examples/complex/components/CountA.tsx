import { useGroupACount } from '../store.ts'
import { Fieldset } from '../../Fieldset.tsx'

export function CountA() {
  console.log('Rendered: CountA.tsx')

  const [count] = useGroupACount()
  return (
    <Fieldset>
      <legend>CountA.tsx</legend>
      Count A: {count}
    </Fieldset>
  )
}
