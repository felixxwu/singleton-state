import { styled } from 'goober'
import { Codeblock } from './Codeblock.tsx'

export function Header() {
  return (
    <>
      <h1>Singleton State</h1>
      <span>
        A 1kB alternative to{' '}
        <a href='https://react.dev/learn/passing-data-deeply-with-context' target='_blank'>
          React Context
        </a>{' '}
        with improved performance and ergonomics.
      </span>
      <P>
        <Codeblock color='#000'>npm install singleton-state-hook</Codeblock>
      </P>
    </>
  )
}

const P = styled('p')`
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
  color: #333;
  user-select: all;
`
