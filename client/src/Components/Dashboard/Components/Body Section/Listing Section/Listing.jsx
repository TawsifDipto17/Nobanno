import React from 'react'
import './listing.css'
import {BsArrowRightShort} from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'

import paddy from '../../../Asset/Paddy.png'
import potato from '../../../Asset/potato.png'
import tomato from '../../../Asset/tomato_plant.png'
import rose from '../../../Asset/rose.png'
import img2 from '../../../Asset/news1.jpg'
import img3 from '../../../Asset/news2.jpg'
const Listing = () => {
  return (
    <div className="listingSection">

      <div className="heading flex">
        <h1>নির্বাচিত </h1>
        <button className='btn flex'>
          আরো দেখুন <BsArrowRightShort className='icon'/>
        </button>
      </div>

      <div className="secContainer flex">
        
        <div className="singleItem">
          <AiFillHeart className='icon'/>
            <img src={paddy} alt="listPlant" />
            <h3>ধান </h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className='icon'/>
            <img src={potato} alt="listPlant" />
            <h3>আলু</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className='icon'/>
            <img src={tomato} alt="listPlant" />
            <h3>টমেটো</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className='icon'/>
            <img src={rose} alt="listPlant" />
            <h3>গোলাপ</h3>
        </div>

      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>সাম্প্রতিক খবর</h3>
            <button className='btn flex'>
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
            <h3>Featured Sellers</h3>
            <button className='btn flex'>
            See All <BsArrowRightShort className='icon'/>
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={img2} alt="seller" />
              {/* <img src={img2} alt="seller" />
              <img src={img2} alt="seller" />
              <img src={img2} alt="seller" /> */}
            </div>
            <div className="cardText">
              <span>
                28,556 Plants Sold <br />
                <small>
                  26 Sellers <span className='date'>31 Days
                  </span>
                </small>
              </span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Listing
