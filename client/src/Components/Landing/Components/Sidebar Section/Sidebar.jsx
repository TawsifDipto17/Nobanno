import React from 'react'
import './sidebar.css'
import { Link , useNavigate} from 'react-router-dom'

import logo from '../../Asset/logo1.png'
import {IoMdSpeedometer} from 'react-icons/io'
import {MdDeliveryDining} from 'react-icons/md'
import {MdOutlineExplore} from 'react-icons/md' 
import {BsTrophy} from 'react-icons/bs'
import {AiOutlinePieChart} from 'react-icons/ai'
import {BiTrendingUp} from 'react-icons/bi'
import {MdOutlinePermContactCalendar} from 'react-icons/md'
import {BsCreditCard2Front} from 'react-icons/bs'
import {BsQuestionCircle} from 'react-icons/bs'
import {GiFarmer} from  'react-icons/gi'
import {RiVirusLine} from 'react-icons/ri'
import {PiPottedPlant} from 'react-icons/pi'
import {GrUserExpert} from 'react-icons/gr'
import {FcCameraIdentification} from 'react-icons/fc'
import {toast} from 'react-toastify'
const Sidebar = () => {
  const email = localStorage.getItem('email');
  const support = 'tawsiftashwar@iut-dhaka.edu';
  
  
  const notLoggedIn = (event)=>{
    event.preventDefault();
  
    if(email === "null"){
      toast('পরামর্শ গ্রহণের পূর্বে লগইন করুন');
    } else{
      window.location.href = '/get_advice';
    }

  };

  return (
    
    <div className='sideBar grid'>
      <div className="logoDiv flex">
        <img src={logo} alt="Logo"/>
        <h2>নবান্ন</h2>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">
          তথ্য জানুন
        </h3>
        <ul className="menuLists grid">

          <li className="listItem">
            <a href="/landing" className='menuLink flex'>
              <IoMdSpeedometer className="icon"/>
              <span className="smallText">
                ড্যাশবোর্ড 
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="/chasabad" className='menuLink flex'>
              <GiFarmer className="icon"/>
              <span className="smallText">
                চাষাবাদ
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="/rogbalai" className='menuLink flex'>
              <RiVirusLine className="icon"/>
              <span className="smallText">
                রোগবালাই
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="chad_krishi" className='menuLink flex'>
              <PiPottedPlant className="icon"/>
              <span className="smallText">
                ছাদ কৃষি
              </span>
            </a>
          </li>

        </ul>
      </div>

      <div className="settingsDiv">
        <h3 className="divTitle">
          সমাধান
        </h3>
        <ul className="menuLists grid">
          
          <li className="listItem">
            <a href="#" onClick={notLoggedIn} className='menuLink flex'>
              <GrUserExpert className="icon"/>
              <span className="smallText">
                পরামর্শ
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="/detection" className='menuLink flex'>
              <FcCameraIdentification className="icon"/>
              <span className="smallText">
              রোগ শনাক্তকরণ
              </span>
            </a>
          </li>

          {/* <li className="listItem">
            <a href="#" className='menuLink flex'>
              <MdOutlinePermContactCalendar className="icon"/>
              <span className="smallText">
                Contacts
              </span>
            </a>
          </li> */}

          {/* <li className="listItem">
            <a href="#" className='menuLink flex'>
              <BsCreditCard2Front className="icon"/>
              <span className="smallText">
                Billing
              </span>
            </a>
          </li> */}

        </ul>
      </div>
      <div className="sideBarCard">
        <BsQuestionCircle className='icon'/>
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>

          <h3>হেল্প সেন্টার</h3>
          <p>অভিযোগ ও মতামত জানান 
          </p>
          <button className='btn' onClick={() => { window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${support}&su=${"Requesting Support from Nobanno Team"}`;}} >যোগাযোগ করুন</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
