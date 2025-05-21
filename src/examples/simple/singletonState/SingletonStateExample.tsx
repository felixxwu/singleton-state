import { styled } from 'goober'
import { IncrementButton } from './components/IncrementButton.tsx'
import { CountDisplay } from './components/CountDisplay.tsx'
import { Fieldset } from '../../Fieldset.tsx'
import { AnotherComponent } from './components/AnotherComponent.tsx'
import { Codeblock } from '../../Codeblock.tsx'
import { DoubleCountDisplay } from './components/DoubleCountDisplay.tsx'
import { Button } from '../../Button.tsx'
import { resetAllStates } from 'singleton-state-hook'

export default function SingletonStateExample() {
  console.log('Rendered: <App />')

  return (
    <>
      <Fieldset>
        <legend>store.ts</legend>
        <Codeblock>
          export const Count = singletonState(0)
          <br />
          export const SomeOtherState = singletonState('')
          <br />
          export const DoubleCount = computed(Count, count =&gt; count * 2)
        </Codeblock>
      </Fieldset>
      <Fieldset>
        <legend>{'<App />'}</legend>
        <Div>
          <CountDisplay />
          <IncrementButton />
          <AnotherComponent />
          <DoubleCountDisplay />
          <Button onClick={() => resetAllStates()}>Reset store</Button>
        </Div>
      </Fieldset>
    </>
  )
}

const Div = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  text-align: center;
`
