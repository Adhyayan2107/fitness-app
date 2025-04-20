# Fitness Tracker App

A comprehensive React-based web application for tracking workouts, setting fitness goals, and monitoring your progress over time.

## Features

- **Multi-page Navigation**: Seamlessly navigate between Home, Workouts, Goals, and Profile pages
- **Workout Tracking**: Log different types of workouts with duration, intensity, and notes
- **Goal Setting**: Create and track fitness goals with target dates
- **Profile Management**: Store and update your personal fitness information
- **Responsive Design**: Works on desktop and mobile devices
- **Data Persistence**: All data is saved in localStorage so your information persists between sessions

## Tech Stack

- React.js
- Vite (for fast development and optimized builds)
- React Router (for multi-page navigation)
- Context API (for state management)
- LocalStorage (for data persistence)
- CSS3 (for responsive styling)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Adhyayan2107/fitness-app.git
cd fitness-tracker
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Usage

### Home Page
The dashboard displays a summary of your fitness journey, including total workouts, completed goals, and recent activity.

### Workouts Page
- View your workout history
- Add new workouts with details like type, duration, intensity, and notes
- Delete unwanted workout entries

### Goals Page
- Set new fitness goals with target dates
- Mark goals as completed when achieved
- View active and completed goals separately

### Profile Page
- Set your personal information like name, age, weight, and height
- Update your fitness level as you progress

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── GoalCard.jsx
│   ├── GoalForm.jsx
│   ├── Navbar.jsx
│   ├── ProfileForm.jsx
│   ├── WorkoutCard.jsx
│   └── WorkoutForm.jsx
├── context/           # Context API for state management
│   └── AppContext.jsx
├── pages/             # Application pages
│   ├── Goals.jsx
│   ├── Home.jsx
│   ├── Profile.jsx
│   └── Workouts.jsx
├── App.css            # Main application styles
├── App.jsx            # Main application component
├── index.css          # Global styles
└── main.jsx           # Entry point
```

## Local Storage

The app uses the browser's localStorage to persist your data:
- Workouts
- Goals
- Profile information

## Contact

Adhyayan Gupta - [@Adhyayan2107](https://fitnesslogg.netlify.app/) - adhyayan2107@gmail.com

Project Link: [https://fitnesslogg.netlify.app/](https://github.com/Adhyayan2107/fitness-app.git)

---

Made with ❤️ by Adhyayan
