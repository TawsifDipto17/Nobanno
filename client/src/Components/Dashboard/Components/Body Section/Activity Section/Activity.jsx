import React from 'react'
import './activity.css'
import {BsArrowRightShort} from 'react-icons/bs'

import user from '../../../Asset/admin.svg'
import link from '../../../Asset/link.png'

const Activity = () => {
  return (
    <div className="activitySection">
      <div className="heading flex">
        <h1>প্রয়োজনীয় লিংকসমূহ</h1>
        <button className='btn flex'>
          আরো দেখুন
          <BsArrowRightShort className='icon'/>
        </button>
      </div>

      <div className="secContainer grid">

        <div className="singleCustomer flex">
          <img src={link} alt="Customer" />
          <div className="customerDetails">
            <span className='name'>
              কৃষি মন্ত্রণালয়
            </span>
            <a href="https://moa.gov.bd/">https://moa.gov.bd/</a>
          </div>
          
        </div>

        <div className="singleCustomer flex">
          <img src={link} alt="Customer" />
          <div className="customerDetails">
            <span className='name'>
              ব্রি নলেজ কর্নার
            </span>
            <a href="http://knowledgebank-brri.org/">http://knowledgebank-brri.org/</a>
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={link} alt="Customer" />
          <div className="customerDetails">
            <span className='name'>
              কৃষি আবহাওয়া
            </span>
             <a href="https://www.bamis.gov.bd/">https://www.bamis.gov.bd/</a>
          </div>
          
        </div>

        <div className="singleCustomer flex">
          <img src={link} alt="Customer" />
          <div className="customerDetails">
            <span className='name'>
              কৃষি গবেষণা ফাউন্ডেশন
            </span>
            <a href="http://www.kgf.org.bd/">http://www.kgf.org.bd/</a>
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default Activity
