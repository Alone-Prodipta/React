import { useState } from 'react';
import './App.css';
import Background from './components/background';
import Foreground from './components/foreground';
function App() 
{


  return (
    <>
     <div className="w-full h-screen relative bg-zinc-800">
      
        <Background />
       
        <Foreground />
     </div>
    </>
  )
}

export default App
