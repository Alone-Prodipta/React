import { useState } from 'react'
import './App.css'
import usercontextProvider from './context/userContextProvider';
import Login from './components/login';
import Profile from './components/profile';

function App() 
{
  return (
    <>
      <usercontextProvider>
        
        <h1>Hello World!</h1>
        <Login/>
        <Profile/>
      </usercontextProvider>
    </>
  )
}

export default App
