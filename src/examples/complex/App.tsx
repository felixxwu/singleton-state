import { Child1 } from './components/Child1.tsx'
import { Child2 } from './components/Child2.tsx'
import { Child3 } from './components/Child3.tsx'
import { Child4 } from './components/Child4.tsx'
import { styled } from 'goober'
import { CountA } from './components/CountA.tsx'
import { DontRerender } from './components/DontRerender.tsx'
import { CountB } from './components/CountB.tsx'
import { TotalCount } from './components/TotalCount.tsx'
import { Fieldset } from '../Fieldset.tsx'
import { Codeblock } from '../Codeblock.tsx'
import { Header } from '../Header.tsx'

export default function App() {
  console.log('Rendered: App.tsx')

  return (
    <Div>
      <Header />
      <Fieldset>
        <legend>store.ts</legend>
        <Codeblock>
          export const useGroupACount = singletonState(0)
          <br />
          export const useGroupBCount = singletonState(0)
        </Codeblock>
      </Fieldset>
      <Fieldset>
        <legend>App.tsx</legend>
        <Div>
          <Groups>
            <Group>
              <CountA />
              <Child1 />
              <Child2 />
            </Group>

            <Group>
              <CountB />
              <Child3 />
              <Child4 />
            </Group>
          </Groups>

          <TotalCount />

          <DontRerender />
        </Div>
      </Fieldset>
      <a href='/'>See simple example</a>
    </Div>
  )
}

const Div = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 50px;
`

const Groups = styled('div')`
  display: flex;
  gap: 20px;
`

const Group = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`
