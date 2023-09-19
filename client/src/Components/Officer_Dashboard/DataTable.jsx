import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DataTable.css'; 

const DataTable = () => {
let email = localStorage.getItem('email');


const[meet_link,set_link]=useState(' ')
  const [data, setData] = useState([]);


  const handleSubmit = () => {
    if(email==null){
    email='none'
  }
  if(meet_link==null){
    email='none'
  }
    axios.post('http://localhost:3005/officer_advice', {
      LoginEmail: email,
      Meet_link: meet_link
    })
    .then((response) => {
      console.log('Meet_link data sent successfully');
    })
    .catch((error) => {
      console.error('Error sending Meet_link data:', error);
    });

    set_link('');
  };

 useEffect(() => {
  if (email === undefined || email === null) {
    email = 'none';
  }

  axios.get('http://localhost:3005/officer_advice', {
    params: {
      LoginEmail: email,
    },
  })
    .then((response) => {
      setData(response.data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}, [email]);

  

  return (
    <div>

    <div className="meet-container"> <button id="Meet">Create Meet Link</button></div>
       
   
    <div className="table-container">
      <table className="data-table">
        <thead>
          <tr>
            <th>আবেদনকারীর নাম</th>
            <th>ইমেইল</th>
            <th>সকাল ১০-১১টা</th>
            <th>সকাল ১১-১২টা</th>
            <th>বিকেল ৩-৪টা</th>
            <th>বিকেল ৪-৫টা</th>
            <th>লিঙ্ক পাঠান</th>
          
          </tr>
        </thead>
        <tbody>
        {data.map((item, index) => (
              <tr key={index}>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>
                {item.slot1 ? (
                  <>
                    <button className='confirm'>গ্রহণ</button>
                    <button className='reject'>প্রত্যাখ্যান</button>
                  </>
                ) : null}
              </td>
              <td>
                {item.slot2 ? (
                  <>
                    <button className='confirm'>গ্রহণ</button>
                    <button className='reject'>প্রত্যাখ্যান</button>
                  </>
                ) : null}
              </td>
              <td>
                {item.slot3 ? (
                  <>
                    <button className='confirm'>গ্রহণ</button>
                    <button className='reject'>প্রত্যাখ্যান</button>
                  </>
                ) : null}
              </td>
              <td>
                {item.slot4 ? (
                  <>
                    <button className='confirm'>গ্রহণ</button>
                    <button className='reject'>প্রত্যাখ্যান</button>
                  </>
                ) : null}
              </td>
              <td>
                <input type="text" placeholder="লিঙ্ক প্রবেশ করুন"  onChange={(event)=>{
                                    set_link(event.target.value)
                                }}/>
                <button className='send' onClick={handleSubmit}>পাঠান</button>
              </td>
           
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default DataTable;
