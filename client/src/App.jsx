import './App.css'

import Landing from './Components/Landing/Dashboard'
import Crop from './Components/Features/Chasabad/Crop/Crop'
import Dashboard from './Components/Dashboard/Dashboard'
import Chasabad from './Components/Features/Chasabad/Dashboard/Chasabad'
import Chad_krishi from './Components/Features/Chad_krishi/Dashboard/Chad_krishi'
import Chad from './Components/Features/Chad_krishi/Chad/Chad'
import Disease from './Components/Features/Rogbalai/Crop/Disease'
import Profile from './Components/Dashboard/UserProfile'
import OfficerProfile from './Components/Officer_Dashboard/Components/OfficerProfile'
import AgriculturalOfficerList from './Components/Features/GetAdvice/OfficerDatabase'


import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import ForgotPass from './Components/ForgotPass/ForgotPass'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Rogbalai from './Components/Features/Rogbalai/Dashboard/Rogbalai'
import Officer_Register from './Components/Register/Officer_Register'
import Officer_Login from './Components/Login/Officer_Login'
import Officer_Forgot from './Components/ForgotPass/Officer_ForgotPass'
import Officer_Dashboard from './Components/Officer_Dashboard/Dashboard'
import Officer_Advice from './Components/Officer_Dashboard/Advice'
import GetAdvice from './Components/Features/GetAdvice/GetAdvice'
import Video_Meet from './Components/video_chat/video'

import Admin from './Components/Admin/Dashboard'
import AdminChasabad from './Components/Admin/admin_chasabad'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Yolo from '../detection/src/Yolo'
import AdminRogbalai from './Components/Admin/admin_rogbalai'
import AdminChadbagan from './Components/Admin/admin_chadbagan'
import AgriculturalBlog from './Components/Features/AgriBlog'
import AgriculturalNews from './Components/Features/AgriNews'
import About from './Components/Features/About'
import Description from './Components/Features/Description'
const router= createBrowserRouter([
  {
    path:'/admin',
    element: <div><Admin/></div>
  },
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
    path:'/landing',
    element: <div><Landing/></div>
  },
  {
    path:'/dashboard',
    element: <div><Dashboard/></div>
  },
  {
    path:'/blog',
    element: <div><AgriculturalBlog/></div>
  },
  {
    path:'/news',
    element: <div><AgriculturalNews/></div>
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
  },
  {
    path:'/officerprofile',
    element: <div> <OfficerProfile/> </div>
  },
  {
    path:'/officer_register',
    element: <div><Officer_Register/></div>
  },
  {
    path:'/officer_login',
    element: <div><Officer_Login/></div>
  },
  {
    path:'/officer_forgot',
    element: <div><Officer_Forgot/></div>
  },
  {
    path:'/officer_dashboard',
    element: <div><Officer_Dashboard/></div>
  },
  {
    path:'/officer_advice',
    element: <div><Officer_Advice/></div>
  },
  {
    path:'officer_database',
    element:<div><AgriculturalOfficerList/></div>
  },
  {
    path:'/get_advice',
    element: <div><GetAdvice/></div>
  },
  {
    path:'/video_chat',
    element: <div><Video_Meet/></div>
  },
  {
    path:'/chad_krishi',
    element: <div><Chad_krishi/></div>
  },
  {
    path:'/chad',
    element: <div><Chad/></div>
  },
  {
    path:'/detection',
    element: <div><Yolo/></div>
  },
  {
    path:"/admin_chasabad",
    element: <div><AdminChasabad/></div>
  },
  {
    path:"/admin_chadbagan",
    element: <div><AdminChadbagan/></div>
  },
  {
    path:"/admin_rogbalai",
    element: <div><AdminRogbalai/></div>
  },
  {
    path:"/about",
    element: <div><About/></div>
  },
  {
    path:"/description",
    element: <div><Description/></div>
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
