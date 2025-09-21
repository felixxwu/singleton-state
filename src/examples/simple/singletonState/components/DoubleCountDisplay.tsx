import { DoubleCount } from '../../store.ts'
import { Fieldset } from '../../../Fieldset.tsx'
import { Br1, C, Codeblock, Com, Fn, Op, V } from '../../../Codeblock.tsx'
import { useRef } from 'react'

export function DoubleCountDisplay() {
  console.log('Rendered: <DoubleCountDisplay />')
  const renderCount = useRef(0)
  renderCount.current++

  const doubleCount = DoubleCount.useState()

  return (
    <Fieldset>
      <legend>{'<DoubleCountDisplay />'}</legend>
      <Codeblock>
        <C>const</C> <V>doubleCount</V> <Op>=</Op> <V>DoubleCount</V>
        <Op>.</Op>
        <Fn>useState</Fn>
        <Br1>()</Br1> <Com>// value: {doubleCount}</Com>
        <br />
        <Com>
          // Rendered {renderCount.current} time{renderCount.current === 1 ? '' : 's'}
        </Com>
      </Codeblock>
    </Fieldset>
  )
}
