import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './admin_chadbagan.css';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import video from '../../../assets/grape.mp4';
import Sidebar from './Components/Sidebar Section/Sidebar';
import ChasabadForm from './chadbaganForm';
import ChadbaganForm from './chadbaganForm';


function AdminChadbagan() {

  return (

    <div className='dashboard flex'>
      <div className="dashboardContainer flex">
        <Sidebar />


        <div className='mainContent'>

          <div className='bottom flex'>
              {/* This is for editing Chadbagan. */}
              <ChadbaganForm/>
          </div>
        </div>
      </div>
    </div>
  );


}


export default AdminChadbagan;
