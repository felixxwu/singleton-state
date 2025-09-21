import { styled } from 'goober'
import { IncrementButton } from './components/IncrementButton.tsx'
import { CountDisplay } from './components/CountDisplay.tsx'
import { Fieldset } from '../../Fieldset.tsx'
import { AnotherComponent } from './components/AnotherComponent.tsx'
import {
  Codeblock,
  C,
  Fn,
  Kw,
  Op,
  V,
  N,
  Br1,
  Str,
  Br2,
  Br3,
  Arg,
  Arr,
  Com,
} from '../../Codeblock.tsx'
import { DoubleCountDisplay } from './components/DoubleCountDisplay.tsx'
import { useRef } from 'react'

export default function SingletonStateExample() {
  console.log('Rendered: <App />')
  const renderCount = useRef(0)
  renderCount.current++

  return (
    <Wrapper>
      <Fieldset>
        <legend>store.ts</legend>
        <Codeblock>
          <Kw>export</Kw> <C>const</C> <V>Count</V> <Op>=</Op> <Fn>singletonState</Fn>
          <Br1>(</Br1>
          <N>0</N>
          <Br1>)</Br1>
          <br />
          <Kw>export</Kw> <C>const</C> <V>SomeOtherState</V> <Op>=</Op> <Fn>singletonState</Fn>
          <Br1>(</Br1>
          <Str>''</Str>
          <Br1>)</Br1>
          <br />
          <Kw>export</Kw> <C>const</C> <V>DoubleCount</V> <Op>=</Op> <Fn>computed</Fn>
          <Br1>(</Br1>
          <Br2>{'{'}</Br2> <Arg>Count</Arg> <Br2>{'}'}</Br2>, <Br2>(</Br2>
          <Br3>{'{'}</Br3> <Arg>Count</Arg> <Br3>{'}'}</Br3>
          <Br2>)</Br2> <Arr>{'=>'}</Arr> <Arg>Count</Arg> <Op>*</Op> <N>2</N>
          <Br1>)</Br1>
        </Codeblock>
      </Fieldset>
      <Fieldset>
        <legend>{'<App />'}</legend>
        <Div>
          <Codeblock>
            <Com>
              // Rendered {renderCount.current} time{renderCount.current === 1 ? '' : 's'}
            </Com>
          </Codeblock>
          <CountDisplay />
          <DoubleCountDisplay />
          <AnotherComponent />
          <IncrementButton />
        </Div>
      </Fieldset>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  width: 100%;
  max-width: 750px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`

const Div = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: left;
`
