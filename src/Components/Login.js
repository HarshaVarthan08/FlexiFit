import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import Navbar from "./Navbar";

export function Login() {
  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    password: "",
  });
  const navigate = useNavigate();
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.usernameOrEmail || !formData.password) {
      alert("Please fill in all fields");
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedUsernameOrEmail = storedUser?.email;
    const storedPassword = storedUser?.password;

    if (!storedUsernameOrEmail || !storedPassword) {
      alert("User not found. Please sign up.");
      return;
    }

    if (
      formData.usernameOrEmail === storedUsernameOrEmail &&
      formData.password === storedPassword
    ) {
      alert("Login successful!");
      navigate('/stats');
      setLoginSuccess(true);
    } else {
      alert("Invalid credentials. Please try again.");
    }

    setFormData({
      usernameOrEmail: "",
      password: "",
    });
  };

  return (
    <div>

    <Navbar />
    <div className="login-body">
      <div className="login-form-container">
        <form onSubmit={handleSubmit} className="login-form">
          <h1>
            <b>LOGIN</b>
          </h1>
          <br />
          <label>
            <input
              type="text"
              name="usernameOrEmail"
              placeholder="USER NAME/EMAIL ADDRESS"
              value={formData.usernameOrEmail}
              onChange={handleChange}
              className="login-input"
              required
            />
          </label>
          <br />
          <label>
            <input
              type="password"
              name="password"
              placeholder="PASSWORD"
              value={formData.password}
              onChange={handleChange}
              className="login-input"
            />
          </label>
          
          <br />
          <Link to="/forgot-password" className="login-link">
            FORGOT PASSWORD
          </Link>
          <br />
          <button type="submit" className="login-button">CLICK</button>
          <br />
          {loginSuccess ? (
            <Link to="/" className="login-link">Go to Home</Link>
          ) : (
            <Link to="/" className="login-link"></Link>
          )}
        </form>
      </div>
    </div>
    </div>
  );
}

export default Login;
