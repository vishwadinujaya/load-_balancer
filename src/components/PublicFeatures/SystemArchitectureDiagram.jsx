import React from 'react';
import './PublicFeatures.css';

const SystemArchitectureDiagram = () => {
  const backgroundStyle = {
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    color: '#eee',
    backgroundImage: 'linear-gradient(rgba(15, 32, 39, 0.7), rgba(32, 58, 67, 0.7)), url(https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  };

  return (
    <section id="system-architecture" className="system-architecture" style={backgroundStyle}>
      <h1 style={{fontSize: '3.5rem', marginBottom: '1rem', color: '#00d9ff'}}>System Architecture Diagram</h1>
      <p>Illustration of the system architecture: IoT devices ➔ Firebase ➔ Dashboard</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <img
          src="/src/assets/88c2d997-f383-4e0c-8629-7039ed7789f9.png"
          alt="System Architecture Diagram 1"
          style={{ width: '30%', height: 'auto' }}
        />
        <img
          src="/src/assets/e608e128-cc8f-48bf-ae22-f861dc11b3ef.png"
          alt="System Architecture Diagram 2"
          style={{ width: '30%', height: 'auto' }}
        />
        <img
          src="/src/assets/4cded798-243e-4330-a2e6-bd4474b84d36.png"
          alt="System Architecture Diagram 3"
          style={{ width: '30%', height: 'auto' }}
        />
      </div>
    </section>
  );
};

export default SystemArchitectureDiagram;
