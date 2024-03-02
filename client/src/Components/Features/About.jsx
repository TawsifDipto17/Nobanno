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
      <div className='about_para'>

      গ্রামীণ কৃষকদের ক্ষমতায়ন এবং উন্নীত করার গভীর প্রতিশ্রুতি থেকে এই প্রকল্পটি তৈরি করতে  আমাদের প্রেরণা যুগিয়েছে। তারা যে সমস্যার মুখোমুখি হয় তা সকলের জানা। তাই তাদের কষ্ট প্রশমন করতে আমরা একটি কার্যকর সমাধান প্রদানের লক্ষ্যে আমরা তাদের প্রযুক্তির ব্যাবহার করার সুযোগ প্রদান করতে চেয়েছি। ঋতু-ভিত্তিক ফসলের তথ্য, মেশিন লার্নিংয়ের মাধ্যমে রোগ শনাক্তকরণ, এবং কৃষি কর্মকর্তাদের সাথে যোগাযোগের সুবিধা প্রদানের মাধ্যমে, আমাদের লক্ষ্য কৃষি অনুশীলনের দক্ষতা এবং সাফল্য বৃদ্ধি করা। গ্রামীণ কৃষকদের সাহায্য করা, বিশেষ করে উল্লেখযোগ্য নবান্ন উৎসবের সময়, কৃষি সম্প্রদায়ের উপর অর্থপূর্ণ প্রভাব ফেলতে সম্ভব হলে আমরা সার্থক।
      <br /> <span style={{float:'right',fontSize:'30px'}}>- ধন্যবাদান্তে নবান্ন টিম </span>
      </div>
      
    </div>
  </div>
    
  );
};

export default About;

