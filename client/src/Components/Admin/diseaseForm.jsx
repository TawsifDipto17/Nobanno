import React, { useState } from 'react';
import Axios from 'axios';
import './diseaseForm.css';

const DiseaseForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    image: null, // New field for the image
    disease: '',
    symptom: '',
    cure: ''
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
    "ড্রাগন ফল",
  
// Add more crop names as needed
];

const handleChange = (e) => {
  const { name, value, files } = e.target;

  // If the input is of type 'file', update 'image' with the file object
  const newValue = e.target.type === 'file' ? e.target.files[0] : value;

  setFormData({
    ...formData,
    [name]: newValue,
  });
};

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name',formData.name);
    data.append('image',formData.image);
    data.append('disease',formData.disease);
    data.append('symptom',formData.symptom);
    data.append('cure',formData.cure);

    console.log(data);




    Axios.post('http://localhost:3004/updateDisease', data,{
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => {
        console.log("Success!");
        // Optionally, you can handle success behavior here, e.g., show a success message to the user
        window.location.reload(); // Reload the page after successful submission
      })
      .catch((error) => {
        console.error("Error occurred:", error);
        // Optionally, you can handle error behavior here, e.g., show an error message to the user
      });
  };



  return (
    <div className='mainDiv' >
      <h1>রোগবালাই ফর্ম </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Crop Name:</label>
          {/* Dropdown selection for Crop Name */}
          <select id="name" name="name" value={formData.name} onChange={handleChange} required>
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
          <label htmlFor='image'>Image:</label>
          <input type='file' id='image' name='image' accept='image/*' onChange={handleChange} />
        </div>
        <br />

        <div>
          <label htmlFor="disease">Disease Name:</label>
          <textarea id="disease" name="disease" value={formData.disease} onChange={handleChange}></textarea>
        </div>
        <br />
        <div>
          <label htmlFor="symptom">Symptoms:</label>
          <textarea id="symptom" name="symptom" value={formData.symptom} onChange={handleChange}></textarea>
        </div>
        <br />

        <div>
          <label htmlFor="cure">Cure:</label>
          <textarea id="cure" name="cure" value={formData.cure} onChange={handleChange}></textarea>
        </div>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DiseaseForm;
