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
      <p>
        Install:
        <Codeblock>npm install singleton-state-hook</Codeblock>
      </p>
    </>
  )
}
