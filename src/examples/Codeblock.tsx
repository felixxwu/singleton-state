import { styled } from 'goober'

export const Codeblock = styled('code')<{ color?: string }>`
  display: block;
  font-family: 'Source Code Pro', monospace;
  color: ${props => props.color || '#ccc'};
  text-align: left;
`

export const Kw = styled('span')`
  font-family: 'Source Code Pro', monospace;
  color: #c586c0;
`

export const C = styled('span')`
  font-family: 'Source Code Pro', monospace;
  color: #569cd6;
`

export const V = styled('span')`
  font-family: 'Source Code Pro', monospace;
  color: #4fc1ff;
`

export const Fn = styled('span')`
  font-family: 'Source Code Pro', monospace;
  color: #dcdcaa;
`

export const Str = styled('span')`
  font-family: 'Source Code Pro', monospace;
  color: #ce9178;
`

export const N = styled('span')`
  font-family: 'Source Code Pro', monospace;
  color: #b5cea8;
`

export const Com = styled('span')`
  font-family: 'Source Code Pro', monospace;
  color: #6a9955;
`

export const Op = styled('span')`
  font-family: 'Source Code Pro', monospace;
  color: #d4d4d4;
`

export const Br1 = styled('span')`
  font-family: 'Source Code Pro', monospace;
  color: #ffd700;
`

export const Br2 = styled('span')`
  font-family: 'Source Code Pro', monospace;
  color: #da70d6;
`

export const Br3 = styled('span')`
  font-family: 'Source Code Pro', monospace;
  color: #179fff;
`

export const Arg = styled('span')`
  font-family: 'Source Code Pro', monospace;
  color: #9cdcfe;
`

export const Arr = styled('span')`
  font-family: 'Source Code Pro', monospace;
  color: #569cd6;
`

export const T = styled('span')`
  font-family: 'Source Code Pro', monospace;
  color: #4ec9b0;
`
