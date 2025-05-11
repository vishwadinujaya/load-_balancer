import React from 'react';
import './System.css';
// Placeholder for system diagram - add image file later
const systemImage = null;

const SystemNew = () => {
  return (
    <div className="system">
      <div className="system-header">
        <h2>Ship Load Balancing System</h2>
        <p>Seas are unpredictable — but your cargo doesn't have to be</p>
      </div>

      <div className="system-features">
        <div className="feature-card">
          <div className="feature-icon">⚖️</div>
          <h3>Precision Weight Distribution</h3>
          <p>Intelligently maps cargo containers for optimal weight distribution using advanced algorithms that account for 27+ stability parameters</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📊</div>
          <h3>Real-Time Data Handling</h3>
          <p>Continuously monitors and adjusts cargo placement based on changing sea conditions and vessel movement</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🛡️</div>
          <h3>Advanced Safety Checks</h3>
          <p>Validates stability against IMO requirements to safeguard vessels, cargo and crew on every voyage</p>
        </div>
      </div>

      <div className="system-demo">
        {systemImage && <img src={systemImage} alt="Ship load balancing system diagram" />}
        <div className="demo-text">
          <h3>Navigate the Future of Maritime Safety</h3>
          <p>Our system provides seamless technology at your fingertips:</p>
          <ul>
            <li>Dynamic load adjustment for rough weather conditions</li>
            <li>Automated stability calculations preventing human error</li>
            <li>Visual cargo placement interface reducing loading time by 30%</li>
            <li>Reduces fuel consumption by 15% through optimal distribution</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SystemNew;
