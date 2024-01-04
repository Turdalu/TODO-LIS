import React from 'react'
import { styled } from 'styled-components'

function Input(props) {
  return (
        <InputStyle type="text" value={props.value} onChange={props.onChange} />
  )
}

export default Input;

const InputStyle = styled.input`
  width: 500px;
  height: 50px;
  border-radius: 10px;
  font-size: 30px;
  margin-top: 10px;
`