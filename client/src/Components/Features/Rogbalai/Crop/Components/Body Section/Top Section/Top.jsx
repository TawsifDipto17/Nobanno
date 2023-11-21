import React from 'react'
import './top.css'
import { BiSearchAlt } from 'react-icons/bi'
import { TbMessageCircle } from 'react-icons/tb'
import { MdOutlineNotificationsNone } from 'react-icons/md'
import { BsArrowRightShort, BsQuestionCircle } from 'react-icons/bs'

import img from '../../../Asset/admin.svg'

import video from '../../../Asset/disease2.mp4'



const Top = () => {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1> রোগবালাই </h1>
          <p>রোগবালাই সেকশনে আপনাকে স্বাগতম </p>
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
            <center><video src={video} autoPlay loop muted></video></center>
            <br></br>
            <br></br>
          </div>
    </div>
  )
}

export default Top
