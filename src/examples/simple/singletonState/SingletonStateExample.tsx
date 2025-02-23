import { styled } from 'goober'
import { IncrementButton } from './components/IncrementButton.tsx'
import { CountDisplay } from './components/CountDisplay.tsx'
import { Fieldset } from '../../Fieldset.tsx'
import { AnotherComponent } from './components/AnotherComponent.tsx'
import { Codeblock } from '../../Codeblock.tsx'

export default function SingletonStateExample() {
  console.log('Rendered: <App />')

  return (
    <>
      <Fieldset>
        <legend>store.ts</legend>
        <Codeblock>
          export const useCount = singletonState(0)
          <br />
          export const useSomeOtherState = singletonState('')
        </Codeblock>
      </Fieldset>
      <Fieldset>
        <legend>{'<App />'}</legend>
        <Div>
          <CountDisplay />
          <IncrementButton />
          <AnotherComponent />
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
