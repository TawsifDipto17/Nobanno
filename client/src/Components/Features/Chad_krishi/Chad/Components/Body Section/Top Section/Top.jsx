import React from 'react'
import './top.css'
import { BiSearchAlt } from 'react-icons/bi'
import { TbMessageCircle } from 'react-icons/tb'
import { MdOutlineNotificationsNone } from 'react-icons/md'
import { BsArrowRightShort, BsQuestionCircle } from 'react-icons/bs'
import { useSelectedItem } from '../../../../../../../SelectedItemContext';

import img from '../../../Asset/admin.svg'
import img2 from '../../../Asset/tree.png'
import rose from '../../../Asset/rose.mp4'
import tomato from '../../../Asset/tomato.mp4'
import paddy from '../../../Asset/paddy.mp4'
import brinjal from '../../../Asset//brinjal.mp4'
import potato_farm from '../../../Asset/potato_farm.jpg'


const Top = () => {
  const { selectedItem } = useSelectedItem();
  let selectVideo = () => {
    if (selectedItem === 'ধান') {
      return paddy;
    }
    if (selectedItem === 'গোলাপ') {
      return rose;
    }
    if (selectedItem === 'টমেটো') {
      return tomato;
    }
    if (selectedItem === 'বেগুন') {
      return brinjal;
    }
    // Debugging: Log the selected video URL
    console.log('Selected Video URL:', 'No video found for', selectedItem);
  };

  const videoSrc = selectVideo();
  console.log('Final Video Source:', videoSrc);

  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1> ছাদকৃষি </h1>
          <p>ছাদকৃষি সেকশনে আপনাকে স্বাগতম </p>
        </div>
        <div className="searchBar flex">
          <input type='text' placeholder='ড্যাশবোর্ডে খুঁজুন' />
          <BiSearchAlt className="icon" />
        </div>

        <div className="adminDiv flex">
          <TbMessageCircle className="icon" />
          <MdOutlineNotificationsNone className="icon" />
          <div className="adminImage">
            <img src={img} alt='Admin Image' />
          </div>
        </div>

      </div>

      <div className="vid">
      <br></br>
      <br></br>
            <center><video src={videoSrc} autoPlay loop muted></video></center>
            <br></br>
            <br></br>
          </div>
    </div>
  )
}

export default Top
