import React from 'react';
import { useAppContext } from '../context/AppContext';

const WorkoutCard = ({ workout }) => {
  const { deleteWorkout } = useAppContext();
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="card workout-card">
      <div className="workout-header">
        <h3>{workout.title}</h3>
        <span className={`badge badge-${workout.type}`}>{workout.type}</span>
      </div>
      <div className="workout-details">
        <p><strong>Date:</strong> {formatDate(workout.date)}</p>
        <p><strong>Duration:</strong> {workout.duration} minutes</p>
        <p><strong>Intensity:</strong> {workout.intensity}</p>
        {workout.notes && <p><strong>Notes:</strong> {workout.notes}</p>}
      </div>
      <button 
        className="btn btn-secondary" 
        onClick={() => deleteWorkout(workout.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default WorkoutCard;
