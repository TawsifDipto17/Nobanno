import React, { useState } from 'react';
import Axios from 'axios';
import './diseaseForm.css';

const DiseaseForm = () => {
  const [formData, setFormData] = useState({
    name: '',
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
  
// Add more crop names as needed
];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:3004/updateDisease', formData)
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