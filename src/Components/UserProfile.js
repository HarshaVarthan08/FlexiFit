import React from 'react';
import './UserProfile.css';
import f4 from './f4.jpeg';
import {Link} from 'react-router-dom';
const UserProfile = () => {

  const user = {
    memberSince: '7/25/2024',
    name: 'Harsha',
    allTimeDistance: '2.0 mi',
    goal: '5',
    height: '167 cm',
    weight: '57 kg'
  };

  return (
    <div className="profile-container">
      <h2 className="header">Profile Information</h2>
      <br />
      <div className="profile-details">
        <div className="avatar" style={{ backgroundImage: `url(${f4})` }}></div>
        <div className="info">
          <div className="info-item">
            <strong>Member Since: </strong>
            <span>{user.memberSince}</span>
          </div>
          <br />
          <div className="info-item">
            <strong>Name: </strong>
            <span>{user.name}</span>
          </div>
          <br />
          <div className="info-item">
            <strong>All Time Distance: </strong>
            <span>{user.allTimeDistance}</span>
          </div>
          <br />
          <div className="info-item">
            <strong>Goals Achieved: </strong>
            <span>{user.goal}</span>
          </div>
          <br />
          <div className="info-item">
            <strong>Height: </strong>
            <span>{user.height}</span>
          </div>
          <br />
          <div className="info-item">
            <strong>Weight: </strong>
            <span>{user.weight}</span>
          </div>
          <br />
        </div>
      </div>
      <Link to='/stats' >  <button className="done-button" >Done</button></Link>
    </div>
  );
};

export default UserProfile;
