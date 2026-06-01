import { useState } from 'react'


import './App.css'

function App() {
  const [color, setColor] = useState("white");

  return (
    <>
      <div className="w-full h-screen duration-200"style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 gap-10">
          
            <button onClick={()=>setColor("lavender")}className="p-3 bg-white rounded-xl" style={{backgroundColor:"lavender"}}>lavender</button>
            <button onClick={()=>setColor("red")}className="p-3 bg-white rounded-xl" style={{backgroundColor:"red"}}>red</button>
            <button onClick={()=>setColor("yellow")}className="p-3 bg-white rounded-xl" style={{backgroundColor:"yellow"}}>yellow</button>
            <button onClick={()=>setColor("green")}className="p-3 bg-white rounded-xl" style={{backgroundColor:"green"}}>green</button>
            <button onClick={()=>setColor("orange")}className="p-3 bg-white rounded-xl" style={{backgroundColor:"orange"}}>orange</button>
            <button onClick={()=>setColor("grey")}className="p-3 bg-white rounded-xl" style={{backgroundColor:"grey"}}>grey</button>
            <button onClick={()=>setColor("cyan")}className="p-3 bg-white rounded-xl" style={{backgroundColor:"cyan"}}>cyan</button>
            <button onClick={()=>setColor("pink")}className="p-3 bg-white rounded-xl" style={{backgroundColor:"pink"}}>pink</button>
            <button onClick={()=>setColor("violet")}className="p-3 bg-white rounded-xl" style={{backgroundColor:"violet"}}>violet</button>
            <button onClick={()=>setColor("brown")}className="p-3 bg-white rounded-xl" style={{backgroundColor:"brown"}}>brown</button>          
        </div>
      </div>
    </>
  )
}

export default App
