import { styled } from 'goober'
import { FormEventHandler } from 'react'

export function Toggle({ onChange }: { onChange: FormEventHandler<HTMLInputElement> }) {
  return (
    <Switch>
      <Input type='checkbox' onChange={onChange} />
      <Slider />
    </Switch>
  )
}

const Switch = styled('label')`
  position: relative;
  display: inline-block;
  width: 30px;
  height: 17px;

  & input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`

const Slider = styled('span')`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #2196f3;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 17px;

  &::before {
    position: absolute;
    content: '';
    height: 13px;
    width: 13px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`

const Input = styled('input')`
  &:checked + ${Slider} {
    background-color: #f44949;
  }

  &:focus + ${Slider} {
    box-shadow: 0 0 1px #f44949;
  }

  &:checked + ${Slider}:before {
    -webkit-transform: translateX(13px);
    -ms-transform: translateX(13px);
    transform: translateX(13px);
  }
`
