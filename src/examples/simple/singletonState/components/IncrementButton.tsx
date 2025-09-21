import { Count } from '../../store.ts'
import { Fieldset } from '../../../Fieldset.tsx'
import { Button } from '../../../Button.tsx'
import { Arg, Arr, Br1, Br2, Codeblock, Com, Fn, N, Op, Str, V } from '../../../Codeblock.tsx'
import { useRef } from 'react'

export function IncrementButton() {
  console.log('Rendered: <IncrementButton />')
  const renderCount = useRef(0)
  renderCount.current++

  return (
    <Fieldset>
      <legend>{'<IncrementButton />'}</legend>
      <Codeblock>
        <V>Count</V>
        <Op>.</Op>
        <Fn>set</Fn>
        <Br1>(</Br1>
        <Arg>count</Arg> <Arr>{'=>'}</Arr> <Arg>count</Arg> <Op>+</Op> <N>1</N> <Br1>)</Br1>
        <br />
        <Arg>console</Arg>
        <Op>.</Op>
        <Fn>log</Fn>
        <Br1>(</Br1>
        <Str>'count:'</Str>
        <Op>,</Op> <V>Count</V>
        <Op>.</Op>
        <Fn>ref</Fn>
        <Br2>()</Br2>
        <Br1>)</Br1> <Com>// correctly logged value</Com>
        <br />
        <Com>
          // Rendered {renderCount.current} time{renderCount.current === 1 ? '' : 's'}
        </Com>
      </Codeblock>
      <p>
        <Button
          onClick={() => {
            Count.set(count => count + 1)
            console.log('count:', Count.ref())
          }}
        >
          Increment
        </Button>
      </p>
    </Fieldset>
  )
}
