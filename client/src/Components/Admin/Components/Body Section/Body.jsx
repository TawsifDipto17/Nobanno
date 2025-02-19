import React from 'react'
import './body.css'
import Top from './Top Section/Top'
import Listing from './Listing Section/Listing'
import Activity from './Activity Section/Activity'
import BlogForm from '../../blogForm'
import NewsForm from '../../newsForm'
import CropForm from '../../cropForm'

const Body = () => {
  return (
    <div className='mainContent'>
      {/* <Top/> */}
      <div className="top flex">
         <BlogForm/>
      </div>

      <div className='bottom flex'>
         <NewsForm/>
      </div>
      <div className='bottom flex'>
         <CropForm/>
      </div>
    </div>
  )
}

export default Body
