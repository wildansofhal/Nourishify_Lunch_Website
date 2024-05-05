import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './page/home'
import Signin from './page/Signin'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/signin",
    element: <Signin/>
  }
])

function App() {
  const [count, setCount] = useState(0)

  return (
   <RouterProvider router={router} />
  )
}

export default App
