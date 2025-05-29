import React from 'react';
import './Entertainment.css';

const Entertainment = () => {
  return (
    <section
      id="entertainment"
      className="entertainment-section"
      style={{
        margin: 0,
        padding: 0,
        width: '100vw',
        height: '50vh',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <video
        src="/src/assets/system-video.mp4"
        title="Load Balancing System Demo"
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '50vh',
          objectFit: 'cover',
          filter: 'brightness(0.7)',
          zIndex: -1,
        }}
      >
        Your browser does not support the video tag.
      </video>
      <div
        className="video-overlay-text"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          fontSize: '3rem',
          fontWeight: 'bold',
          textShadow: '3px 3px 6px rgba(0,0,0,0.95)',
          pointerEvents: 'none',
          userSelect: 'none',
          width: '80%',
          maxWidth: 900,
          textAlign: 'center',
          zIndex: 2,
          padding: '0 2rem',
          lineHeight: 1.5,
        }}
      >
        <p>Watch our load balancing system in action</p>
        <p style={{ fontSize: '1.75rem', marginTop: '1.5rem' }}>
          Our system efficiently distributes incoming network traffic across multiple servers to ensure reliability and performance. It dynamically balances the load, prevents server overload, and improves response times, providing a seamless user experience even during peak traffic periods.
        </p>
        <p style={{ fontSize: '1.75rem', marginTop: '1.5rem' }}>
          With advanced algorithms and real-time monitoring, our load balancing solution adapts to changing network conditions, ensuring high availability and fault tolerance for your applications.
        </p>
      </div>
    </section>
  );
};

export default Entertainment;
