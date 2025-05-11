import React from 'react';
import './HeroWithButton.css';

const HeroWithButton = () => {
  const handleClick = () => {
    console.log('Hero button clicked!');
    // Add your button functionality here
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Our Website</h1>
        <p>Discover amazing features</p>
        <button 
          onClick={handleClick}
          className="hero-button"
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroWithButton;
