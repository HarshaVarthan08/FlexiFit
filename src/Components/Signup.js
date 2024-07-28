import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './Login.css'; 

export function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword) {
      alert('Please fill in all fields');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const user = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };

    localStorage.setItem('user', JSON.stringify(user));

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });

    alert('Signup successful!');
    navigate('/adwork'); 
  };

  return (
    <div>
      <Navbar />
      <div className="login-body">
        <div className="login-form-container">
          <form onSubmit={handleSubmit} className="login-form">
            <h1>
              <b>SIGN UP</b>
            </h1>
            <label>
              <input
                type="text"
                name="firstName"
                placeholder="FIRST NAME"
                value={formData.firstName}
                onChange={handleChange}
                className="login-input"
                required
              />
            </label>
            
            <label>
              <input
                type="text"
                name="lastName"
                placeholder="LAST NAME"
                value={formData.lastName}
                onChange={handleChange}
                className="login-input"
                required
              />
            </label>
            
            <label>
              <input
                type="email"
                name="email"
                placeholder="EMAIL ADDRESS"
                value={formData.email}
                onChange={handleChange}
                className="login-input"
                required
              />
            </label>
            
            <label>
              <input
                type="password"
                name="password"
                placeholder="SET PASSWORD"
                value={formData.password}
                onChange={handleChange}
                className="login-input"
                required
              />
            </label>
            
            <label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="RE-ENTER PASSWORD"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="login-input"
                required
              />
            </label>
            
            <button type="submit" className="login-button">CLICK</button>
            <br />
            <Link to="/login" className="login-link">Go to Login</Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
