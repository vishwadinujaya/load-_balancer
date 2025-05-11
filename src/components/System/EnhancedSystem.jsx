import React, { useState } from 'react';
import './System.css';
import './EnhancedSystem.css';

const EnhancedSystem = () => {
  const [expandedSpecs, setExpandedSpecs] = useState(false);
  const [showTestimonials, setShowTestimonials] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Basic validation
    if (username === 'admin' && password === 'password') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  const techSpecs = [
    "27+ stability parameters analyzed",
    "Real-time monitoring every 0.5 seconds", 
    "IMO SOLAS compliant",
    "Works in sea states up to 8",
    "Reduces fuel consumption by 15-20%",
    "30% faster loading operations"
  ];

  const testimonials = [
    {
      name: "Captain John Smith",
      role: "Maritime Safety Officer",
      quote: "Reduced our stability incidents by 90%"
    },
    {
      name: "Maria Gonzalez",
      role: "Port Manager",
      quote: "Cut our loading time by 35% while improving safety"
    }
  ];

  return (
    <section id="solutions" className="system">
      {!isLoggedIn ? (
        <div className="login-form">
          <h2>System Login</h2>
          <form onSubmit={handleLogin}>
            {error && <p className="error">{error}</p>}
            <div className="form-group">
              <label>Username:</label>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-btn">Login</button>
          </form>
        </div>
      ) : (
        <>
          <div className="system-header">
            <h2>Ship Load Balancing System</h2>
            <p>Seas are unpredictable — but your cargo doesn't have to be</p>
            <button className="demo-btn">Request Live Demo</button>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </div>
        </>
      )}

      <div className="system-features">
        <div className="feature-card">
          <div className="feature-icon">⚖️</div>
          <h3>Precision Weight Distribution</h3>
          <p>Advanced algorithms account for:</p>
          <ul>
            {techSpecs.slice(0, expandedSpecs ? techSpecs.length : 3).map((spec, i) => (
              <li key={i}>{spec}</li>
            ))}
          </ul>
          <button onClick={() => setExpandedSpecs(!expandedSpecs)}>
            {expandedSpecs ? 'Show Less' : 'Show More...'}
          </button>
        </div>

        {/* Other feature cards */}
      </div>

      {/* Testimonials section */}
      {showTestimonials && (
        <div className="testimonials">
          <h3>Trusted by Industry Leaders</h3>
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial">
              <p>"{t.quote}"</p>
              <p>- {t.name}, {t.role}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default EnhancedSystem;
