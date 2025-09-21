import { styled } from 'goober'
import { ContextProvider } from './ContextProvider.tsx'
import { CountDisplay } from './components/CountDisplay.tsx'
import { IncrementButton } from './components/IncrementButton.tsx'
import { Fieldset } from '../../Fieldset.tsx'
import { AnotherComponent } from './components/AnotherComponent.tsx'
import { Arg, Br1, Br2, Br3, C, Codeblock, Fn, Kw, Op, T, V } from '../../Codeblock.tsx'

export default function ContextExample() {
  console.log('Rendered: <App />')

  return (
    <ContextProvider>
      <Wrapper>
        <Fieldset>
          <legend>Context.tsx</legend>
          <Codeblock>
            <Kw>export</Kw> <C>const</C> <V>Context</V> <Op>=</Op> <Fn>createContext</Fn>
            <Br1>{'<'}</Br1>
            <Br2>{'{'}</Br2>
            <br />
            &nbsp;&nbsp;<Arg>count</Arg>
            <Op>:</Op> <T>number</T>
            <br />
            &nbsp;&nbsp;<Arg>setCount</Arg>
            <Op>:</Op> <T>Dispatch</T>
            <Br3>{'<'}</Br3>
            <T>SetStateAction</T>
            <Br1>{'<'}</Br1>
            <T>number</T>
            <Br1>{'>'}</Br1>
            <Br3>{'>'}</Br3>
            <br />
            &nbsp;&nbsp;
            <Arg>someOtherState</Arg>
            <Op>:</Op> <T>string</T>
            <br />
            <Br2>{'}'}</Br2>
            <Br1>{'>'}</Br1>
            <Br1>(</Br1>
            <C>null</C>
            <Op>!</Op>
            <Br1>)</Br1>
          </Codeblock>
        </Fieldset>
        <Fieldset>
          <legend>{'<App />'}</legend>
          <Fieldset>
            <legend>{'<Context.Provider />'}</legend>
            <Div>
              <CountDisplay />
              <AnotherComponent />
              <IncrementButton />
            </Div>
          </Fieldset>
        </Fieldset>
      </Wrapper>
    </ContextProvider>
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  text-align: center;
`
