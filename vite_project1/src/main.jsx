import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
function MyApp()
{
    return(
        <div>
            <h1>#Custom App</h1>
        </div>
    );
}
const reactElement= {
    type: 'a',
    props:{
        href: "https://feathers.great-site.net",
        target: "_blank"
    },
    children: "click here",
}
const userName= "Prodipta Nayeb";
const newElement= React.createElement(
    'a',
    {href: "https://feathers.great-site.net",target: "_blank"},
    "click here",
    userName
);
const anotherElement=(
    <a href= "https://feathers.great-site.net" target= "_blank">Click here</a>
);
ReactDOM.createRoot(document.getElementById('root')).render(
 
    <App />

  
);
