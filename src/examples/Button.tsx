import React from 'react'
import { styled } from 'goober'

export const Button = ({
  children,
  onClick,
}: {
  children: React.ReactNode
  onClick: () => void
}) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>
}

const StyledButton = styled('button')`
  padding: 5px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #bbb;
  }
`
