import Card from "./card";
import "./App.css";
import { useState } from "react";
function App(props) 
{
  const [count, setCount]= useState(0);
  let ob1={
    age: "20",
    name: "Prodipta",
    title: "nayeb",
  }
  let ar=[1,2,5,8];
  return (
   <>
   <div className="bg-black">
   <Card  username= "Project1" />
   <Card username= "Project2" />
   </div>
   </>
  )
}

export default App;
