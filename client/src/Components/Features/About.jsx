// About.jsx
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import video from '../../../assets/grape.mp4';
import './About.css'
import { FaArrowLeft } from "react-icons/fa";

const About= () => {

  const navigateTo = useNavigate();

  let email = localStorage.getItem('email');
  let logged = localStorage.getItem('logged');

  const goBack = (event)=>{
    event.preventDefault();
  
    if(email === "null"){
      window.location.href = '/landing';
    } else{
      if(logged === "user"){
      window.location.href = '/dashboard';
      }
      else if(logged === "officer"){
        window.location.href = '/officer_dashboard';
      }
    }

  };
  


  return (

    <div className="video-containerab">
    <video autoPlay muted loop id="video-backgroundab">
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <button id='back' onClick={goBack}><FaArrowLeft/></button>

    <div className="about-container">
      <h2>আমাদের সম্পর্কে </h2>
      <span> আমরা নবান্ন ওয়েবসাইট  </span>
      
    </div>
  </div>
    
  );
};

export default About;

