// BlogForm.jsx

import React, { useState } from 'react';
import Axios from 'axios';
import './blogForm.css';

const BlogForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    image: '', // Updated to store the file object
    link: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    
    // If the input is of type 'file', update 'image' with the file object
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
    data.append('link', formData.link);

    console.log(data)

    Axios.post('http://localhost:3002/addBlog', data,{
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
    <div className='mainDiv'>
      <h1>ব্লগ পোস্ট ফর্ম </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Blog Title:</label>
          <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />
        </div>
        <br />
        <div>
          <label htmlFor="image">Image: </label>
          <input type="file" id="image" name="image" accept="image/*" onChange={handleChange} />
        </div>
        <br />
        <div>
          <label htmlFor="link">Post Link:</label>
          <textarea id="link" name="link" value={formData.link} onChange={handleChange}></textarea>
        </div>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BlogForm;
