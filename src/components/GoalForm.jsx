import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const GoalForm = () => {
  const { addGoal } = useAppContext();
  const [goal, setGoal] = useState({
    title: '',
    description: '',
    targetDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10)
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGoal({ ...goal, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addGoal(goal);
    setGoal({
      title: '',
      description: '',
      targetDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10)
    });
  };

  return (
    <div className="card">
      <h3>Set New Goal</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Goal Title</label>
          <input
            type="text"
            id="title"
            name="title"
            className="form-control"
            value={goal.title}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            className="form-control"
            value={goal.description}
            onChange={handleChange}
            rows="3"
          ></textarea>
        </div>
        
        <div className="form-group">
          <label htmlFor="targetDate">Target Date</label>
          <input
            type="date"
            id="targetDate"
            name="targetDate"
            className="form-control"
            value={goal.targetDate}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit" className="btn btn-primary">Add Goal</button>
      </form>
    </div>
  );
};

export default GoalForm;