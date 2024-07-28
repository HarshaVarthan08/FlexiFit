import React from 'react';
import { useHistory } from 'react-router-dom';
import './TopBar.css'; 
import { Link } from 'react-router-dom';
import f4 from './f4.jpeg';

const TopBardash = () => {
 

  return (
    <div className="top-bar">
      <h1 className="heading">DASHBOARD</h1>
      <div className="right-section">
      <Link to='/prof'><img
          src={f4} 
          alt="Profile"
          className="profile-logo"
        /></Link>
        <Link to='/'><button className="logout-button">
          Logout
        </button></Link>
      </div>
    </div>
  );
};

export default TopBardash;
