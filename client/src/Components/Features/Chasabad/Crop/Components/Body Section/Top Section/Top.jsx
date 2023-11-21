import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import './top.css'
import { BiSearchAlt } from 'react-icons/bi'
import { TbMessageCircle } from 'react-icons/tb'
import { MdOutlineNotificationsNone } from 'react-icons/md'
import { BsArrowRightShort, BsQuestionCircle } from 'react-icons/bs'
import { useSelectedItem } from '../../../../../../../SelectedItemContext';

import img from '../../../Asset/admin.svg'
import img2 from '../../../Asset/tree.png'
import potato from '../../../Asset/potato.mp4'
import tomato from '../../../Asset/tomato.mp4'
import paddy from '../../../Asset/paddy.mp4'
import brinjal from '../../../Asset//brinjal.mp4'
import potato_farm from '../../../Asset/potato_farm.jpg'


const Top = () => {
  const { selectedItem } = useSelectedItem();
  const [details, setDetails] = useState({});
  const select = localStorage.getItem('crop');
  let selectVideo = () => {
    if (select === 'ধান') {
      return paddy;
    }
    if (select === 'আলু') {
      return potato;
    }
    if (select === 'টমেটো') {
      return tomato;
    }
    if (select === 'বেগুন') {
      return brinjal;
    }
    
    
    // Debugging: Log the selected video URL
    console.log('Selected Video URL:', 'No video found for', select);
    return null;
  };

  const videoSrc = selectVideo();
  console.log('Final Video Source:', videoSrc);

    useEffect(() => {
      Axios.post('http://localhost:3003/crop', {
        CropName: select,
        
      })
        .then((response) => {
          if (Array.isArray(response.data) && response.data.length > 0) {
            const cropData = response.data[0];
            console.log(cropData);
            setDetails(cropData); // Set the data in the state
          } else {
            console.error('Data structure does not include introduction.');
          }
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);
  
  
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1> চাষাবাদ </h1>
          <p>চাষাবাদ সেকশনে আপনাকে স্বাগতম </p>
        </div>
        {/* <div className="searchBar flex">
          <input type='text' placeholder='ড্যাশবোর্ডে খুঁজুন' />
          <BiSearchAlt className="icon" />
        </div> */}

        {/* <div className="adminDiv flex">
          <TbMessageCircle className="icon" />
          <MdOutlineNotificationsNone className="icon" />
          <div className="adminImage">
            <img src={img} alt='Admin Image' />
          </div>
        </div> */}

      </div>

      <div className="vid">
      <br></br>
      <br></br>
      {videoSrc ? (
          <center>
            <video src={videoSrc} autoPlay loop muted></video>
          </center>
        ) : (
          <center>
            <img id='chasabad_img' src={`data:image/jpeg;base64, ${details.image}`} alt="Crop Image"  />
          </center>
        )}
            <br></br>
            <br></br>
          </div>
    </div>
  )
}

export default Top
