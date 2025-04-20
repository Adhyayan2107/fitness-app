import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">FitnessTracker</Link>
        <div className="navbar-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/workouts" className="nav-link">Workouts</Link>
          <Link to="/goals" className="nav-link">Goals</Link>
          <Link to="/profile" className="nav-link">Profile</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;