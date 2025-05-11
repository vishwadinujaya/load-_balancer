import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const HeroWithAuthButton = () => {
  const navigate = useNavigate();

  return (
    <div className="hero" style={{position: 'relative'}}>
      {/* Your existing hero content */}
      <h1>Welcome to Our System</h1>
      <p>Advanced load balancing solutions</p>
      
      {/* Auth button - positioned absolutely in top-right */}
      <button
        onClick={() => navigate('/auth')} 
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
          fontSize: '16px',
          zIndex: 100
        }}
      >
        Sign In / Sign Up
      </button>
    </div>
  );
};

export default HeroWithAuthButton;
