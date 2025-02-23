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

  return <StyledFieldset aria-selected={recentlyRendered}>{children}</StyledFieldset>
}

const StyledFieldset = styled('fieldset')<{ 'aria-selected': boolean }>`
  padding: 10px;
  text-align: center;
  border-color: ${p => (p['aria-selected'] ? '#fff' : '#777')};
  border-radius: 5px;

  & > legend {
    color: ${p => (p['aria-selected'] ? '#fff' : '#777')};
  }
`
