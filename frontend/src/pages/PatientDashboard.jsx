import React from 'react';
import { useNavigate, NavLink, Outlet } from 'react-router-dom';
import Header from './Header.jsx';
import './PatientDashboard.css';

const PatientDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="patient-dashboard">
      <Header role="Patient Panel" userName="Patient" onLogout={() => navigate('/signin')} />
      <div className="dashboard-container">
        <nav className="patient-nav">
          <NavLink to="/patient" end className={({ isActive }) => isActive ? 'active' : ''}>
            Home
          </NavLink>
          <NavLink to="/patient/doctors" className={({ isActive }) => isActive ? 'active' : ''}>
            Our Doctors
          </NavLink>
          <NavLink to="/patient/book-appointment" className={({ isActive }) => isActive ? 'active' : ''}>
            Book Appointment
          </NavLink>
          <NavLink to="/patient/my-appointments" className={({ isActive }) => isActive ? 'active' : ''}>
            My Appointments
          </NavLink>
        </nav>

        <Outlet />
      </div>
    </div>
  );
};

export default PatientDashboard;