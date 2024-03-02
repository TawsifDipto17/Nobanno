// Description.jsx
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import video from '../../../assets/plant.mp4';
import './Description.css'
import { FaArrowLeft } from "react-icons/fa";

const Description = () => {

  const navigateTo = useNavigate();
  

  let email = localStorage.getItem('email');
  let logged = localStorage.getItem('logged');

  const goBack = (event) => {
    event.preventDefault();

    if (email === "null") {
      window.location.href = '/landing';
    } else {
      if (logged === "user") {
        window.location.href = '/dashboard';
      }
      else if (logged === "officer") {
        window.location.href = '/officer_dashboard';
      }
    }

  };



  return (

    <div className="video-containerdes">
      <video autoPlay muted loop id="video-backgrounddes">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button id='back' onClick={goBack}><FaArrowLeft /></button>

      <div className="description-container">
        <h2>নবান্ন ওয়েবসাইট সম্পর্কে </h2>
        <span> নবান্ন একটি কৃষিমূলক ওয়েবসাইট </span>

        <div className='desc_para'>
          <p>নবান্ন ওয়েবসাইটে আপনাদের স্বাগতম! আমরা একটি আধুনিক কৃষি প্রযুক্তি অধিষ্ঠিত ওয়েবসাইট, যেখানে আমরা কৃষি ও প্রযুক্তির সমন্বয়ে প্রয়োজনীয় সমস্ত তথ্য এবং সুবিধা উপস্থাপন করছি। আমাদের লক্ষ্য হলো কৃষকদের জন্য সহায়ক, শিক্ষামূলক এবং উন্নত প্ল্যাটফর্ম  তৈরি করে তাদের কৃষি উন্নতিতে সাহায্য করা। আসুন, সহযোগিতা ও জ্ঞান সংকলনে একে অন্যের সহায়তা করি এবং সাথে থাকি এই উন্নত কৃষি যাত্রায়!</p>

          <p>
          আমাদের ওয়েবসাইটে আপনি পাবেন:
          </p>
          <p>
          উদ্ভিদ রোগ চিত্র প্রতিবেদন: <span>আমাদের কৃত্রিম বুদ্ধিমত্তা প্রযুক্তি দ্বারা আমরা উদ্ভিদ রোগ চিত্র প্রতিবেদনে সাহায্য করছি, যাতে আপনি দ্রুত উদ্ভিদের রোগ নির্ণয় করতে এবং সঠিক চিকিৎসা নেওয়ার জন্য সমাধানসমূহ পর্যালোচনা করতে পারেন।</span>
          </p>
          <p>
          বিশেষজ্ঞ ভিডিও চ্যাট প্ল্যাটফর্ম: <span> আমাদের ওয়েবসাইটে আপনি কৃষি বিষয়ক বিশেষজ্ঞদের সাথে ভিডিও চ্যাটের মাধ্যমে যোগাযোগ করতে পারবেন। এটি আপনার যেকোন কৃষি সমস্যার জন্য সঠিক পরামর্শ নিতে সাহায্য করতে পারে।</span>
          </p>
          <p>
          কৃষির চাষাবাদ পদ্ধতি : <span>আমাদের ওয়েবসাইটে আপনি ফসল ফলনের মৌলিক ধাপগুলির উপর ভিত্তি করে বিস্তারিত তথ্য পেতে পারবেন। এটি আপনার ছাদ বাগান বা কৃষি প্রকল্পগুলি উন্নত করতে সাহায্য করতে পারে।</span>
          </p>
            <p>
          কৃষিতে আগ্রহী একজন ব্যবহারকারী হিসেবে আমাদের ওয়েবসাইটে এ আপনাকে স্বাগতম! এখানে আপনি কৃষি জগতে নতুন দিকে প্রসারিত হতে সহায় করতে পারবেন এবং আপনার উদ্যান এবং উদ্যোগগুলির জন্য সর্বোত্তম প্রযুক্তি এবং তথ্য প্রাপ্ত করতে পারবেন।

            </p>
          </div>

      </div>
    </div>

  );
};

export default Description;

