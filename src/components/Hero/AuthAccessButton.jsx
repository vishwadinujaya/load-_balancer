import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthAccessButton.css';

const AuthAccessButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/auth')}
      className="auth-access-button"
    >
      <span className="button-text">ACCESS SYSTEM</span>
      <span className="button-icon">🔒</span>
    </button>
  );
};

export default AuthAccessButton;
