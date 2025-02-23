import { styled } from 'goober'
import { ContextProvider } from './ContextProvider.tsx'
import { CountDisplay } from './components/CountDisplay.tsx'
import { IncrementButton } from './components/IncrementButton.tsx'
import { Fieldset } from '../../Fieldset.tsx'
import { AnotherComponent } from './components/AnotherComponent.tsx'

export default function ContextExample() {
  console.log('Rendered: <App />')

  return (
    <ContextProvider>
      <>
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
      </>
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
