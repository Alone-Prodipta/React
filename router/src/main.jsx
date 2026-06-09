import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import index from './index.jsx'
import header from './components/header/header.jsx';
import footer from './components/footer/footer.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router= createBrowserRouter([
  {
    path: '/',
    element: <index/>,
    children:[
      {
        path: "home",
        element: <home/>
      },
      {
        path: "about",
        element: <about/>
      }
    ]
  }
  

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
