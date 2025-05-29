import React, { useRef } from 'react';
import './System.css';
import next_icon from '../../assets/next-icon1.svg';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/gallery-4.jpeg';
import user_2 from '../../assets/gallery-4.jpeg';
import user_3 from '../../assets/gallery-4.jpeg';
import user_4 from '../../assets/gallery-4.jpeg';
import user_5 from '../../assets/gallery-5.png';
import user_6 from '../../assets/gallery-6.webp';
import user_7 from '../../assets/gallery-1.jpg';
import user_8 from '../../assets/gallery-2.png';

const System = () => {
  const sliderRef = useRef(null);

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 500, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -500, behavior: 'smooth' });
    }
  };

  return (
    <section id="system">
      <div className="system-container">
          <button className="nav-button back-button" onClick={handleBack}>
            <img src={back_icon} alt="Previous"/>
          </button>
          <div className="carousel" ref={sliderRef}>
            <ul className="testimonial-list">
              <li className="testimonial-card">
                <div className="card-content">
                  <div className="user-info">
                    <img src={user_1} alt="User 1" className="user-avatar"/>
                    <div>
                      <h3 className="user-name">Tainy Godakanda</h3>
                      <span className="user-title">Maritime Safety Officer</span>
                    </div>
                  </div>
                  <p className="testimonial-text">Our load balancing system reduced fuel consumption by 15% across our fleet by optimizing cargo distribution. The automated calculations prevent human error in weight distribution planning.</p>
                </div>
              </li>
              <li className="testimonial-card">
                <div className="card-content">
                  <div className="user-info">
                    <img src={user_2} alt="User 2" className="user-avatar"/>
                    <div>
                      <h3 className="user-name">Ashan Deemantha</h3>
                      <span className="user-title">Port Operations Manager</span>
                    </div>
                  </div>
                  <p className="testimonial-text">Implementation of this system decreased loading time by 30% while improving safety compliance. The visual interface helps our teams understand optimal cargo placement quickly.</p>
                </div>
              </li>
              <li className="testimonial-card">
                <div className="card-content">
                  <div className="user-info">
                    <img src={user_3} alt="User 3" className="user-avatar"/>
                    <div>
                      <h3 className="user-name">Nisal Lakshan</h3>
                      <span className="user-title">Shipping Logistics Director</span>
                    </div>
                  </div>
                  <p className="testimonial-text">During typhoon season, the system's dynamic load adjustment feature has prevented 3 potential stability incidents. The real-time monitoring is invaluable for rough weather conditions.</p>
                </div>
              </li>
              <li className="testimonial-card">
                <div className="card-content">
                  <div className="user-info">
                    <img src={user_4} alt="User 4" className="user-avatar"/>
                    <div>
                      <h3 className="user-name">Imesh lakshan</h3>
                      <span className="user-title">Naval Architect</span>
                    </div>
                  </div>
                  <p className="testimonial-text">The system's algorithms account for 27 different stability parameters, exceeding IMO requirements. We've integrated it with our ship design process for optimal hull performance.</p>
                </div>
              </li>
              <li className="testimonial-card">
                <div className="card-content">
                  <div className="user-info">
                    <img src={user_5} alt="User 5" className="user-avatar"/>
                    <div>
                      <h3 className="user-name">Thilina Lakshan</h3>
                      <span className="user-title">Fleet Manager</span>
                    </div>
                  </div>
                  <p className="testimonial-text">The automated reporting features have saved us hundreds of hours in compliance documentation. The system generates all required stability reports with a single click.</p>
                </div>
              </li>
              <li className="testimonial-card">
                <div className="card-content">
                  <div className="user-info">
                    <img src={user_6} alt="User 6" className="user-avatar"/>
                    <div>
                      <h3 className="user-name">Araliya Thshmila</h3>
                      <span className="user-title">Chief Engineer</span>
                    </div>
                  </div>
                  <p className="testimonial-text">Integration with our existing systems was seamless. The API allows real-time data exchange with our cargo management and voyage planning systems.</p>
                </div>
              </li>
              <li className="testimonial-card">
                <div className="card-content">
                  <div className="user-info">
                    <img src={user_7} alt="User 7" className="user-avatar"/>
                    <div>
                      <h3 className="user-name">Surj Kulathunga</h3>
                      <span className="user-title">Operations Director</span>
                    </div>
                  </div>
                  <p className="testimonial-text">The predictive analytics module has helped us anticipate stability issues before they occur, reducing corrective actions by 40%.</p>
                </div>
              </li>
              <li className="testimonial-card">
                <div className="card-content">
                  <div className="user-info">
                    <img src={user_8} alt="User 8" className="user-avatar"/>
                    <div>
                      <h3 className="user-name">Rohini Cooray</h3>
                      <span className="user-title">Technical Superintendent</span>
                    </div>
                  </div>
                  <p className="testimonial-text">Customizable dashboards provide each department with exactly the stability metrics they need, improving cross-team communication.</p>
                </div>
              </li>
            </ul>
          </div>
          <button className="nav-button next-button" onClick={handleNext}>
            <img src={next_icon} alt="Next"/>
          </button>
      </div>
    </section>
  )
}

export default System;
