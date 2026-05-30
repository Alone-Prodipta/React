import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() 
{
  let[counter,setCounter]= useState(0);    
  //const [superman--> varible, setSuperman-->function]= useState(defaultvalue)
  
  {/*the function is responsible for updating the varible*/}
  //let counter= 5;
  const add= () =>{
    //counter+= 1;
    setCounter(counter+100);
    console.log("clicked",counter);
  }
  const minus= ()=>{
    setCounter(counter-50);
    console.log("clicked",counter);
  }
  return (
    <>
      <h1>Mini Counter Project</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={add}>Increment: {counter}</button>
      <br />
      <button onClick={minus}>Decrement: {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
