import { Count } from '../../store.ts'
import { Fieldset } from '../../../Fieldset.tsx'
import { Br1, C, Codeblock, Com, Fn, Op, V } from '../../../Codeblock.tsx'
import { useRef } from 'react'

export function CountDisplay() {
  console.log('Rendered: <CountDisplay />')
  const renderCount = useRef(0)
  renderCount.current++

  const count = Count.useState()

  return (
    <Fieldset>
      <legend>{'<CountDisplay />'}</legend>
      <Codeblock>
        <C>const</C> <V>count</V> <Op>=</Op> <V>Count</V>
        <Op>.</Op>
        <Fn>useState</Fn>
        <Br1>()</Br1> <Com>// value: {count}</Com>
        <br />
        <Com>
          // Rendered {renderCount.current} time{renderCount.current === 1 ? '' : 's'}
        </Com>
      </Codeblock>
    </Fieldset>
  )
}
