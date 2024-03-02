import Sidebar from './../../src/Components/Dashboard/Components/Sidebar Section/Sidebar'
import Body from './components/Body Section/Body'
const Yolo =()=>{
    return (
        <div className='dashboard flex'>
            <div className="dashboardContainer flex">
                <Sidebar/>
                <Body/>
            </div>
        </div>
    )
}
export default Yolo;