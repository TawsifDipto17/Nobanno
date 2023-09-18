import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DataTable.css'; // Import a separate CSS file for your DataTable styles

const DataTable = () => {
const email = localStorage.getItem('email');

  const [data, setData] = useState([]);
  axios.post('http://localhost:3005/officer_advice',
  {
      LoginEmail: email,
      

  }).then((response)=>{
     

  })

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
    <div>

    <div className="meet-container"> <button id="Meet">Create Meet Link</button></div>
       
   
    <div className="table-container">
      <table className="data-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Slot 1</th>
            <th>Slot 2</th>
            <th>Slot 3</th>
            <th>Slot 4</th>
            <th>Send Link</th>
            <th>Start</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>
                {item.slot1 ? (
                  <>
                    <button className='confirm'>Confirm</button>
                    <button className='reject'>Reject</button>
                  </>
                ) : null}
              </td>
              <td>
                {item.slot2 ? (
                  <>
                    <button className='confirm'>Confirm</button>
                    <button className='reject'>Reject</button>
                  </>
                ) : null}
              </td>
              <td>
                {item.slot3 ? (
                  <>
                    <button className='confirm'>Confirm</button>
                    <button className='reject'>Reject</button>
                  </>
                ) : null}
              </td>
              <td>
                {item.slot4 ? (
                  <>
                    <button className='confirm'>Confirm</button>
                    <button className='reject'>Reject</button>
                  </>
                ) : null}
              </td>
              <td>
                <input type="text" placeholder="Enter Link" />
                <button className='send'>Send</button>
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
