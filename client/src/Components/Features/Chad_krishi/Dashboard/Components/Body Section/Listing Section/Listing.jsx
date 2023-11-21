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
import guava from '../../../Asset/guava.png'
import dragon from '../../../Asset/dragon.png'
import rose from '../../../Asset/rose.png'
import { useSelectedItem } from '../../../../../../../SelectedItemContext'

const Listing = () => {
  const { selectItem } = useSelectedItem();
  const [data, setData] = useState([]);

  useEffect(() => {
   
    Axios.get('http://localhost:3002/roofcropData', {
      
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
      <Link to={'/chad'}>
                        
        <div className="singleItem"  onClick={() => {selectItem('গোলাপ'); localStorage.setItem('crop','গোলাপ');}}>
          <AiFillHeart className='icon'/>
            <img src={rose} alt="listPlant" />
            <h3>গোলাপ</h3>
           
                      
        </div>
        </Link >

        <Link to={'/chad'}>
        <div className="singleItem" onClick={() => {selectItem('পেয়ারা'); localStorage.setItem('crop','পেয়ারা');}}>
          <AiOutlineHeart className='icon'/>
            <img src={guava} alt="listPlant" />
            <h3>পেয়ারা</h3>
        </div>
        </Link >

        <Link to={'/chad'}>
        <div className="singleItem" onClick={() => {selectItem('টমেটো'); localStorage.setItem('crop','টমেটো'); }}>
          <AiOutlineHeart className='icon'/>
            <img src={tomato} alt="listPlant" />
            <h3>টমেটো</h3>
        </div>
        </Link >

        <Link to={'/chad'}>
        <div className="singleItem" onClick={() => {selectItem('ড্রাগন ফল'); localStorage.setItem('crop','ড্রাগন ফল');}}>
          <AiOutlineHeart className='icon'/>
            <img src={dragon} alt="listPlant" />
            <h3>ড্রাগন ফল</h3>
        </div>
        </Link>

         {data.map((crop,index) =>(

          <Link key={index} to={'/chad'}>

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
