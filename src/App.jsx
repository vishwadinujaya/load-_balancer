import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import EnhancedNavbar from './components/Navbar/EnhancedNavbar';
import Entertainment from './components/Entertainment/Entertainment';
import Hero from "./components/Hero/Hero";
import Program from "./components/program/program.jsx";
import Title from "./components/Title/Title";
import About from "./components/About/AboutModern";
import Us from "./components/Us/Us";
import SystemNewEnhanced from "./components/System/SystemNewEnhanced";
import System from "./components/System/System";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer.jsx";
import Chatbot from "./components/Chatbot";
import AuthGateway from "./components/AuthSystem/AuthGateway";

import ProjectIntroduction from './components/PublicFeatures/ProjectIntroduction';
import SystemArchitectureDiagram from './components/PublicFeatures/SystemArchitectureDiagram';
import LiveStatsPreview from './components/PublicFeatures/LiveStatsPreview';
import Live3DShipView from './components/PublicFeatures/Live3DShipView';
import LoginLink from './components/PublicFeatures/LoginLink';

function App() {
  const [playState, setPlayState] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
    document.head.appendChild(meta);
    
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsMuted(false);
      } else {
        audioRef.current.pause();
        setIsMuted(true);
      }
    }
  };

  return (
    <Router>
      <NavbarWrapper />
      <audio
        ref={audioRef}
        autoPlay
        muted={isMuted}
        style={{ display: 'none' }}
        src="/src/assets/ttsMP3.com_VoiceText_2025-4-30_11-18-12.mp3"
      >
        Your browser does not support the audio element.
      </audio>
      <button
        onClick={toggleMute}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
          padding: '10px 15px',
          fontSize: '14px',
          borderRadius: '5px',
          border: 'none',
          backgroundColor: '#2c3e50',
          color: '#fff',
          cursor: 'pointer',
          opacity: 0.8,
        }}
        aria-label={isMuted ? 'Play audio' : 'Pause audio'}
      >
        {isMuted ? 'Play Voice' : 'Pause Voice'}
      </button>
      <div style={{paddingTop: location.pathname === '/auth' ? '0' : '80px'}}>
        <Routes>
          <Route path="/auth" element={<AuthGateway />} />
          <Route path="/" element={
            <>
              <Hero id="home" />
              <ProjectIntroduction />
              <SystemArchitectureDiagram />
        
              <Live3DShipView />
              {/* <LoginLink /> */}
              <Title subTitle='Our Program' title='What We Offer'/>
              <Program id="program" />
              <About setPlayState={setPlayState} id="gallery" />
              <Title subTitle='Gallery' title='Our photos'/>
              <Us id="solutions" />
              <Title subTitle='Entertainment' title='Our Entertainment'/>
              <Entertainment id="entertainment" />
              <Title subTitle='Our Solutions' title='Load Balancing Systems'/>
              <SystemNewEnhanced />
              <System id="system" />
              <Title subTitle='Contact Us' title='Get in Touch'/> 
              <Contact id="contact" />
              <Footer />
              <Chatbot />
            </>
          } />
        </Routes>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </Router>
  );
}

function NavbarWrapper() {
  const location = useLocation();
  return location.pathname !== '/auth' ? <EnhancedNavbar /> : null;
}

export default App;
