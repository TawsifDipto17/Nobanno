// cropForm.jsx

import React, { useState } from 'react';
import Axios from 'axios';
import './cropForm.css';


const CropForm = () => {
    const [formData, setFormData] = useState({
      title: '',
      image: ''
    });
  
    const cropNames = [
            "ধান",
            "গম",
            "পাট",
            "আলু",
            "মুগ",
            "কাঁঠাল",
            "আম",
            "কলা",
            "সরিষা",
            "তিল",
            "শিম",
            "টমেটো",
            "পেঁপে",
            "বাঁধাকপি",
            "মিষ্টি আলু",
            "গোলাপ",
            "বেগুন",
            "পটল",
            "লাউ",
            "সিম",
            "লেবু",
            "পেয়ারা",
            "কমলা",
            "মুলা",
            "পটল",
            "লাউ",
            "লাল শাক",
          
      // Add more crop names as needed
    ];
  
    const handleChange = (e) => {
      const { name, value, files } = e.target;
      const newValue = e.target.type === 'file' ? e.target.files[0] : value;
  
      setFormData({
        ...formData,
        [name]: newValue
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const data = new FormData();
      data.append('title', formData.title);
      data.append('image', formData.image);
  
      console.log(data);
  
      Axios.post('http://localhost:3002/addCrop', data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          console.log("Success!");
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error occurred:", error);
        });
    };
  
    return (
      <div className='mainDiv'>
        <h1>ফসলের তালিকা </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Crop Name:</label>
            {/* Dropdown selection for Crop Name */}
            <select id="title" name="title" value={formData.title} onChange={handleChange} required>
              <option value="" disabled>Select a crop</option>
              {cropNames.map((crop, index) => (
                <option key={index} value={crop}>
                  {crop}
                </option>
              ))}
            </select>
          </div>
          <br />
          <div>
            <label htmlFor="image">Image: </label>
            <input type="file" id="image" name="image" accept="image/*" onChange={handleChange} />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
  
  export default CropForm;