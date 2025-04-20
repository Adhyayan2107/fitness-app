import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const ProfileForm = () => {
  const { profile, updateProfile } = useAppContext();
  const [formData, setFormData] = useState(profile);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(formData);
    alert('Profile updated successfully!');
  };

  return (
    <div className="card">
      <h3>Your Profile</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            className="form-control"
            value={formData.age}
            onChange={handleChange}
            min="1"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="weight">Weight (kg)</label>
          <input
            type="number"
            id="weight"
            name="weight"
            className="form-control"
            value={formData.weight}
            onChange={handleChange}
            step="0.1"
            min="0"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="height">Height (cm)</label>
          <input
            type="number"
            id="height"
            name="height"
            className="form-control"
            value={formData.height}
            onChange={handleChange}
            min="0"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="fitnessLevel">Fitness Level</label>
          <select
            id="fitnessLevel"
            name="fitnessLevel"
            className="form-control"
            value={formData.fitnessLevel}
            onChange={handleChange}
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
        
        <button type="submit" className="btn btn-primary">Save Profile</button>
      </form>
    </div>
  );
};

export default ProfileForm;
