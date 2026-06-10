import React, { useState } from "react";
import { useEffect } from "react";
function Github()
{
    const [data, setData]= useState([]);
    useEffect(()=>{
        fetch("https://api.github.com/users/Alone-Prodipta")
        .then(response => response.json())
        .then(data => {console.log(data);
            setData(data)
        })
    },[])
    return(
        <div className="text-center m-4 bg-amber-700 text-white p-4 font-bold">Github Repositories: {data.public_repos}
            <img src={data.avatar_url} alt="Profile Picture" className="w-100 h-100  mx-auto" />
        </div>
        
    );
} 
export default Github;