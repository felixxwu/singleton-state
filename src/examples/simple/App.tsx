import { styled } from 'goober'
import { Header } from '../Header.tsx'
import SingletonApp from './singletonState/SingletonStateExample.tsx'
import ContextApp from './context/ContextExample.tsx'
import { useState } from 'react'
import { Toggle } from '../Toggle.tsx'

export default function App() {
  const [useReactContext, setUseReactContext] = useState(false)

  return (
    <Div>
      <Header />
      <ToggleContainer>
        Use Singleton State
        <Toggle onChange={() => setUseReactContext(!useReactContext)} />
        Use React Context
      </ToggleContainer>

      {useReactContext ? <ContextApp /> : <SingletonApp />}

      <span>
        Learn more:{' '}
        <a href='https://github.com/felixxwu/singleton-state'>
          github.com/felixxwu/singleton-state
        </a>
      </span>
    </Div>
  )
}

const Div = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  padding-bottom: 50px;
`

const ToggleContainer = styled('div')`
  display: flex;
  gap: 10px;
  align-items: center;
`
