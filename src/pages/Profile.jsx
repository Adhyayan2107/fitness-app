import React from 'react';
import ProfileForm from '../components/ProfileForm';

const Profile = () => {
  return (
    <div className="container">
      <h1>Your Profile</h1>
      <p>Update your personal information to track your fitness journey</p>
      
      <div className="profile-container">
        <ProfileForm />
      </div>
    </div>
  );
};

export default Profile;