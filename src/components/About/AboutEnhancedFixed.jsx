import React from 'react';
import './About.css';
import about_img from '../../assets/about.jpg';
import play_icon from '../../assets/play_icon.jpg';

const AboutEnhancedFixed = ({ setPlayState }) => {
  return (
    <section className='about' id='about'>
      <div className="about-left">
        <img 
          src={about_img} 
          alt="Ship load balancing system" 
          className='about-img' 
        />
        <img 
          src={play_icon} 
          alt="Play video" 
          className='play-icon' 
          onClick={() => setPlayState(true)}
          aria-label="Play introduction video"
        />
      </div>
      <div className="about-right">
        <h3>ABOUT OUR SYSTEM</h3>
        <h2>Precision Load Balancing for Maritime Safety</h2>
        <div className="about-content">
          <p>Our advanced load balancing system revolutionizes maritime cargo management with:</p>
          <ul>
            <li>Real-time stability monitoring</li>
            <li>Automated weight distribution</li>
            <li>Safety compliance verification</li>
            <li>Fuel efficiency optimization</li>
          </ul>
          <p>Developed by industry experts with over 35 years of maritime experience, our solution ensures safer, more efficient cargo operations in all sea conditions.</p>
        </div>
      </div>
    </section>
  )
}

export default AboutEnhancedFixed;
