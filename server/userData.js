
import React, { useEffect, useState } from 'react';
import Axios from 'axios';

let user = {
    email: 'john@example.com',
    avatar: 'https://via.placeholder.com/150', // Sample avatar URL
    bio: 'A React enthusiast',
    username: 'ok',
    contact: '123-456-7890',
  };
  
  export function getUserData() {
    let email = localStorage.getItem('email');

    const [details, setDetails] = useState([]);

    useEffect(() => {
      Axios.post('http://localhost:3002/userData', {
        Email: email
      })
        .then((response) => {
          if (Array.isArray(response.data) && response.data.length > 0) {
            setDetails(response.data); // Set the data array in the state
          } else {
            console.error('Data structure is empty or not an array.');
          }
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);
  
    // console.log(details);
    // console.log(email);
    // console.log(details[0].username);
    
    return user;
    // return details;
  }
  
  export function updateUserData(updatedUser) {
    
    user = { ...user, ...updatedUser };
  }
  