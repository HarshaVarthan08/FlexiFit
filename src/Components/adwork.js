import React, { useState } from 'react';
import './adwork.css';
import {Link} from 'react-router-dom';
const adwork = () => {
 
  return (
    <div className="profile-container">
      <h1>Personalize Profile</h1>
      <div className="profile-image-container">
       
        <label htmlFor="image-upload">
          <div className="profile-image">
            
          </div>
        </label>
      </div>
      <div className="profile-input-container">
        <label>Weight (lb)
          <input 
            type="text" 
            placeholder="Enter Weight (lb)" 
            
            
          />
        </label>
        <label>Height (ft)
          <input 
            type="text" 
            placeholder="Enter Height (ft)" 
            
            
          />
        </label>
        <label>Height (in)
          <input 
            type="text" 
            placeholder="Enter Height (in)" 
          
           
          />
        </label>
        <label>City
          <input 
            type="text" 
            placeholder="Enter City" 
            
           
          />
        </label>
        <label>State
          <input 
            type="text" 
            placeholder="Enter State" 
           
            
          />
        </label>
        <label>Location
          <select 
            
            
          >
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Australia">Australia</option>
            
          </select>
        </label>
      </div>
      <div className="profile-buttons">
      <Link to='/Login' ><button className="skip-button" >Skip for Now</button></Link>
      <Link to='/Login' >  <button className="done-button" >Done</button></Link>
     
      </div>
    </div>
  );
};

export default adwork;
