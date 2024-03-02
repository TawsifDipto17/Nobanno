import React from 'react'
import './listing.css'
import {BsArrowRightShort} from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'
import { Link , useNavigate} from 'react-router-dom'

import paddy from '../../../Asset/Paddy.png'
import potato from '../../../Asset/potato.png'
import tomato from '../../../Asset/tomato_plant.png'
import rose from '../../../Asset/rose.png'
import img2 from '../../../Asset/news1.jpg'
import img3 from '../../../Asset/news2.jpg'
import img4 from '../../../Asset/blog1.png'
import img5 from '../../../Asset/blog2.png'
import { useSelectedItem } from '../../../../../SelectedItemContext'

const Listing = () => {
  const navigateTo = useNavigate();
  const { selectItem } = useSelectedItem();

  return (
    <div className="listingSection">

      <div className="heading flex">
        <h1>নির্বাচিত </h1>
        <button className='btn flex' onClick={() => navigateTo('/chasabad')} >
          আরো দেখুন <BsArrowRightShort className='icon'/>
        </button>
      </div>

      <div className="secContainer flex">
      
      <Link to={'/chasabad'}>
        <div className="singleItem" onClick={() => selectItem('ধান')}>
        
          <AiFillHeart className='icon'/>
            <img src={paddy} alt="listPlant" />
            <h3>ধান</h3>
        </div>
        </Link>

        <Link to={'/chasabad'}>
        <div className="singleItem" onClick={() => selectItem('আলু')}>
          <AiOutlineHeart className='icon'/>
            <img src={potato} alt="listPlant" />
            <h3>আলু</h3>
        </div>
        </Link>

        <Link to={'/chasabad'}>
        <div className="singleItem">
          <AiOutlineHeart className='icon'/>
            <img src={tomato} alt="listPlant" />
            <h3><a href="/chasabad">টমেটো</a></h3>
        </div>
        </Link>

        <Link to={'/chasabad'}>
        <div className="singleItem">
          <AiOutlineHeart className='icon'/>
            <img src={rose} alt="listPlant" />
            <h3><a href="/chasabad">গোলাপ</a></h3>
        </div>
        </Link>

      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>সাম্প্রতিক খবর</h3>
            <button className='btn flex' onClick={() => navigateTo('/news')} >
            আরো দেখুন <BsArrowRightShort className='icon'/>
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={img2} alt="seller" />
              
            </div>
            <div className="cardText">
              <span><a href="https://www.dhakatribune.com/bangladesh/agriculture/323668/unfair-prices-demotivate-farmers-from-jute">
              ফরিদপুরে পাট চাষে মিলছে না ন্যায্য দাম, কৃষকের উৎসাহ কমছে 
              </a>
              </span>
            </div>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={img3} alt="seller" />
              
            </div>
            <div className="cardText">
              <span><a href="https://www.dhakatribune.com/bangladesh/agriculture/323563/rice-import">
              বিলম্বিত বর্ষা, তাপপ্রবাহের কারণে ধানের ফলন কম হওয়ার আশঙ্কা 
              </a>
              </span>
            </div>
          </div>
        </div>

        <div className="featuredSellers">
          <div className="heading flex">
            <h3>আজকের ব্লগ </h3>
            <button className='btn flex' onClick={() => navigateTo('/blog')} >
            আরো দেখুন <BsArrowRightShort className='icon'/>
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              
              {/* <img src={img2} alt="seller" />
              <img src={img2} alt="seller" />
              <img src={img2} alt="seller" /> */}
              <img src={img4} alt="blog" />
            </div>
            <div className="cardText">
              <span>
              <a href="https://krishibangla.net/%e0%a6%9f%e0%a6%ac%e0%a7%87-%e0%a6%95%e0%a6%b0%e0%a6%b2%e0%a6%be-%e0%a6%9a%e0%a6%be%e0%a6%b7-%e0%a6%aa%e0%a6%a6%e0%a7%8d%e0%a6%a7%e0%a6%a4%e0%a6%bf/">
                টবে করলা চাষ পদ্ধতি </a><br />
              </span>
            </div>
          </div>
          <div className="card flex">
            <div className="users">
              
              {/* <img src={img2} alt="seller" />
              <img src={img2} alt="seller" />
              <img src={img2} alt="seller" /> */}
              <img src={img5} alt="blog" />
            </div>
            <div className="cardText">
              <span>
              <a href="https://krishibangla.net/%e0%a6%9f%e0%a6%ae%e0%a7%87%e0%a6%9f%e0%a7%8b-%e0%a6%97%e0%a6%be%e0%a6%9b%e0%a7%87%e0%a6%b0-%e0%a6%a8%e0%a6%be%e0%a6%ac%e0%a6%bf-%e0%a6%a7%e0%a7%8d%e0%a6%ac%e0%a6%b8%e0%a6%be-%e0%a6%b0%e0%a7%8b/">
              টমেটো গাছের নাবি ধ্বসা রোগ </a><br />
              </span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Listing
