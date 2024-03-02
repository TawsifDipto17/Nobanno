// AgriculturalOfficerList.jsx
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import video from '../../../../assets/grape.mp4';
import './OfficerDatabase.css'

const AgriculturalOfficerList = () => {

  const navigateTo = useNavigate();

  let email = localStorage.getItem('email');

  const [data, setData] = useState([]);

  useEffect(() => {
    let email = localStorage.getItem('email');
    if (email === undefined || email === null) {
      email = 'none';
    }
    Axios.get('http://localhost:3002/allofficerData', {
      params: {
        LoginEmail: email
      },
    })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [email]);

  


  
  console.log(data);
 


  return (

    <div className="video-containerdb">
    <video autoPlay muted loop id="video-backgrounddb">
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <button id='back' onClick={() => navigateTo('/get_advice')}>Back</button>

    <div className="officer-container">
      <h2>Agricultural Officers</h2>
      <table className="officer-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Description</th>
            <th>Image</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {data.map((officer, index) => (
            <tr key={index} className="officer-item">
              <td className="officer-property">{officer.username}</td>
              <td className="officer-property">{officer.email}</td>
              <td className="officer-property">{officer.bio}</td>
              <td className="officer-property">
                <img src={`data:image/jpeg;base64, ${officer.image}`} alt={`${officer.username}'s Image`} style={{ maxWidth: '50px', maxHeight: '50px' }} />
              </td>
              <td className="officer-property">{officer.contact}</td>
              {/* Add more officer properties as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
    
  );
};

export default AgriculturalOfficerList;

