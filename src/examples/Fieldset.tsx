import { styled } from 'goober'
import React, { useRef, useState } from 'react'

export const Fieldset = ({ children }: { children: React.ReactNode }) => {
  const allowRender = useRef(true)
  const [recentlyRendered, setRecentlyRendered] = useState(false)

  if (allowRender.current) {
    setRecentlyRendered(true)
    allowRender.current = false
    setTimeout(() => {
      setRecentlyRendered(false)
      setTimeout(() => {
        allowRender.current = true
      }, 1)
    }, 500)
  }

  return <StyledFieldset data-highlight={recentlyRendered}>{children}</StyledFieldset>
}

const StyledFieldset = styled('fieldset')<{ 'data-highlight': boolean }>`
  padding: 10px 20px;
  text-align: left;
  border-color: ${p => (p['data-highlight'] ? '#fff' : '#999')};
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;

  & > legend {
    color: ${p => (p['data-highlight'] ? '#fff' : '#999')};
  }
`
