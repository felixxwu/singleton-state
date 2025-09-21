import { useContext, useRef } from 'react'
import { Button } from '../../../Button.tsx'
import { Fieldset } from '../../../Fieldset.tsx'
import { Arg, Arr, Br1, C, Codeblock, Com, Fn, N, Op, Str, V } from '../../../Codeblock.tsx'
import { Context } from '../Context.tsx'

export function IncrementButton() {
  console.log('Rendered: <IncrementButton />')
  const renderCount = useRef(0)
  renderCount.current++

  const { count, setCount } = useContext(Context)

  return (
    <Fieldset>
      <legend>{'<IncrementButton />'}</legend>
      <Codeblock>
        <C>const</C> <Br1>{'{'}</Br1> <V>count</V>
        <Op>,</Op> <Fn>setCount</Fn> <Br1>{'}'}</Br1> <Op>=</Op> <Fn>useContext</Fn>
        <Br1>(</Br1>
        <V>Context</V>
        <Br1>)</Br1>
        <br />
        <Com>// ---</Com>
        <br />
        <Fn>setCount</Fn>
        <Br1>(</Br1>
        <Arg>count</Arg> <Arr>{'=>'}</Arr> <Arg>count</Arg> <Op>+</Op> <N>1</N>
        <Br1>)</Br1>
        <br />
        <Arg>console</Arg>
        <Op>.</Op>
        <Fn>log</Fn>
        <Br1>(</Br1>
        <Str>'count:'</Str>
        <Op>,</Op> <V>count</V>
        <Br1>)</Br1> <Com>// incorrectly logged value</Com>
        <br />
        <Com>
          // Rendered {renderCount.current} time{renderCount.current === 1 ? '' : 's'}
        </Com>
      </Codeblock>
      <p>
        <Button
          onClick={async () => {
            setCount(count => count + 1)
            console.log('count:', count)
          }}
        >
          Increment
        </Button>
      </p>
    </Fieldset>
  )
}
