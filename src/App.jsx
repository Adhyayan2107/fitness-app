import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Workouts from './pages/Workouts';
import Goals from './pages/Goals';
import Profile from './pages/Profile';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <footer>
        <div className="container">
          <p>Made with ❤️ by Adhyayan Gupta</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
