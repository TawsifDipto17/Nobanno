import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DataTable.css'; // Import a separate CSS file for your DataTable styles

const DataTable = () => {
  const [data, setData] = useState([]);

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
              <td>{item.slot1}</td>
              <td>{item.slot2}</td>
              <td>{item.slot3}</td>
              <td>{item.slot4}</td>
              <td>{item.sendLink}</td>
              <td>{item.start}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
