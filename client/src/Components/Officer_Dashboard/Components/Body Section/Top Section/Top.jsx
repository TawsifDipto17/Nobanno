import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './top.css'
import { BiSearchAlt } from 'react-icons/bi'
import { TbMessageCircle } from 'react-icons/tb'
import { MdOutlineNotificationsNone } from 'react-icons/md'
import { BsArrowRightShort, BsQuestionCircle } from 'react-icons/bs'
import {CiLogout} from 'react-icons/ci'
import { Link , useNavigate} from 'react-router-dom'

import img from '../../../Asset/admin.svg'
import img2 from '../../../Asset/tree.png'
import video from '../../../Asset/sunsetvideo.mp4'
import WeatherWidget from '../../../weather'


const Top = () => {
  localStorage.setItem('logged', 'officer');
  console.log(localStorage.getItem('logged'));
  const[openProfile, setOpenProfile] = useState(false);
  const [data, setData] = useState([]); //for retrieval

  useEffect(() => {
    let email = localStorage.getItem('email');
    if (email === undefined || email === null) {
      email = 'none';
    }
    Axios.get('http://localhost:3002/officerData', {
      params: {
        LoginEmail: email
      },
    })
      .then((response) => {
        setData(response.data[0]);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  console.log(data)

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
          <div className="adminImage" onClick={()=> setOpenProfile((prev)=>!prev)} >
            <img src={`data:image/jpeg;base64, ${data.image}`} alt='Admin Image' />
          </div>

          
          {
            openProfile && (
              <div className="dropdown-menu">
            <h3>
              {data.username} <br /> 
              <span>কৃষি অফিসার </span>
              </h3>
              <ul>

                <Link to={'/officerprofile'}>
                <li className='dropdownItem'>
                  <img src={img} alt="" />
                  <a href="#">প্রোফাইল </a>
                </li>
                </Link>

                <Link to={'/landing'}>
                <li className='dropdownItem'>
                  <CiLogout className='icon'/>
                  <a href="#">লগ আউট </a>
                </li>
                </Link>
              </ul>
           
          </div>

            )
          }
          




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
            {/* <div className="textdiv">
              <h1>বিবরণী</h1>

              <div className="flex">
                <span>
                  আজঃ <br /> <small>৪ টি অর্ডার</small>
                </span>
                <span>
                  এই মাসেঃ <br /> <small>১৭৫ টি অর্ডার</small>
                </span>
              </div>

              <span className='flex link'>
                আরো দেখুন <BsArrowRightShort
                  className='icon' />
              </span>

              


            </div> */}
            <div className="weather">
            <WeatherWidget/>
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
