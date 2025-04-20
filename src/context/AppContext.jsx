import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  // Load data from localStorage on initial render
  const [workouts, setWorkouts] = useState(() => {
    const savedWorkouts = localStorage.getItem('workouts');
    return savedWorkouts ? JSON.parse(savedWorkouts) : [];
  });
  
  const [goals, setGoals] = useState(() => {
    const savedGoals = localStorage.getItem('goals');
    return savedGoals ? JSON.parse(savedGoals) : [];
  });
  
  const [profile, setProfile] = useState(() => {
    const savedProfile = localStorage.getItem('profile');
    return savedProfile ? JSON.parse(savedProfile) : {
      name: '',
      age: '',
      weight: '',
      height: '',
      fitnessLevel: 'beginner'
    };
  });

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('workouts', JSON.stringify(workouts));
  }, [workouts]);

  useEffect(() => {
    localStorage.setItem('goals', JSON.stringify(goals));
  }, [goals]);
  
  useEffect(() => {
    localStorage.setItem('profile', JSON.stringify(profile));
  }, [profile]);

  // Workout functions
  const addWorkout = (workout) => {
    setWorkouts([...workouts, { ...workout, id: Date.now() }]);
  };

  const deleteWorkout = (id) => {
    setWorkouts(workouts.filter(workout => workout.id !== id));
  };

  // Goal functions
  const addGoal = (goal) => {
    setGoals([...goals, { ...goal, id: Date.now(), completed: false }]);
  };

  const toggleGoalCompletion = (id) => {
    setGoals(goals.map(goal => 
      goal.id === id ? { ...goal, completed: !goal.completed } : goal
    ));
  };

  const deleteGoal = (id) => {
    setGoals(goals.filter(goal => goal.id !== id));
  };

  // Profile functions
  const updateProfile = (newProfile) => {
    setProfile(newProfile);
  };

  const value = {
    workouts,
    goals,
    profile,
    addWorkout,
    deleteWorkout,
    addGoal,
    toggleGoalCompletion,
    deleteGoal,
    updateProfile
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};