import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DataTable.css'; // Import a separate CSS file for your DataTable styles

const DataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3005/get_advice')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
  

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
