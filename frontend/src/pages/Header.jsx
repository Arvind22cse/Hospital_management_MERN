import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ role, userName, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (onLogout) onLogout();
    navigate('/signin');
  };

  return (
    <header className="app-header">
      <div className="header-left">
        <h2>MedCare Hospital</h2>
      </div>
      <div className="header-right">
        {userName && <span className="user-info">{userName} ({role})</span>}
        <button onClick={handleLogout} className="secondary-btn">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;