import { Fieldset } from '../../../Fieldset.tsx'
import { SomeOtherState } from '../../store.ts'
import { Br1, C, Codeblock, Com, Fn, Op, V } from '../../../Codeblock.tsx'
import { useRef } from 'react'

export function AnotherComponent() {
  console.log('Rendered: <AnotherComponent />')
  const renderCount = useRef(0)
  renderCount.current++

  const someOtherState = SomeOtherState.useState()

  return (
    <Fieldset>
      <legend>{'<AnotherComponent />'}</legend>
      <Codeblock>
        <C>const</C> <V>someOtherState</V> <Op>=</Op> <V>SomeOtherState</V>
        <Op>.</Op>
        <Fn>useState</Fn>
        <Br1>()</Br1> <Com>// value: '{someOtherState}'</Com>
        <br />
        <Com>
          // Rendered {renderCount.current} time{renderCount.current === 1 ? '' : 's'}
        </Com>
      </Codeblock>
    </Fieldset>
  )
}
