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
    <header>
      <h1>Header</h1>
    </header>
  );
};

export default Header;