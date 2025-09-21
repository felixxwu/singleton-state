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
  padding: 8px 20px;
  border: none;
  background-color: #4fc1ff;
  border-radius: 1000px;
  cursor: pointer;

  &:hover {
    filter: brightness(1.5);
  }
`
