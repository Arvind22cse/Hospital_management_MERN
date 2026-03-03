import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '/src/pages/Header.jsx';
import './BookDoctor.css';

const BookDoctor = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ patient: '', doctor: '', date: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Doctor booked for ' + form.patient);
    navigate('/receptionist');
  };

  return (
    <div className="book-doctor-page">
      <Header role="Receptionist Panel" userName="Receptionist" onLogout={() => navigate('/signin')} />
      <div className="container">
        <h1 className="page-title">Book Doctor</h1>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Patient Name</label>
            <input name="patient" value={form.patient} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Doctor</label>
            <select name="doctor" value={form.doctor} onChange={handleChange} required>
              <option value="">Select</option>
              <option>Dr. Priya Sharma</option>
              <option>Dr. Amit Patel</option>
            </select>
          </div>
          <div className="form-group">
            <label>Date</label>
            <input type="date" name="date" value={form.date} onChange={handleChange} required />
          </div>
          <button type="submit" className="primary-btn">
            Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookDoctor;