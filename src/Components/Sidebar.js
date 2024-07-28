import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Sidebar.css'; 

const Sidebar = () => {
  

  return (
    <div className="sidebar">
      <h2>WORKOUTS</h2>
      <ul>
        <li>
          <NavLink exact to="/dashboard" activeClassName="active-link">
            DASHBOARD
          </NavLink>
        </li>
        <li>
          <NavLink to="/stats" activeClassName="active-link">
            STATS
          </NavLink>
        </li>
        <li>
          <NavLink to="/goal" activeClassName="active-link">
            MY GOALS
          </NavLink>
        </li>
      </ul>
      

    </div>
  );
};

export default Sidebar;
