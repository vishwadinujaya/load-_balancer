import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2>Our Load Balancing System</h2>

        <div className="features">
          <h3>Key Features:</h3>
          <ul>
            <li>Real-time load monitoring</li>
            <li>Automated weight distribution</li>
            <li>Safety compliance verification</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
