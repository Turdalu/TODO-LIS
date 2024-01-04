import React from 'react'
import { styled } from 'styled-components'

function Button(props) {
  return (
    <div>
        <ButStyle onClick={props.onClick}>ADD</ButStyle>
    </div>
  )
}

export default Button

const ButStyle = styled.button`
  width: 100px;
  border-radius:10px;
  height: 50px;
  background-color: blue;
  color:azure;
  font-size:30px;
  margin-top: 10px;
  cursor: pointer;
  &:hover{
    background-color: #32f906
  }
  &:active{
    background-color: #f9061e
    
  }
`