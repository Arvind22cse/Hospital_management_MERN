import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from './Header.jsx';
import './ReceptionistDashboard.css';

const ReceptionistDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="receptionist-dashboard">
      <Header role="Receptionist Panel" userName="Receptionist" onLogout={() => navigate('/signin')} />
      <div className="dashboard-container">
        <h1 className="page-title">Receptionist Dashboard</h1>
        <div className="stats-grid">
          <div className="stat-card">
            <h2>0</h2>
            <p>Appointments</p>
          </div>
          <div className="stat-card">
            <h2>0</h2>
            <p>Receipts</p>
          </div>
        </div>
        <div className="section-header">
          <Link to="/receptionist/receipts" className="primary-btn">
            Manage Receipts
          </Link>
          <Link to="/receptionist/book-doctor" className="primary-btn">
            Book Doctor
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReceptionistDashboard;