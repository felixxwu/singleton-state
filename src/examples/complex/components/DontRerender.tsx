import { Fieldset } from '../../Fieldset.tsx'

export function DontRerender() {
  console.log('Rendered: DontRerender.tsx')

  return (
    <Fieldset>
      <legend>DontRerender.tsx</legend>
      Child that should not re-render
    </Fieldset>
  )
}
