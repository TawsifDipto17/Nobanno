import React from 'react'
import './top.css'
import { BiSearchAlt } from 'react-icons/bi'
import { TbMessageCircle } from 'react-icons/tb'
import { MdOutlineNotificationsNone } from 'react-icons/md'
import { BsArrowRightShort, BsQuestionCircle } from 'react-icons/bs'

import img from '../../../Asset/admin.svg'
import img2 from '../../../Asset/tree.png'
import video from '../../../Asset/tomato.mp4'


const Top = () => {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
        <h1>ছাদকৃষি </h1>
          <p>ছাদকৃষি সেকশনে আপনাকে স্বাগতম </p>
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

      <div className="cardSection flex">
        <div className='disease-dash'>
          <h1>সোনার বাংলা আসুক প্রযুক্তির হাত ধরে</h1>
          <br></br>
          <p>সকল কৃষি জিজ্ঞাসার সমাধান, কৃষকের হাতের মুঠোয় </p>
          <div className="buttons flex">
            <button className='btn'>বিস্তারিত জানুন</button>
            <button className='btn transparent'>আমাদের গল্প</button>

            
          </div>
      
        </div>

        <div className="vid">
      <br></br>
      <br></br>
            <center><video src={video} autoPlay loop muted></video></center>
            <br></br>
            <br></br>
          </div>
      </div>
   
    </div>
  )
}

export default Top
