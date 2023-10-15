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
import guava from '../../../Asset/guava.png'
import dragon from '../../../Asset/dragon.png'
import rose from '../../../Asset/rose.png'
import { useSelectedItem } from '../../../../../../../SelectedItemContext'

const Listing = () => {
  const { selectItem } = useSelectedItem();

  return (
    <div className="listingSection">

      <div className="heading flex">
        <h1>নির্বাচিত </h1>
        <button className='btn flex'>
          আরো দেখুন <BsArrowRightShort className='icon'/>
        </button>
      </div>

      <div className="secContainer flex">
      <Link to={'/chad'}>
                        
        <div className="singleItem"  onClick={() => selectItem('গোলাপ')}>
          <AiFillHeart className='icon'/>
            <img src={rose} alt="listPlant" />
            <h3>গোলাপ</h3>
           
                      
        </div>
        </Link >

        <Link to={'/chad'}>
        <div className="singleItem" onClick={() => selectItem('পেয়ারা')}>
          <AiOutlineHeart className='icon'/>
            <img src={guava} alt="listPlant" />
            <h3>পেয়ারা</h3>
        </div>
        </Link >

        <Link to={'/chad'}>
        <div className="singleItem" onClick={() => selectItem('টমেটো')}>
          <AiOutlineHeart className='icon'/>
            <img src={tomato} alt="listPlant" />
            <h3>টমেটো</h3>
        </div>
        </Link >

        <Link to={'/chad'}>
        <div className="singleItem" onClick={() => selectItem('ড্রাগন ফল')}>
          <AiOutlineHeart className='icon'/>
            <img src={dragon} alt="listPlant" />
            <h3>ড্রাগন ফল</h3>
        </div>
        </Link>

      </div>

      
    </div>
  )
}

export default Listing
