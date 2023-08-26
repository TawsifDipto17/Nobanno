import React,{useEffect,useState} from 'react'

import './Login.css'
import video from "../../../assets/grape.mp4"
import { Link , useNavigate} from 'react-router-dom'
import logo from '../../../assets/logo.jpg'
import Axios from 'axios'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'
import { AiTwotoneMail } from 'react-icons/ai'


import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [login_email,login_setEmail]=useState('')
    const [login_password,login_setPassword]=useState('')
    const navigateTo=useNavigate()



    const loginUser=(e)=>{
        e.preventDefault();
        Axios.post('http://localhost:3002/login',
        {
            LoginEmail: login_email,
            LoginPassword:login_password

        }).then((response)=>{
           
            const notify=()=>{
                toast(response.data.message)
            }
            console.log(response.data.message)
            if(response.data.message=='User not found!' ){
                notify();
                navigateTo('/login')
                // setLoginStatus('Credentials Don`t Exist!')
            }
            else{
                notify();
                navigateTo('/dashboard')
            }
        })
    }
    
       

    // useEffect(()=>{
    //     if(loginStatus!=='')
    //     {
    //         setStatusHolder('showMessage')
    //         setTimeout(() => {
    //             setStatusHolder('message') 
            
    //         }, 3000);
    //     }
    // },[loginStatus])


    const onSubmit=()=>{
       
        login_setEmail('')
        login_setPassword('')
        }
        
    return (
        <div className='loginPage flex'>
            <div className="container flex">

            <div className="fvideoDiv">
                <video src={video} autoPlay muted loop></video>
                </div>

                <div className="videoDiv">
                    <video src={video} autoPlay muted loop></video>
                    <div className="textDiv">
                        <h2 className='title'>Create and sell extra ordinary product</h2>
                        <p>Adopt the peace of nature!</p>
                    </div>



                    <div className="footerDiv flex">
                        <span className='text'>Don't have an account?</span>
                        <Link to={'/register'}>
                            <button className='btn'>Sign Up</button>
                        </Link>
                    </div>
                </div>
                <div className="formDiv flex">
                    <div className="headerDiv">
                        <img src={logo} alt="Logo Image" height="20px" width="20px" />
                       
                    </div>
                    
                    <div className="headerDiv">
                        <h2 className='knowYou'>Welcome!</h2>
                    </div>

                    <form onSubmit={onSubmit} className='form grid'>
                       
                        <div className="inputDiv">
                            <label htmlFor="email">Email</label>
                            <div className=" input flex">
                                <AiTwotoneMail className='icon' />
                                <input type='email' id='email' placeholder='Enter Email' 
                                onChange={(event)=>{
                                    login_setEmail(event.target.value)
                                }}/>
                            </div>
                        </div>


                        <div className="inputDiv">
                            <label htmlFor="password">Password</label>
                            <div className=" input flex">
                                <BsFillShieldLockFill className='icon' />
                                <input type='password' id='password' placeholder='Enter Password' 
                                   onChange={(event)=>{
                                    login_setPassword(event.target.value)
                                }}/>
                            </div>
                        </div>
                        <button type="submit" className='btn flex' onClick={loginUser}>
                            <span>Login</span>
                            <AiOutlineSwapRight className="icon"/>
                        </button>
                        <span className='forgotPassword'>
                        
                            Forgot your password?
                        <Link to={'/forgot'}>
                            <p>Click Here</p>
                        </Link >
                        </span>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login;