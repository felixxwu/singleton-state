import { useGroupACount, useGroupBCount } from '../store.ts'
import { Fieldset } from '../../Fieldset.tsx'

export function TotalCount() {
  console.log('Rendered: TotalCount.tsx')

  const [countA] = useGroupACount()
  const [countB] = useGroupBCount()

  return (
    <Fieldset>
      <legend>TotalCount.tsx</legend>
      Count A+B: {countA + countB}
    </Fieldset>
  )
}
