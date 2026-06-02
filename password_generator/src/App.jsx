import { useState, useCallback} from 'react'
import './App.css'

function App() 
{
  const [length, setLength] = useState(8);
  const [digits, setDigits] = useState(false);
  const [charecter, setCharecter] = useState(false);
  const [password,setPassword] = useState("");
  const PasswordGenerator= useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(digits)
    {
      str= str+ "12345567890";
    }
    if(charecter)
    {
      str= str+ "!@#$%^&*()_-+{}[]";
    }
    for(i=1;i<=length;i++)
    {
      let ele= Math.floor((Math.random()*str.length())+1);
      pass= str.charAt(ele);
    }
    setPassword(pass);
  },[length,digits,charecter,setPassword]);

  return (
    <>
      <p className="text-white mx-150 my-10 text-4xl">Password Generator</p>
      <div className="w-120 h-70 rounded-xl bg-gray-400 mx-150">
      <input className="w-70 h-5 mx-10 my-5 rounded-xl border-2 border-amber-600 p-5 text-center" type="text" 
      placeholder="password" />
      <button className="bg-blue-400 text-white w-30 px-3">copy</button>
      <input type="range" min={4} max={100} value={length} onChange={(e)=> {setLength(e.target.value)}} readOnly/>
      <label>Length: {length}</label>
       <br/><input type="checkbox" defaultChecked={digits} id="inputnum" onChange={()=>{
        setDigits((prev)=> !prev);
      }}/>
      <label>numbers</label>
      <input type="checkbox" defaultChecked={charecter} id="inputchar" onChange={()=>{
        setDigits((prev)=> !prev);
      }}/>
      <label>charecter</label>
      </div>
    </>
  )
}

export default App
