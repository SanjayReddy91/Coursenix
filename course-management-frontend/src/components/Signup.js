import React, { useState } from 'react';
import { api } from '../api';
import './Signup.css'; // Import the new CSS file for styling

const Signup = ({ type }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstname: '',
    lastname: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response =
        type === 'user'
          ? await api.user.signup(formData)
          : await api.admin.signup(formData);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error occurred');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form-wrapper">
        <h2 className="signup-title">{type === 'admin' ? 'Admin' : 'User'} Signup</h2>
        <p className="signup-subtitle">Create your account to get started!</p>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="signup-input"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="signup-input"
          />
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            value={formData.firstname}
            onChange={handleChange}
            required
            className="signup-input"
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={formData.lastname}
            onChange={handleChange}
            required
            className="signup-input"
          />
          <button type="submit" className="signup-button">Signup</button>
        </form>
        {message && <p className="signup-message">{message}</p>}
      </div>
    </div>
  );
};

export default Signup;
