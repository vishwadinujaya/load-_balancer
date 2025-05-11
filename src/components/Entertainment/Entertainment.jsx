import React, { useState } from 'react';
import './Entertainment.css';

const Entertainment = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section id="entertainment" className="entertainment-section">
      <div className="entertainment-container">
        <h2>System Demo Video</h2>
        
        <div className="video-container">
          {showVideo ? (
            <div className="video-wrapper">
              <video
                src="/src/assets/system-video.mp4"
                title="Load Balancing System Demo"
                controls
                autoPlay
                muted
                style={{ width: '100%', height: 'auto' }}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          ) : (
            <div className="video-placeholder" onClick={() => setShowVideo(true)}>
              <div className="play-button">
                <svg viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" fill="#fff"/>
                </svg>
              </div>
            </div>
          )}
        </div>

        <p>Watch our load balancing system in action</p>
      </div>
    </section>
  );
};

export default Entertainment;
