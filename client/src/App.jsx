import { useState } from 'react'
import './App.css'
import Dashboard from './Components/Dashboard/Dashboard'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import ForgotPass from './Components/ForgotPass/ForgotPass'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router= createBrowserRouter([

  {
    path:'/forgot',
    element: <div><ForgotPass/></div>
  },
  {
    path:'/login',
    element: <div><Login/></div>
  },
  {
    path:'/register',
    element: <div><Register/></div>
  },
  {
    path:'/dashboard',
    element: <div><Dashboard/></div>
  }
])
function App() {

  return (
   <div>
   <ToastContainer/>
   <RouterProvider router={router}/>

   </div>
  )
}

export default App
