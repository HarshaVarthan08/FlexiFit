import React, { useState } from 'react';
import './GoalPage.css';
import g1 from './g1.jpeg';
import g2 from './g2.jpeg';
import g3 from './g3.jpeg';
import g4 from './g4.jpeg';
import g5 from './g5.jpeg';
import g6 from './g6.jpeg';
import TopBar from './TopBargl';
import Sidebar from './Sidebar';

const GoalPage = () => {
  const [activeGoal, setActiveGoal] = useState(null);

  const handleSetGoal = (goal) => {
    setActiveGoal(goal);
  };

  return (
    <div className="goal-page-container">
      <TopBar />
      <Sidebar />
      <header className="goal-page-header">
        <h1>ACHIEVE YOUR BEST</h1>
        <p style={{color:'black'}}>STAY ON TARGET WITH A WEEKLY GOAL </p>
      </header>
      <section className="goal-page-active-goals">
        <h2>ACTIVE GOALS</h2>
        {activeGoal ? (
          <div className="goal-page-goal">
            <h3>{activeGoal.title}</h3>
            <p>0.0 mi completes</p>
            <div className="goal-page-goal-details">
              <div className="goal-page-detail">
                <img src={g1} alt="Distance" width="34" height="34" />
                <span>Distance:</span> 0.0 mi
              </div>
              <div className="goal-page-detail">
                <img src={g6} alt="Duration" width="34" height="34" />
                <span>Duration:</span> 0.0 hours
              </div>
              <div className="goal-page-detail">
                <img src={g4} alt="Workouts" width="34" height="34" />
                <span>Workouts:</span> 0 workouts
              </div>
              <div className="goal-page-detail">
                <img src={g5} alt="Energy Burned" width="34" height="34" />
                <span>Energy Burned:</span> 0.0 kcal
              </div>
              <div className="goal-page-detail">
                <span>Total Time:</span> 6 days
              </div>
            </div>
            <button className="goal-page-stop-goal" onClick={() => setActiveGoal(null)}>STOP GOAL</button>
          </div>
        ) : (
          <p>No active goals. Select a goal from the suggested goals below.</p>
        )}
      </section>
      <section className="goal-page-suggested-goals">
        <h2>SUGGESTED GOALS</h2>
        <div className="goal-page-suggested-goal">
          <h3>Just Getting Started</h3>
          <p>Any Activity 2 times / week</p>
          <button className="goal-page-set-goal" onClick={() => handleSetGoal({ title: 'Just Getting Started', frequency: 'Any Activity 2 times / week' })}>SET GOAL</button>
        </div>
        <div className="goal-page-suggested-goal">
          <h3>Take It Up A Notch</h3>
          <p>Any Activity 3 times / week</p>
          <button className="goal-page-set-goal" onClick={() => handleSetGoal({ title: 'Take It Up A Notch', frequency: 'Any Activity 3 times / week' })}>SET GOAL</button>
        </div>
        <div className="goal-page-suggested-goal">
          <h3>Kick It Into High Gear</h3>
          <p>Any Activity 4 times / week</p>
          <button className="goal-page-set-goal" onClick={() => handleSetGoal({ title: 'Kick It Into High Gear', frequency: 'Any Activity 4 times / week' })}>SET GOAL</button>
        </div>
      </section>
    </div>
  );
};

export default GoalPage;
