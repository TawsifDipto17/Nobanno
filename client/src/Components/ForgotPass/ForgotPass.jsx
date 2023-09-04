import React,{useEffect,useState} from 'react'
import Axios from 'axios'
import './Forgot.css'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AiTwotoneMail } from 'react-icons/ai'
import video from "../../../assets/grape.mp4"
import { Link , useNavigate} from 'react-router-dom'




const Forgot = () => {
    const navigateTo=useNavigate()
    const[login_email,login_setEmail]=useState('')
    const [login_user,login_setUser]=useState('')
    const onSubmit=()=>{
       
        login_setEmail('')
        login_setUser('')
        }
    const forgotPass=(e)=>{
        e.preventDefault();
        Axios.post('http://localhost:3002/forgot',
        {
            LoginEmail: login_email,
            LoginUser:login_user

        }).then((response)=>{
           
            const notify=()=>{
                toast('An OTP is sent. Login using that OTP')
                toast( 'Change password from dashboard')
            }
            console.log(response.data.message)
            if(response.data.message=='An OTP is sent. Login using that OTP' ){
                notify();
                navigateTo('/login')
            }
            else{
                notify();
                navigateTo('/forgot')
            }
        })
      
    }


    
    return (

        <div>
            <div className="fvideoDiv">
                <video src={video} autoPlay muted loop></video>
                <div className="textDiv">
                    <h2 className='title'>Create and sell extra ordinary product</h2>
                    <p>Adopt the peace of nature!</p>
                </div>
            </div>
            <div className="fbutton-container">
                <Link to={'/login'}>
                <button className="fbutton">Login</button>
                </Link>

                <Link to={'/register'}>
                <button className="fbutton">Sign Up</button>
                </Link>
            </div>

            <form className='fform' onSubmit={onSubmit}>

                {/* <div className='finput'>
                    <label htmlFor='text' ></label>
                    <div>
                        <input className='finput' type='text' id='text' placeholder='Enter Username' onChange={(event)=>{
                                    login_setUser(event.target.value)
                                }}/>
                    </div>
                </div> */}

                <div className='finput'>
                    <label htmlFor='email' ></label>
                    <div>
                        <input className='finput' type='email' id='email' placeholder='Enter Email' onChange={(event)=>{
                                    login_setEmail(event.target.value)
                                }}/>
                    </div>
                </div>

                <div><button className='Submit' type='submit' onClick={forgotPass}>Submit</button></div>

            </form>
        </div>
    );

}

export default Forgot;