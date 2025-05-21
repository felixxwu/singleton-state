import { styled } from 'goober'

export const Codeblock = styled('code')<{ color?: string }>`
  display: block;
  font-family: 'Source Code Pro', monospace;
  color: ${props => props.color || '#ccc'};
  text-align: left;
`
