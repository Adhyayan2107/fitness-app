import React from 'react';
import { useAppContext } from '../context/AppContext';

const GoalCard = ({ goal }) => {
  const { toggleGoalCompletion, deleteGoal } = useAppContext();
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className={`card goal-card ${goal.completed ? 'completed' : ''}`}>
      <div className="goal-header">
        <h3>{goal.title}</h3>
        <div className="goal-checkbox">
          <input 
            type="checkbox" 
            checked={goal.completed} 
            onChange={() => toggleGoalCompletion(goal.id)}
            id={`goal-${goal.id}`} 
          />
          <label htmlFor={`goal-${goal.id}`}>
            {goal.completed ? 'Completed' : 'Mark as complete'}
          </label>
        </div>
      </div>
      <div className="goal-details">
        {goal.description && <p>{goal.description}</p>}
        <p><strong>Target Date:</strong> {formatDate(goal.targetDate)}</p>
      </div>
      <button 
        className="btn btn-secondary" 
        onClick={() => deleteGoal(goal.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default GoalCard;