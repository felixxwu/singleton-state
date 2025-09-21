import { useContext, useRef } from 'react'
import { Fieldset } from '../../../Fieldset.tsx'
import { Br1, C, Codeblock, Com, Fn, Op, V } from '../../../Codeblock.tsx'
import { Context } from '../Context.tsx'

export function CountDisplay() {
  console.log('Rendered: <CountDisplay />')
  const renderCount = useRef(0)
  renderCount.current++

  const { count } = useContext(Context)

  return (
    <Fieldset>
      <legend>{'<CountDisplay />'}</legend>
      <Codeblock>
        <C>const</C> <Br1>{'{'}</Br1> <V>count</V> <Br1>{'}'}</Br1> <Op>=</Op> <Fn>useContext</Fn>
        <Br1>(</Br1>
        <V>Context</V>
        <Br1>)</Br1> <Com>// value: {count}</Com>
        <br />
        <Com>
          // Rendered {renderCount.current} time{renderCount.current === 1 ? '' : 's'}
        </Com>
      </Codeblock>
    </Fieldset>
  )
}
