import React from 'react'
import Sidebar from './Components/Sidebar Section/Sidebar'
import Body from './Components/Body Section/Body'

const Dashboard =()=>{
const storedEmail = localStorage.getItem('email');

console.log(storedEmail)

    return (
        <div className='dashboard flex'>
            <div className="dashboardContainer flex">
                <Sidebar/>
                <Body/>
            </div>
        </div>
    )
}
export default Dashboard;