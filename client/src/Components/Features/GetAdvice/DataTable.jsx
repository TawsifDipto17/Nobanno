import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DataTable.css'; // Import a separate CSS file for your DataTable styles

const DataTable = () => {
  let email = localStorage.getItem('email');
  
  
    const [data, setData] = useState([]);
  
  
    const handleSubmit = () => {
      if(email==null){
      email='none'
    }
   
      axios.post('http://localhost:3005/get_advice', {
        LoginEmail: email,
      })
      .then((response) => {
        console.log('Meet_link data sent successfully');
      })
      .catch((error) => {
        console.error('Error sending Meet_link data:', error);
      });
  
    };
  
   useEffect(() => {
    if (email === undefined || email === null) {
      email = 'none';
    }
  
    axios.get('http://localhost:3005/get_advice', {
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
          {data.map((item, index) => (
              <tr key={index}>
                <td>{item.officer_name}</td>
                <td>
                <img src={`data:image/jpeg;base64, ${item.image}`} alt="User" />

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