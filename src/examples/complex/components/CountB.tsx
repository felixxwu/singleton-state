import { useGroupBCount } from '../store.ts'
import { Fieldset } from '../../Fieldset.tsx'

export function CountB() {
  console.log('Rendered: CountB.tsx')

  const [count] = useGroupBCount()
  return (
    <Fieldset>
      <legend>CountB.tsx</legend>
      Count B: {count}
    </Fieldset>
  )
}
