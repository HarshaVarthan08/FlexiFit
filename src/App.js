import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home.js';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Workouts from './Components/workouts';
import GoalPage from './Components/GoalPage.js';
import WorkoutCalendar from './Components/WorkoutCalendar.js';
import Adwork from './Components/adwork.js';
import Dashboard from './Components/Dashboard.js';
import UserProfile from './Components/UserProfile.js';



const App = () => {
  return (
    <div className='fnt'>
      <Router>
        
      
        <Routes>

          <Route exact path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/workouts" element={<Workouts/>} />
          <Route path="/goal" element={<GoalPage/>} />
          <Route path="/dashboard" element={<WorkoutCalendar/>} />
          <Route path="/adwork" element={<Adwork/>} />
          <Route path="/stats" element={<Dashboard/>}/>
          <Route path="/prof" element={<UserProfile/>}/>
   
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
