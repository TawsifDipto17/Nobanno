import React from 'react'
import './top.css'
import { BiSearchAlt } from 'react-icons/bi'
import { TbMessageCircle } from 'react-icons/tb'
import { MdOutlineNotificationsNone } from 'react-icons/md'
import { BsArrowRightShort, BsQuestionCircle } from 'react-icons/bs'

import img from '../../../Asset/admin.svg'
import img2 from '../../../Asset/tree.png'
import video from '../../../Asset/sunsetvideo.mp4'


const Top = () => {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1> নবান্ন ওয়েবসাইটে স্বাগতম </h1>
          <p>আবারো আসার জন্য ধন্যবাদ! </p>
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

      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1>সোনার বাংলা আসুক প্রযুক্তির হাত ধরে</h1>
          <p>সকল কৃষি জিজ্ঞাসার সমাধান, কৃষকের হাতের মুঠোয় </p>
          <div className="buttons flex">
            <button className='btn'>বিস্তারিত জানুন</button>
            <button className='btn transparent'>আমাদের গল্প</button>
          </div>

          <div className="videoDiv">
            <video src={video} autoPlay loop muted></video>
          </div>
        </div>

        <div className="leftCard flex">
          <div className="main flex">
            <div className="textDiv">
              <h1>My Stat</h1>

              <div className="flex">
                <span>
                  Today <br /> <small>4 Orders</small>
                </span>
                <span>
                  This Month <br /> <small>175 Orders</small>
                </span>
              </div>

              <span className='flex link'>
                Go to my orders <BsArrowRightShort
                  className='icon' />
              </span>


            </div>

            <div className="imgDiv">
              <img src={img2} alt="Tree image" />
            </div>

            <div className="sideBarCard">
              <BsQuestionCircle className='icon' />
              <div className="cardContent">
                <div className="circle1"></div>
                <div className="circle2"></div>

                <h3>হেল্প সেন্টার</h3>
                <p>অভিযোগ ও মতামত জানান
                </p>
                <button className='btn'>যোগাযোগ করুন</button>
              </div>
            </div>


          </div>
        </div>

      </div>
    </div>
  )
}

export default Top
