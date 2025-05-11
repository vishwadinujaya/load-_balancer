import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const HeroWithAuth = () => {
  const navigate = useNavigate();

  const redirectToAuth = () => {
    navigate('/auth'); // Update with your auth route
  };

  return (
    <div className="hero-container">
      {/* Your existing hero content */}
      <h1>Welcome to Our System</h1>
      <p>Advanced load balancing solutions</p>
      
      <button 
        onClick={redirectToAuth}
        className="auth-button"
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          padding: '10px 20px',
          background: '#212EA0',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          zIndex: 100
        }}
      >
        Sign In / Sign Up
      </button>
    </div>
  );
};

export default HeroWithAuth;
