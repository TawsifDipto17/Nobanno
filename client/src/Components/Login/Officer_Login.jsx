import React,{useEffect,useState} from 'react'
import './login.css'
import video from "../../../assets/grape.mp4"
import { Link , useNavigate} from 'react-router-dom'
import logo from '../../../assets/logo.jpg'
import Axios from 'axios'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'
import { AiTwotoneMail } from 'react-icons/ai'


import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Data store function
function store(email) {
    localStorage.setItem('email', email);

  }
const Officer_Login = () => {
    const [login_email,login_setEmail]=useState('')
    const [login_password,login_setPassword]=useState('')
    const navigateTo=useNavigate()



    const loginUser=(e)=>{
        e.preventDefault();
        Axios.post('http://localhost:3002/officer_login',
        {
            LoginEmail: login_email,
            LoginPassword:login_password

        }).then((response)=>{
           
            const notify_a=()=>{
                toast('ব্যবহারকারী পাওয়া গিয়েছে!')
                toast('স্বাগতম!')
            }
            const notify_b=()=>{
                toast('ব্যবহারকারী খুঁজে পাওয়া যায়নি!')
            }
            console.log(response.data.message)
            if(response.data.message=='User not found!' ){
                notify_b();
                navigateTo('/officer_login')
                // setLoginStatus('Credentials Don`t Exist!')
            }
            else{
                localStorage.setItem('logged', 'officer');
                notify_a();
                store(login_email)
                navigateTo('/officer_dashboard')
            }
        })
    }
    
       



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
                        <h2 className='title'>সবুজ পৃথিবীতে স্বাগতম</h2>
                        <p>প্রকৃতির পুনর্জীবন উপভোগ করুন!</p>
                    </div>



                    <div className="footerDiv flex">
                        <span className='text'>আপনার কোন একাউন্ট নেই?</span>
                        <Link to={'/officer_register'}>
                            <button className='btn'>নিবন্ধন করুন</button>
                        </Link>
                    </div>
                </div>
                <div className="formDiv flex">
                    <div className="headerDiv">
                        <img src={logo} alt="Logo Image" height="20px" width="20px" />
                       
                    </div>
                    
                    <div className="headerDiv">
                        <h2 className='knowYou'>স্বাগতম!</h2>
                    </div>

                    <form onSubmit={onSubmit} className='form grid'>
                       
                        <div className="inputDiv">
                            <label htmlFor="email">ইমেইল</label>
                            <div className=" input flex">
                                <AiTwotoneMail className='icon' />
                                <input type='email' id='email' placeholder='ইমেইল প্রবেশ করুন' 
                                onChange={(event)=>{
                                    login_setEmail(event.target.value)
                                }}/>
                            </div>
                        </div>


                        <div className="inputDiv">
                            <label htmlFor="password">পাসওয়ার্ড</label>
                            <div className=" input flex">
                                <BsFillShieldLockFill className='icon' />
                                <input type='password' id='password' placeholder='পাসওয়ার্ড প্রবেশ করুন' 
                                   onChange={(event)=>{
                                    login_setPassword(event.target.value)
                                }}/>
                            </div>
                        </div>
                        <button type="submit" className='btn flex' onClick={loginUser}>
                            <span>প্রবেশ করুন</span>
                            <AiOutlineSwapRight className="icon"/>
                        </button>
                        <span className='forgotPassword'>
                        
                        আপনি কি পাসওয়ার্ড ভুলে গেছেন?
                        <Link to={'/officer_forgot'}>
                            <p>এখানে ক্লিক করুন</p>
                        </Link >
                        </span>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Officer_Login;