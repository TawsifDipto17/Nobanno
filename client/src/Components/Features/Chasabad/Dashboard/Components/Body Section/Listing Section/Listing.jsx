import React, { useEffect, useState } from 'react'
import './listing.css'

import Axios from 'axios';
import {BsArrowRightShort} from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'
import { Link , useNavigate} from 'react-router-dom'

import paddy from '../../../Asset/Paddy.png'
import potato from '../../../Asset/potato.png'
import tomato from '../../../Asset/tomato_plant.png'
import brinjal from '../../../Asset/brinjal.png'
import { useSelectedItem } from '../../../../../../../SelectedItemContext'

const Listing = () => {
  const { selectItem } = useSelectedItem();

  const [data, setData] = useState([]);
  
  useEffect(() => {
   
    Axios.get('http://localhost:3002/cropData', {
      
    })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="listingSection">

      <div className="heading flex">
        <h1>নির্বাচিত </h1>
     
      </div>

      <div className="secContainer flex">
      <Link to={'/crop'}>
                        
        <div className="singleItem"  onClick={() => {selectItem('ধান');  localStorage.setItem('crop','ধান')}}>
          <AiFillHeart className='icon'/>
            <img src={paddy} alt="listPlant" />
            <h3>ধান </h3>
           
                      
        </div>
        </Link >

        <Link to={'/crop'}>
        <div className="singleItem" onClick={() => {selectItem('আলু'); localStorage.setItem('crop','আলু')}}>
          <AiOutlineHeart className='icon'/>
            <img src={potato} alt="listPlant" />
            <h3>আলু</h3>
        </div>
        </Link >

        <Link to={'/crop'}>
        <div className="singleItem" onClick={() => {selectItem('টমেটো');  localStorage.setItem('crop','টমেটো') }}>
          <AiOutlineHeart className='icon'/>
            <img src={tomato} alt="listPlant" />
            <h3>টমেটো</h3>
        </div>
        </Link >

        <Link to={'/crop'}>
        <div className="singleItem" onClick={() => {selectItem('বেগুন'); localStorage.setItem('crop','বেগুন')}}>
          <AiOutlineHeart className='icon'/>
            <img src={brinjal} alt="listPlant" />
            <h3>বেগুন</h3>
        </div>
        </Link>

        {data.map((crop,index) =>(

          <Link key={index} to={'/crop'}>

        <div className="singleItem" onClick={() => { localStorage.setItem('crop',crop.name)}}>
          <AiOutlineHeart className='icon'/>
            <img src={`data:image/jpeg;base64, ${crop.image}`} alt={crop.name} />
            <h3>{crop.name}</h3>
        </div>

        </Link>

        ))}

      </div>

      
    </div>
  )
}

export default Listing
