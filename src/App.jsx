
import { useState } from 'react'
import './App.css'
import Input from './components/UL/Input'
import Button from './components/Button'
import { styled } from 'styled-components'

const App = () =>{
  const [name, setName] = useState('')
  const [color, setColor] = useState('')
  const [arr, setArr] = useState([])

  console.log(arr);

  const clickHandler = () => {

    const obj = {
      name: name,
      color: color,
      id: Math.random(),
    };

    // console.log(obj);

    setArr((arr) => [...arr, obj]);
    setColor('')
    setName('')
  };


  return (
    <DivStayle>
       {arr.map((el) => {
        return (
          <div key={el.id}>
            <h1>{el.name}</h1>
            <h1 style={{color:el.color}}>{el.color}</h1>
          </div>
        );
      })}
      <label style={{color:'red',fontSize:'30px'}}>
        NAME
       <Input value={name} onChange={(e) => setName(e.target.value)}/>
      </label>
      
      <label style={{color:'red',fontSize:'30px'}}>
       COLOR
      <Input value={color} onChange={(e) => setColor(e.target.value)}/>
       </label>

      <Button onClick={clickHandler}/>
    </DivStayle>
  )
}

export default App

const DivStayle = styled.div`
 display: flex;
 align-items: center;
 flex-direction: column;
 background-image: url('https://masterpiecer-images.s3.yandex.net/7425b58c6bf411eeb722badf81d486ab:upscaled');
object-fit: cover;
width: 800px;
margin:auto;

`
