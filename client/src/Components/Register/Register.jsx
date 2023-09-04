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


    const email_notify = () => toast('Check again. Invalid email format!!!');
    const otp_invalid = () => toast('Invalid OTP...Try Again');
    const blank_user = () => toast('Username field is empty!!!');
    const blank_pass = () => toast('Password field is empty!!!');



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

    
            const notify = () => toast(response.data.message);
            
            if (response.data.message == 'Email Exists. User not added!!!') {
                
                flag=false
                notify()
                navigateTo('/register')



            }
           else{
                notify()
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
                        <h2 className='title'>Create and sell extra ordinary product</h2>
                        <p>Adopt the peace of nature!</p>
                    </div>



                    <div className="footerDiv flex">
                        <span className='text'>Already have an account?</span>
                        <Link to={'/login'}>
                            <button className='btn'>Log In</button>
                        </Link>
                    </div>
                </div>
                <div className="formDiv flex">
                    <div className="headerDiv">
                        <img src={logo} alt="Logo Image" />

                    </div>
                    <div className="headerDiv">
                        <h2 className='knowYou'>Let Us Know You!</h2>
                    </div>

                    <form action="" className='form grid'>



                        <div className="inputDiv">
                            <label htmlFor="email">Email</label>
                            <div className=" input flex">
                                <AiTwotoneMail className='icon' />
                                <input type='email' id='email' placeholder='Enter Email' onChange={(event) => {

                                    setEmail(event.target.value)

                                }} />

                                <button type="submit" className='btnOTP' onClick={sendOTP}>

                                    <span>Send OTP</span>

                                </button>

                            </div>

                        </div>


                        <div className="inputDiv">
                            <label htmlFor="username">Username</label>
                            <div className=" input flex">
                                <FaUserShield className='icon' />
                                <input type='text' id='username' placeholder='Enter Username' onChange={(event) => {
                                    setUsername(event.target.value)
                                }} />
                            </div>
                        </div>

                       



                        <div className="inputDiv">
                            <label htmlFor="password">Password</label>
                            <div className=" input flex">

                                <BsFillShieldLockFill className='icon' />
                                <input type='password' id='password' placeholder='Enter Password' onChange={(event) => {
                                    setPassword(event.target.value)
                                    
                                }
                                

                                } />

                            </div>
                            <PasswordStrengthBar password={password} minLength={3} barColors={['#FC2D00', '#FF8B00', '#FBFF00', '#367C00', '#217C00']} />

                        </div>
                        
                           


                        <div className="inputDiv">
                            <label htmlFor="otp">OTP</label>
                            <div className=" input flex">
                                <IoAppsSharp className='icon' />
                                <input type='text' id='otp' placeholder='Enter 4 digit OTP' onChange={(event) => {
                                    setInputOtp(event.target.value)
                                }}
                                />
                            </div>
                        </div>
                        <div>
                            <button type="submit" className='btn flex' onClick={createUser}>
                                <span>Sign Up</span>
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