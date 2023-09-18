import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DataTable.css'; // Import a separate CSS file for your DataTable styles

const DataTable = () => {
  const [data, setData] = useState([]);
  axios.post('http://localhost:3005/get_advice',
        {
            LoginEmail: login_email,
            LoginPassword:login_password

        }).then((response)=>{
           
            const notify_a=()=>{
                toast('ব্যবহারকারী পাওয়া গিয়েছে!')
                toast('স্বাগতম!')
            }
            const notify_b=()=>{
                toast('ব্যবহারকারী খুঁজে পাওয়া যায়নি!')
            }
            console.log(response.data.message)
            if(response.data.message=='User not found!' ){
                notify_b();
                navigateTo('/login')
                // setLoginStatus('Credentials Don`t Exist!')
            }
            else{
                store(login_email);//Data store
                notify_a();
                navigateTo('/dashboard')
            }
        });
    
  useEffect(() => {
    axios.get('http://localhost:3005/officer_advice')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='container'>
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Column Name</th>
              <th>Image</th>
              <th>Bio</th>
              <th>Slot 1</th>
              <th>Slot 2</th>
              <th>Slot 3</th>
              <th>Slot 4</th>
              <th>Start</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.columnName}</td>
                <td>
                  <img src={item.image} alt="User" />
                </td>
                <td>{item.bio}</td>
                <td>
                  {item.slot1 === null || item.slot1 === 'rejected' ? (
                    <>
                      <button className='confirm'>Confirm</button>
                      <button className='reject'>Reject</button>
                    </>
                  ) : (
                    <div>Filled up</div>
                  )}
                </td>
                <td>
                  {item.slot2 === null || item.slot2 === 'rejected' ? (
                    <>
                      <button className='confirm'>Confirm</button>
                      <button className='reject'>Reject</button>
                    </>
                  ) : (
                    <div>Filled up</div>
                  )}
                </td>
                <td>
                  {item.slot3 === null || item.slot3 === 'rejected' ? (
                    <>
                      <button className='confirm'>Confirm</button>
                      <button className='reject'>Reject</button>
                    </>
                  ) : (
                    <div>Filled up</div>
                  )}
                </td>
                <td>
                  {item.slot4 === null || item.slot4 === 'rejected' ? (
                    <>
                      <button className='confirm'>Confirm</button>
                      <button className='reject'>Reject</button>
                    </>
                  ) : (
                    <div>Filled up</div>
                  )}
                </td>
                <td>
                  <button className='start'>Start</button>
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
