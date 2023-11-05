import React, { useState } from 'react';
import Axios from 'axios';
import './chasabadForm.css';

const ChasabadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:3003/updateCropData', formData)
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
      <h1>Crop Production Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Crop Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
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

export default ChasabadForm;
