import React from 'react';
import systemDiagram from '../../assets/22efd6d7-9e91-49e8-945f-17a79c610654.png';

const ProjectIntroduction = () => {
  const backgroundStyle = {
    padding: '2rem',
    color: 'white',
    fontFamily: 'Segoe UI, sans-serif',
    backgroundImage: 'linear-gradient(rgba(30, 41, 59, 0.7), rgba(71, 85, 105, 0.7)), url(https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  };

  return (
    <section id="project-introduction" style={backgroundStyle}>
      <h1 style={{fontSize: '3.5rem', color: '#38bdf8'}}>🚢 Ship Load Balancing System using IoT and Real-Time Dashboard</h1>
      <h3 style={{fontWeight: 'normal', color: '#facc15', fontSize: '2.5rem'}}>by Delkandura A Silva</h3>

      <p style={{marginTop: '1rem', lineHeight: 1.6, fontSize: '1.5rem'}}>
        This project was developed as a final-year university solution to tackle one of the biggest challenges in maritime logistics: 
        maintaining <strong style={{color: '#22d3ee'}}>balanced and safe container distribution</strong> across a ship’s deck. Using a combination of 
        <strong style={{color: '#a3e635'}}>IoT Integration</strong>, <strong style={{color: '#f472b6'}}>Smart Placement</strong> logic, and a 
        <strong style={{color: '#facc15'}}>Real-Time Monitoring Dashboard</strong>, the system empowers ship operators and public observers 
        to visualize, track, and manage container weights efficiently.
      </p>

      <div style={{display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: '2rem'}}>
        <div style={{flex: 1, minWidth: '280px'}}>
          <h2 style={{color: '#f87171', fontSize: '2rem'}}>📊 LB Dashboard (Admin & Public Views)</h2>
          <p style={{fontSize: '1.25rem'}}>A dual-interface web dashboard built with HTML, JavaScript, and Firebase integration. Admins can add containers, view alerts, and manage the ship's load. Public users can explore a live 3D view of the ship without editing access.</p>
        </div>

        <div style={{flex: 1, minWidth: '280px'}}>
          <h2 style={{color: '#60a5fa', fontSize: '2rem'}}>🧱 3D Ship Model (Babylon.js)</h2>
          <p style={{fontSize: '1.25rem'}}>Babylon.js powers the interactive 3D ship model, reflecting container positions and weight changes in real time.</p>
        </div>

        <div style={{flex: 1, minWidth: '280px'}}>
          <h2 style={{color: '#34d399', fontSize: '2rem'}}>⚖️ Smart Placement Algorithm</h2>
          <p style={{fontSize: '1.25rem'}}>An intelligent logic engine assigns each container to an optimal location based on current balance and ship layout.</p>
        </div>

        <div style={{flex: 1, minWidth: '280px'}}>
          <h2 style={{color: '#fbbf24', fontSize: '2rem'}}>📡 Firebase Integration</h2>
          <p style={{fontSize: '1.25rem'}}>Live synchronization between IoT devices and the dashboard via Firebase’s real-time database. It powers alerts, updates, and storage.</p>
        </div>

        <div style={{flex: 1, minWidth: '280px'}}>
          <h2 style={{color: '#a78bfa', fontSize: '2rem'}}>🔧 IoT Embedded System</h2>
          <p style={{fontSize: '1.25rem'}}>Each container’s weight is collected using physical sensors and microcontrollers, then transmitted to the cloud via Wi-Fi modules.</p>
        </div>
      </div>
      <div style={{marginTop: '2rem'}}>
        <button
          onClick={() => window.location.href = '/payment'}
          style={{
            padding: '0.75rem 1.5rem',
            fontSize: '1.25rem',
            backgroundColor: '#38bdf8',
            color: 'white',
            border: 'none',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#0ea5e9'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#38bdf8'}
        >
          Proceed to Payment
        </button>
      </div>
    </section>
  );
};

export default ProjectIntroduction;
