// AgriculturalNews.jsx

import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import video from '../../../assets/grape.mp4';
import './AgriNews.css';


const AgriculturalNews = () => {

  const email = localStorage.getItem('email');
  const logged = localStorage.getItem('logged');

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

    const navigateTo = useNavigate();

  
    const [data, setData] = useState([]);
  
    useEffect(() => {
     
      Axios.get('http://localhost:3002/newsData', {
        
      })
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);
  

  return (

<div className="video-containerbg">
    <video autoPlay muted loop id="video-backgroundbg">
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <button id='back' onClick={goBack}>Back</button>

    <div>
      <h2>Agricultural News</h2>
      <br />
      <div className="blog-container">
        {data.map((post, index) => (

        //   <div key={index} className="blog-post">
        //     <img src={post.image} alt={post.title} onClick={() => handleThumbnailClick(post.link)} />
        //     <h3>{post.title}</h3>
        //   </div>

              <div key={index} className="card flex">
            <div className="users">
              <img src={`data:image/jpeg;base64, ${post.image}`} alt={post.title} />
            </div>
            <div className="cardText">
              <span>
              <a href={post.link}>
                {post.title} </a><br />
              </span>
            </div>
          </div>


        ))}
      </div>
    </div>

  </div>
    

  );
};

export default AgriculturalNews;
