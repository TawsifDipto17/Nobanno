import React from 'react'
import './listing.css'
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

  return (
    <div className="listingSection">

      <div className="heading flex">
        <h1>নির্বাচিত </h1>
        
      </div>

      <div className="secContainer flex">
      <Link to={'/disease'}>
                        
        <div className="singleItem"  onClick={() => selectItem('ধান')}>
          <AiFillHeart className='icon'/>
            <img src={paddy} alt="listPlant" />
            <h3>ধান </h3>
           
                      
        </div>
        </Link >

        <Link to={'/disease'}>
        <div className="singleItem" onClick={() => selectItem('আলু')}>
          <AiOutlineHeart className='icon'/>
            <img src={potato} alt="listPlant" />
            <h3>আলু</h3>
        </div>
        </Link >

        <Link to={'/disease'}>
        <div className="singleItem" onClick={() => selectItem('টমেটো')}>
          <AiOutlineHeart className='icon'/>
            <img src={tomato} alt="listPlant" />
            <h3>টমেটো</h3>
        </div>
        </Link >

        <Link to={'/disease'}>
        <div className="singleItem" onClick={() => selectItem('বেগুন')}>
          <AiOutlineHeart className='icon'/>
            <img src={brinjal} alt="listPlant" />
            <h3>বেগুন</h3>
        </div>
        </Link>

      </div>

      
    </div>
  )
}

export default Listing
