import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './WorkoutCalendar.css';
import Sidebar from './Sidebar';
import TopBar from './TopBardash'; 

const WorkoutCalendar = () => {
  const [value, setValue] = useState(new Date());
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = (date) => {
    const workoutName = prompt('Enter workout name:');
    const workoutDuration = prompt('Enter workout duration (HH:MM:SS):');
    const workoutCalories = prompt('Enter calories burned:');
    if (workoutName && workoutDuration && workoutCalories) {
      setWorkouts([...workouts, { date, name: workoutName, duration: workoutDuration, calories: parseInt(workoutCalories) }]);
    }
  };

  const getTotalWorkouts = () => workouts.length;

  const getTotalDuration = () => {
    const totalSeconds = workouts.reduce((total, workout) => {
      const [hours, minutes, seconds] = workout.duration.split(':').map(Number);
      return total + (hours * 3600) + (minutes * 60) + seconds;
    }, 0);

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const getTotalCalories = () => workouts.reduce((total, workout) => total + workout.calories, 0);

  const renderTileContent = ({ date, view }) => {
    if (view === 'month') {
      const workout = workouts.find((workout) => workout.date.toDateString() === date.toDateString());
      return workout ? (
        <div className="workout">
          <span role="img" aria-label="workout">🏋️</span>
          <span>{workout.name}</span>
          <span>{workout.duration}</span>
        </div>
      ) : null;
    }
  };

  return (
    <div>
      <TopBar />
      <Sidebar />
      <div className="calendar-container">
        <div className="stats">
          <div>
            <span>Distance (mi):</span> <span>0.00</span>
          </div>
          <div>
            <span>Duration:</span> <span>{getTotalDuration()}</span>
          </div>
          <div>
            <span>Calories (kcal):</span> <span>{getTotalCalories()}</span>
          </div>
          <div>
            <span>Workouts:</span> <span>{getTotalWorkouts()}</span>
          </div>
        </div>
        <div className="calendar-header">
          <span>Monthly View</span>
          <button onClick={() => addWorkout(value)}>Add Workout</button>
        </div>
        <div className="cl">
          <Calendar
            onChange={setValue}
            value={value}
            tileContent={renderTileContent}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkoutCalendar;
