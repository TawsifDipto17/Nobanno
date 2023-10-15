import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './OfficerProfile.css';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import video from '../../../../assets/grape.mp4';

function OfficerProfile() {
  const navigateTo = useNavigate();

  const email = localStorage.getItem('email');
  const [data, setData] = useState([]); //for retrieval

  const [username, setUsername] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [contact, setContact] = useState('');
  const [fileSizeError, setFileSizeError] = useState(false); // Added file size error state

    

  useEffect(() => {
    let email = localStorage.getItem('email');
    if (email === undefined || email === null) {
      email = 'none';
    }
    Axios.get('http://localhost:3002/officerData', {
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

  const handleProfilePictureUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.size > 200 * 1024) { // Check file size (200 KB limit)
      setFileSizeError(true);
      toast('File size exceeds capacity');
      
    } else {
      setProfilePicture(file);
      setFileSizeError(false); // Reset file size error
    }
  }

  const createUser = (e) => {
    e.preventDefault();
    
    if (fileSizeError) {
      // File size exceeded capacity, show an error and prevent submission
      toast('File size exceeds capacity');
      return;
    }

    // Create a FormData object
    const formData = new FormData();

    // Append the files to the FormData object
    if (profilePicture) {
      formData.append('profilePicture', profilePicture);
    }
    

    // Append other data as well
    formData.append('Email', email);
    if (username) {
    formData.append('UserName', username);
    }
    if(contact){
    formData.append('Contact', contact);
    }

    Axios.post("http://localhost:3002/updateOfficerData", formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).then((response) => {
     console.log("Success!");

     window.location.reload();

    })
  }
  console.log(data);

  return (
    <div className="video-container">
      <video autoPlay muted loop id="video-background">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button id='back' onClick={()=>{
        navigateTo('/officer_dashboard');
      }}>Back</button>
      <form action=''>
        {data.map((item,index) => (
      <div className="user-profile" key={index}>
        <img
          src={`data:image/jpeg;base64, ${item.image}`}
          alt="Profile Preview"
          className="profile-image"
        />
        <input
          type="file"
          id='profilePicture'
          accept='image/jpeg, image/png'
          onChange={handleProfilePictureUpload}
          
        />
        <h1>{item.username}</h1>
        <p>Email: {email}</p>
        
          <label>
            Username:
            <input
              type="text"
              id="username"
              placeholder={item.username}
              onChange={(event)=>{
                setUsername(event.target.value)
              }}
            />
          </label>
          <label>
            Contact:
            <input
              type="text"
              id="contact"
              placeholder={item.contact}
              onChange={(event)=>{
                setContact(event.target.value)
              }}
           
            />
          </label>
          <div>
          <button type="submit" onClick={createUser} disabled={fileSizeError}>
              Save
          </button>
          </div>
        
      </div>
      ))}
      </form>
    </div>
  );


}

export default OfficerProfile;
