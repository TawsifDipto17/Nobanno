import React, { useState } from 'react'
import Axios from 'axios'
import './Register.css'
import video from "../../../assets/plant.mp4"
import PasswordStrengthBar from 'react-password-strength-bar';
import logo from '../../../assets/logo.jpg'
import { FaUserShield } from 'react-icons/fa'
import { BsFillShieldLockFill } from 'react-icons/bs'
import { AiOutlineSwapRight } from 'react-icons/ai'
import { AiTwotoneMail } from 'react-icons/ai'
import { IoAppsSharp } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { isEmailValid } from '../../js/email_checker.js'


const Register = () => {


    const email_notify = () => toast('অকার্যকর ইমেইল ফরম্যাট!!!');
    const otp_invalid = () => toast('ভুল ওটিপি...আবার চেষ্টা করুন!!!');
    const blank_user = () => toast('ব্যবহারকারীর নাম ফিল্ড খালি!!!');
    const blank_pass = () => toast('পাসওয়ার্ড ফিল্ড খালি!!!');



    const navigateTo = useNavigate()

   
    const createOTP = () => {
        const digits = '123456789';
        let otp = '';

        for (let i = 0; i < 4; i++) {
            const randomIndex = Math.floor(Math.random() * digits.length);
            otp += digits[randomIndex];
        }

        return otp;
    }
    


    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [number, setOtpNumber] = useState('')
    const [inputotp, setInputOtp] = useState('')
    
   

    
   
    const sendOTP = (e) => {
        e.preventDefault();
        const newNumber = createOTP();
        setOtpNumber(newNumber);
        console.log("Sending OTP:", newNumber); 
        Axios.post("http://localhost:3002/otp", {
            OTP: newNumber,
            Email: email

        }).then((response) => {
            console.log("Response from OTP API:", response.data); 
        }).catch((error) => {
            console.error("Error sending OTP:", error);
        });
    }
    const createUser = (e) => {
        console.log("Number" + number)
        console.log("Input" + inputotp)
       
        e.preventDefault()
        if (!isEmailValid(email)) {
            email_notify()
            setOtpNumber(' ')
            return
        }
        if (number != inputotp || number==' ' && inputotp==' ') {
            otp_invalid();
            setOtpNumber(' ')
           
            return
        }

        setOtpNumber(' ')
        let flag=true;
        if(username==' '|| username.length==0){
            flag=false
            blank_user()
            navigateTo('/register')
        }
        if(password==' '|| password.length==0){
            flag=false
            blank_pass()
            navigateTo('/register')
        }
        if(flag)
        Axios.post("http://localhost:3002/register", {

           
            Email: email,
            UserName: username,
            Password: password,
            
           
        }).then((response) => {

            const notify_a=()=>{
                toast('স্বাগতম!')
            }
            const notify_b=()=>{
                toast('ইমেইল ইতিমধ্যে বিদ্যমান। ব্যবহারকারী সংযুক্ত হয়নি!!!')
            }
            const notify = () => toast(response.data.message);
            
            if (response.data.message == 'Email Exists. User not added!!!') {
                
                flag=false
                notify_b()
                navigateTo('/register')



            }
           else{
                notify_a()
                navigateTo('/dashboard')
            }
            
               

            
        })
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
                        <span className='text'>ইতিমধ্যে একটি অ্যাকাউন্ট আছে?</span>
                        <Link to={'/login'}>
                            <button className='btn'>প্রবেশ করুন</button>
                        </Link>
                    </div>
                </div>
                <div className="formDiv flex">
                    <div className="headerDiv">
                        <img src={logo} alt="Logo Image" />

                    </div>
                    <div className="headerDiv">
                        <h2 className='knowYou'>আপনার সম্পর্কে জানান!</h2>
                    </div>

                    <form action="" className='form grid'>



                        <div className="inputDiv">
                            <label htmlFor="email">ইমেইল</label>
                            <div className=" input flex">
                                <AiTwotoneMail className='icon' />
                                <input type='email' id='email' placeholder='ইমেইল প্রবেশ করুন' onChange={(event) => {

                                    setEmail(event.target.value)

                                }} />

                                <button type="submit" className='btnOTP' onClick={sendOTP}>

                                    <span>ওটিপি পাঠান</span>

                                </button>

                            </div>

                        </div>


                        <div className="inputDiv">
                            <label htmlFor="username">ব্যবহারকারীর নাম</label>
                            <div className=" input flex">
                                <FaUserShield className='icon' />
                                <input type='text' id='username' placeholder='ব্যবহারকারীর নাম প্রবেশ করুন' onChange={(event) => {
                                    setUsername(event.target.value)
                                }} />
                            </div>
                        </div>

                       



                        <div className="inputDiv">
                            <label htmlFor="password">পাসওয়ার্ড</label>
                            <div className=" input flex">

                                <BsFillShieldLockFill className='icon' />
                                <input type='password' id='password' placeholder='পাসওয়ার্ড প্রবেশ করুন' onChange={(event) => {
                                    setPassword(event.target.value)
                                    
                                }
                                

                                } />

                            </div>
                            <PasswordStrengthBar password={password} minLength={3} barColors={['#FC2D00', '#FF8B00', '#FBFF00', '#367C00', '#217C00']} />

                        </div>
                        
                           


                        <div className="inputDiv">
                            <label htmlFor="otp">ওটিপি</label>
                            <div className=" input flex">
                                <IoAppsSharp className='icon' />
                                <input type='text' id='otp' placeholder='৪ সংখ্যার ওটিপি প্রদান করুন' onChange={(event) => {
                                    setInputOtp(event.target.value)
                                }}
                                />
                            </div>
                        </div>
                        <div>
                            <button type="submit" className='btn flex' onClick={createUser}>
                                <span>নিবন্ধন করুন</span>
                                <AiOutlineSwapRight className="icon" />
                            </button>

                        </div>


                    </form>
                </div>
            </div>
        </div>
    )
}
export default Register;