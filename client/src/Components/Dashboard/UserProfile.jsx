// src/UserProfile.js

import React, { useState, useEffect } from 'react';
import { getUserData, updateUserData } from '../../../../server/userData';
import './UserProfile.css';
import video from '../../../assets/grape.mp4'

function UserProfile() {
  const [user, setUser] = useState(getUserData());
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (!isEditing) {
      // Save the updated user data when exiting edit mode
      updateUserData(user);
    }
  }, [isEditing, user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setUser({ ...user, avatar: e.target.result });
    };

    reader.readAsDataURL(file);
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="video-container">
  <video autoPlay muted loop id="video-background">
    <source src={video} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="user-profile">
  <img
        src={user.avatar}
        alt={`${user.firstName} ${user.lastName}`}
        className="profile-image"
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        disabled={!isEditing}
      />
      <h1>{`${user.firstName} ${user.lastName}`}</h1>
      <p>Email: {user.email}</p>
      <form>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </label>
        <label>
          Contact:
          <input
            type="text"
            name="contact"
            value={user.contact}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </label>
        <button type="button" onClick={toggleEdit}>
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </form>
  </div>
</div>

  );
}

export default UserProfile;
