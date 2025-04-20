import React from 'react';
import { useAppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { workouts, goals, profile } = useAppContext();
  
  // Calculate stats
  const totalWorkouts = workouts.length;
  const completedGoals = goals.filter(goal => goal.completed).length;
  const upcomingGoals = goals.filter(goal => !goal.completed).length;
  
  // Get recent workouts (last 3)
  const recentWorkouts = [...workouts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);
  
  return (
    <div className="container">
      <section className="dashboard-header">
        <h1>Welcome to FitnessTracker{profile.name ? `, ${profile.name}` : ''}!</h1>
        <p>Track your workouts, set fitness goals, and monitor your progress</p>
      </section>
      
      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Total Workouts</h3>
          <p className="stat-number">{totalWorkouts}</p>
          <Link to="/workouts" className="btn btn-secondary">View All</Link>
        </div>
        
        <div className="stat-card">
          <h3>Completed Goals</h3>
          <p className="stat-number">{completedGoals}</p>
          <Link to="/goals" className="btn btn-secondary">View All</Link>
        </div>
        
        <div className="stat-card">
          <h3>Upcoming Goals</h3>
          <p className="stat-number">{upcomingGoals}</p>
          <Link to="/goals" className="btn btn-secondary">Set New Goal</Link>
        </div>
      </div>
      
      <section className="recent-workouts">
        <h2>Recent Workouts</h2>
        {recentWorkouts.length > 0 ? (
          <div className="workouts-list">
            {recentWorkouts.map(workout => (
              <div key={workout.id} className="recent-workout-card">
                <h4>{workout.title}</h4>
                <p>{new Date(workout.date).toLocaleDateString()}</p>
                <p>{workout.duration} minutes | {workout.type}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No workouts logged yet. <Link to="/workouts">Add your first workout!</Link></p>
        )}
      </section>
      
      <section className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="actions-buttons">
          <Link to="/workouts" className="btn btn-primary">Log Workout</Link>
          <Link to="/goals" className="btn btn-primary">Set New Goal</Link>
          <Link to="/profile" className="btn btn-primary">Update Profile</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
