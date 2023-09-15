import { useState } from 'react'
import './App.css'
import Crop from './Components/Features/Chasabad/Crop/Crop'
import Dashboard from './Components/Dashboard/Dashboard'
import Chasabad from './Components/Features/Chasabad/Dashboard/Chasabad'
import Disease from './Components/Features/Rogbalai/Crop/Disease'
import Profile from './Components/Dashboard/UserProfile'

import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import ForgotPass from './Components/ForgotPass/ForgotPass'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Rogbalai from './Components/Features/Rogbalai/Dashboard/Rogbalai'

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
  },
  {
    path:'/chasabad',
    element: <div><Chasabad/></div>
  },
  {
    path:'/crop',
    element: <div><Crop/></div>
  },
  {
    path:'/rogbalai',
    element: <div><Rogbalai/></div>
  },
  {
    path:'/disease',
    element: <div><Disease/></div>
  },
  {
    path:'/profile',
    element: <div><Profile/></div>
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
