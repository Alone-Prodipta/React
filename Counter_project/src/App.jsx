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
    //setCounter(counter+1);
    
    if(counter<20)
    {
      setCounter(counter+1);
      console.log("clicked",counter);
    }
  }
  const minus= ()=>{
    
    if(counter>0)
    {
      setCounter(counter-1);
      console.log("clicked",counter);
    }
  }
  return (
    <>
      <h1>Mini Counter Project</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={add}>Increment</button>
      <br />
      <button onClick={minus}>Decrement</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
