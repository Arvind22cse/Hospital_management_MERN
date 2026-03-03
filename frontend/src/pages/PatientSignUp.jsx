import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PatientSignUp.css';
import { signup as authSignup } from '../services/auth.js';

const PatientSignUp = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await authSignup(form);
      if (res.userId) {
        alert('Signup successful, please log in');
        navigate('/signin');
      } else {
        setError(res.message || 'Signup failed');
      }
    } catch (err) {
      setError(err.message || 'Signup failed');
    }
  };

  return (
    <div className="auth-page">
      <h1 className="page-title">Patient Sign Up</h1>
      <form className="auth-form" onSubmit={handleSubmit}>
        {error && <div className="error-msg">{error}</div>}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="primary-btn">
          Create Account
        </button>
      </form>
      <p className="auth-footer">
        Already have an account? <a href="/signin">Sign in</a>
      </p>
    </div>
  );
};

export default PatientSignUp;