import React, { useState } from 'react';
import Axios from 'axios';
import './chadbaganForm.css';

const ChadbaganForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    image: null,
    introduction: '',
    selectcSpecies: '',
    growingMethod: '',
    selectSoil: '',
    growingSeason: '',
    seed: '',
    climate: '',
    fertilizer: '',
    irrigation: '',
    care: '',
    collect: '',
    storage: ''
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

    data.append('name', formData.name);
    data.append('image', formData.image);
    data.append('introduction', formData.introduction);
    data.append('selectcSpecies', formData.selectcSpecies);
    data.append('growingMethod', formData.growingMethod);
    data.append('selectSoil', formData.selectSoil);
    data.append('growingSeason', formData.growingSeason);
    data.append('seed', formData.seed);
    data.append('climate', formData.climate);
    data.append('fertilizer', formData.fertilizer);
    data.append('irrigation', formData.irrigation);
    data.append('care', formData.care);
    data.append('collect', formData.collect);
    data.append('storage', formData.storage);

    console.log(data);
    

    Axios.post('http://localhost:3003/updateroofCropData', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => {
        console.log('Success!');
        // Optionally, you can handle success behavior here, e.g., show a success message to the user
        window.location.reload(); // Reload the page after successful submission
      })
      .catch((error) => {
        console.error('Error occurred:', error);
        // Optionally, you can handle error behavior here, e.g., show an error message to the user
      });
  };


  return (
    <div className='mainDiv' >
      <h1>ছাদ বাগান ফর্ম </h1>
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
          <label htmlFor="introduction">Introduction:</label>
          <textarea id="introduction" name="introduction" value={formData.introduction} onChange={handleChange}></textarea>
        </div>
        <br />
        <div>
          <label htmlFor="selectcSpecies">Select Species:</label>
          <textarea id="selectcSpecies" name="selectcSpecies" value={formData.selectcSpecies} onChange={handleChange}></textarea>
        </div>
        <br />

        <div>
          <label htmlFor="growingMethod">Growing Method:</label>
          <textarea id="growingMethod" name="growingMethod" value={formData.growingMethod} onChange={handleChange}></textarea>
        </div>
        <br />

        <div>
          <label htmlFor="selectSoil">Select Soil:</label>
          <textarea id="selectSoil" name="selectSoil" value={formData.selectSoil} onChange={handleChange}></textarea>
        </div>
        <br />

        <div>
          <label htmlFor="growingSeason">Growing Season:</label>
          <textarea id="growingSeason" name="growingSeason" value={formData.growingSeason} onChange={handleChange}></textarea>
        </div>
        <br />

        <div>
          <label htmlFor="seed">Seed:</label>
          <textarea id="seed" name="seed" value={formData.seed} onChange={handleChange}></textarea>
        </div>
        <br />

        <div>
          <label htmlFor="climate">Climate:</label>
          <textarea id="climate" name="climate" value={formData.climate} onChange={handleChange}></textarea>
        </div>
        <br />

        <div>
          <label htmlFor="fertilizer">Fertilizer:</label>
          <textarea id="fertilizer" name="fertilizer" value={formData.fertilizer} onChange={handleChange}></textarea>
        </div>
        <br />

        <div>
          <label htmlFor="irrigation">Irrigation:</label>
          <textarea id="irrigation" name="irrigation" value={formData.irrigation} onChange={handleChange}></textarea>
        </div>
        <br />

        <div>
          <label htmlFor="care">Care:</label>
          <textarea id="care" name="care" value={formData.care} onChange={handleChange}></textarea>
        </div>
        <br />

        <div>
          <label htmlFor="collect">Collect:</label>
          <textarea id="collect" name="collect" value={formData.collect} onChange={handleChange}></textarea>
        </div>
        <br />

        <div>
          <label htmlFor="storage">Storage:</label>
          <textarea id="storage" name="storage" value={formData.storage} onChange={handleChange}></textarea>
        </div>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ChadbaganForm;
