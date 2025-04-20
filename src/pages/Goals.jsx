import React from 'react';
import { useAppContext } from '../context/AppContext';
import GoalForm from '../components/GoalForm';
import GoalCard from '../components/GoalCard';

const Goals = () => {
  const { goals } = useAppContext();
  
  // Separate goals into active and completed
  const activeGoals = goals.filter(goal => !goal.completed);
  const completedGoals = goals.filter(goal => goal.completed);

  return (
    <div className="container">
      <h1>Fitness Goals</h1>
      
      <div className="goals-page">
        <div className="goals-form-container">
          <GoalForm />
        </div>
        
        <div className="goals-lists">
          <div className="active-goals">
            <h2>Active Goals</h2>
            {activeGoals.length > 0 ? (
              activeGoals.map(goal => (
                <GoalCard key={goal.id} goal={goal} />
              ))
            ) : (
              <p>No active goals. Set a new goal to get started!</p>
            )}
          </div>
          
          <div className="completed-goals">
            <h2>Completed Goals</h2>
            {completedGoals.length > 0 ? (
              completedGoals.map(goal => (
                <GoalCard key={goal.id} goal={goal} />
              ))
            ) : (
              <p>No completed goals yet. Keep working on your active goals!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;