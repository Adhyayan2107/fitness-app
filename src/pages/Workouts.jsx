import React from 'react';
import { useAppContext } from '../context/AppContext';
import WorkoutForm from '../components/WorkoutForm';
import WorkoutCard from '../components/WorkoutCard';

const Workouts = () => {
  const { workouts } = useAppContext();
  
  // Sort workouts by date (newest first)
  const sortedWorkouts = [...workouts].sort((a, b) => 
    new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="container">
      <h1>Workouts</h1>
      
      <div className="workouts-page">
        <div className="workouts-list">
          <h2>Your Workout History</h2>
          {sortedWorkouts.length > 0 ? (
            sortedWorkouts.map(workout => (
              <WorkoutCard key={workout.id} workout={workout} />
            ))
          ) : (
            <p>No workouts logged yet. Add your first workout!</p>
          )}
        </div>
        
        <div className="workout-form-container">
          <WorkoutForm />
        </div>
      </div>
    </div>
  );
};

export default Workouts;
