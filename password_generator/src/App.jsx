import { useState, useCallback, useEffect,useRef} from 'react'
import './App.css'

function App() 
{// we are use call back to make our code more optimized.
  const [length, setLength] = useState(8);
  const [digits, setDigits] = useState(false);
  const [charecter, setCharecter] = useState(false);
  const [password,setPassword] = useState('');
  //use ref hook
  const passwordRef= useRef(null);

  const PasswordGenerator= useCallback(()=>{ 
    //usecallback actually memorizes the data in the cache or memory as much as possible.
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
    for(let i=1;i<=length;i++)
    {
      let ele= Math.floor((Math.random()*str.length)+1);
      pass= pass+ str.charAt(ele);
    }
    setPassword(pass);
  },[length,digits,charecter,setPassword]);// this is the dependencies---> [length,digits,charecter,setPassword]
  const copyPasswordtoClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 102);
    window.navigator.clipboard.writeText(password);
  },[password]);
  
  
  //code is running from here serves as main goal of running.
  useEffect(()=> {
    // when some thing changes or the page reloads it actually re-runs every time.
    PasswordGenerator();
  },[length,digits,charecter,PasswordGenerator]);
  return (
    <>
      <p className="text-white mx-150 my-10 text-4xl">Password Generator</p>
      <div className="w-120 h-70 rounded-xl bg-gray-400 mx-150">
      <input value={password} className="w-70 h-5 mx-10 my-5 rounded-xl border-2 border-amber-600 p-5 text-center" type="text" 
      placeholder="password" readOnly ref={passwordRef}/>
      <button onClick={copyPasswordtoClipboard} className="bg-blue-700 text-white w-30 p-3 rounded-xl">copy</button>
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

//Code by hitesh sir

/*import { useState, useCallback, useEffect, useRef } from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
  )
}

export default App*/