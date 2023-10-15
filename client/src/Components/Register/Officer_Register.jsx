import React, { useState } from 'react';
import Axios from 'axios';
import PasswordStrengthBar from 'react-password-strength-bar';
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';
import { AiTwotoneMail } from 'react-icons/ai';
import { IoAppsSharp } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isEmailValid } from '../../js/email_checker.js';
import styles from './officerRegister.module.css'; 
import logo from '../../../assets/logo.jpg'; 


function store(email) {
  localStorage.setItem('email', email);

}
const Officer_Register = () => {
  const email_notify = () => toast('অকার্যকর ইমেইল ফর্ম্যাট!!!');
  const otp_invalid = () => toast('ভুল ওটিপি...আবার চেষ্টা করুন!!!');
  const blank_user = () => toast('ব্যবহারকারীর নাম ফিল্ড খালি!!!');
  const blank_pass = () => toast('পাসওয়ার্ড ফিল্ড খালি!!!');

  const navigateTo = useNavigate();

  const createOTP = () => {
    const digits = '123456789';
    let otp = '';
    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * digits.length);
      otp += digits[randomIndex];
    }
    return otp;
  };

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [number, setOtpNumber] = useState('');
  const [inputotp, setInputOtp] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [certificate, setCertificate] = useState(null);
  const [fileSizeError, setFileSizeError] = useState(false); // Added file size error state

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

  const handleCertificateUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.size > 500 * 1024) { // Check file size (500 KB limit)
      setFileSizeError(true);
    } else {
      setCertificate(file);
      setFileSizeError(false); // Reset file size error
    }
  }

  const handleProfilePictureUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.size > 200 * 1024) { // Check file size (200 KB limit)
      setFileSizeError(true);
    } else {
      setProfilePicture(file);
      setFileSizeError(false); // Reset file size error
    }
  }

  const createUser = (e) => {
    e.preventDefault();
    
    if (fileSizeError) {
      // File size exceeded capacity, show an error and prevent submission
      toast('File size exceeds capacity');
      return;
    }

    // Create a FormData object
    const formData = new FormData();

    // Append the files to the FormData object
    if (profilePicture) {
      formData.append('profilePicture', profilePicture);
    }
    if (certificate) {
      formData.append('certificate', certificate);
    }

    // Append other data as well
    formData.append('Email', email);
    formData.append('UserName', username);
    formData.append('Password', password);
    formData.append('OTP', inputotp);

    Axios.post("http://localhost:3002/officer_register", formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).then((response) => {
      const notify_a = () => {
        toast('স্বাগতম!');
      }
      const notify_b = () => {
        toast('ইমেইল ইতিমধ্যে বিদ্যমান। ব্যবহারকারী সংযুক্ত হয়নি!!!');
      }

      if (response.data.message === 'Email Exists. User not added!!!') {
        notify_b();
        navigateTo('/officer_register');
      } else {
        notify_a();
        store(email)
        navigateTo('/officer_dashboard');
      }
    })
  }

  return (     
    <div className={styles.loginPage} style={{ backgroundColor: 'green' }}>
      <div className={styles.container}>
        <div className={styles.formDiv}>
          <div className={styles.headerDiv}>
            <img src={logo} alt="Logo Image" />
          </div>
          <div className={styles.headerDiv}>
            <h2 className={styles.knowYou}>আপনার সম্পর্কে জানান!</h2>
          </div>

          <form action="" className={`${styles.form} ${styles.grid}`}>
            <div className={styles.inputDiv}>
              <label htmlFor="email">ইমেইল</label>
              <div className={`${styles.input} ${styles.flex}`}>
                <AiTwotoneMail className={styles.icon} />
                <input
                  type='email'
                  id='email'
                  placeholder='ইমেইল প্রবেশ করুন'
                  onChange={(event) => {
                    setEmail(event.target.value)
                  }}
                />
                <button type="submit" className={styles.btnOTP} onClick={sendOTP}>
                  <span>ওটিপি পাঠান</span>
                </button>
              </div>
            </div>

            <div className={styles.inputDiv}>
              <label htmlFor="username">ব্যবহারকারীর নাম</label>
              <div className={`${styles.input} ${styles.flex}`}>
                <FaUserShield className={styles.icon} />
                <input
                  type='text'
                  id='username'
                  placeholder='ব্যবহারকারীর নাম প্রবেশ করুন'
                  onChange={(event) => {
                    setUsername(event.target.value)
                  }}
                />
              </div>
            </div>

            <div className={styles.inputDiv}>
              <label htmlFor="password">পাসওয়ার্ড</label>
              <div className={`${styles.input} ${styles.flex}`}>
                <BsFillShieldLockFill className={styles.icon} />
                <input
                  type='password'
                  id='password'
                  placeholder='পাসওয়ার্ড প্রবেশ করুন'
                  onChange={(event) => {
                    setPassword(event.target.value)
                  }}
                />
              </div>
              <PasswordStrengthBar
                password={password}
                minLength={3}
                barColors={['#FC2D00', '#FF8B00', '#FBFF00', '#367C00', '#217C00']}
              />
            </div>

            <div className={styles.inputDiv}>
              <label htmlFor="otp">ওটিপি</label>
              <div className={`${styles.input} ${styles.flex}`}>
                <IoAppsSharp className={styles.icon} />
                <input
                  type='text'
                  id='otp'
                  placeholder='৪ সংখ্যার ওটিপি প্রদান করুন'
                  onChange={(event) => {
                    setInputOtp(event.target.value)
                  }}
                />
              </div>
            </div>

            <div className={styles.inputDiv}>
              <label htmlFor="profilePicture">প্রোফাইল ছবি (২০০ কেবি এর কম JPEG/PNG)</label>
              <div className={`${styles.input} ${styles.flex}`}>
                <input
                  type='file'
                  id='profilePicture'
                  accept='image/jpeg, image/png'
                  onChange={handleProfilePictureUpload}
                />
                {profilePicture && (
                  <img
                    src={URL.createObjectURL(profilePicture)}
                    alt="Profile Preview"
                    className={styles.previewImage}
                  />
                )}
              </div>
            </div>

            {/* Certificate Upload */}
            <div className={styles.inputDiv}>
              <label htmlFor="certificate">সনদপত্র (৫০০ কেবি এর কম PDF)</label>
              <div className={`${styles.input} ${styles.flex}`}>
                <input
                  type='file'
                  id='certificate'
                  accept='.pdf'
                  onChange={handleCertificateUpload}
                />
                {certificate && (
                  <iframe
                    title="Certificate Preview"
                    src={URL.createObjectURL(certificate)}
                    className={styles.previewPdf}
                  />
                )}
              </div>
            </div>

            {fileSizeError && (
              <div className={styles.fileSizeError}>
              ফাইলের আকার সীমা অতিক্রম করেছে
              </div>
            )}

            <div>
              <button type="submit" className={`${styles.btn} ${styles.flex}`} onClick={createUser} disabled={fileSizeError}>
                <span>নিবন্ধন করুন</span>
                <AiOutlineSwapRight className={styles.icon} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Officer_Register;
