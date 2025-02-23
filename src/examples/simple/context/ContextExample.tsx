import { styled } from 'goober'
import { ContextProvider } from './ContextProvider.tsx'
import { CountDisplay } from './components/CountDisplay.tsx'
import { IncrementButton } from './components/IncrementButton.tsx'
import { Fieldset } from '../../Fieldset.tsx'
import { AnotherComponent } from './components/AnotherComponent.tsx'
import { Codeblock } from '../../Codeblock.tsx'

export default function ContextExample() {
  console.log('Rendered: <App />')

  return (
    <ContextProvider>
      <Fieldset>
        <legend>Context.tsx</legend>
        <Codeblock>
          {'export const Context = createContext<{'}
          <br />
          &nbsp;&nbsp;{'count: number'}
          <br />
          &nbsp;&nbsp;{'setCount: Dispatch<SetStateAction<number>>'}
          <br />
          &nbsp;&nbsp;{'someOtherState: string'}
          <br />
          {'}>(null!)'}
        </Codeblock>
      </Fieldset>
      <Fieldset>
        <legend>{'<App />'}</legend>
        <Fieldset>
          <legend>{'<Context.Provider />'}</legend>
          <Div>
            <CountDisplay />
            <IncrementButton />
            <AnotherComponent />
          </Div>
        </Fieldset>
      </Fieldset>
    </ContextProvider>
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
