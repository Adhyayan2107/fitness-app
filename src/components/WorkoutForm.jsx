import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const WorkoutForm = () => {
  const { addWorkout } = useAppContext();
  const [workout, setWorkout] = useState({
    title: '',
    type: 'cardio',
    duration: '',
    intensity: 'medium',
    notes: '',
    date: new Date().toISOString().slice(0, 10)
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkout({ ...workout, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addWorkout(workout);
    setWorkout({
      title: '',
      type: 'cardio',
      duration: '',
      intensity: 'medium',
      notes: '',
      date: new Date().toISOString().slice(0, 10)
    });
  };

  return (
    <div className="card">
      <h3>Add New Workout</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Workout Title</label>
          <input
            type="text"
            id="title"
            name="title"
            className="form-control"
            value={workout.title}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="type">Workout Type</label>
          <select
            id="type"
            name="type"
            className="form-control"
            value={workout.type}
            onChange={handleChange}
          >
            <option value="cardio">Cardio</option>
            <option value="strength">Strength</option>
            <option value="flexibility">Flexibility</option>
            <option value="hiit">HIIT</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="duration">Duration (minutes)</label>
          <input
            type="number"
            id="duration"
            name="duration"
            className="form-control"
            value={workout.duration}
            onChange={handleChange}
            required
            min="1"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="intensity">Intensity</label>
          <select
            id="intensity"
            name="intensity"
            className="form-control"
            value={workout.intensity}
            onChange={handleChange}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            className="form-control"
            value={workout.date}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="notes">Notes</label>
          <textarea
            id="notes"
            name="notes"
            className="form-control"
            value={workout.notes}
            onChange={handleChange}
            rows="3"
          ></textarea>
        </div>
        
        <button type="submit" className="btn btn-primary">Add Workout</button>
      </form>
    </div>
  );
};

export default WorkoutForm;
