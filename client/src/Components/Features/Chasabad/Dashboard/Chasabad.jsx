import React from 'react'
import Sidebar from '../../../Dashboard/Components/Sidebar Section/Sidebar'
import Body from './Components/Body Section/Body'
const Chasabad =()=>{
    return (
        <div className='dashboard flex'>
            <div className="dashboardContainer flex">
                <Sidebar/>
                <Body/>
            </div>
        </div>
    )
}
export default Chasabad;