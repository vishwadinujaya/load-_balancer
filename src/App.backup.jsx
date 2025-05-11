import React, { useState, useEffect } from "react";
import { createPortal } from 'react-dom';
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

function App() {
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
    document.head.appendChild(meta);
    
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  const [playState, setPlayState] = useState(false);
  
  return (
    <>
      <EnhancedNavbar />
      <div style={{paddingTop: '80px'}}>
        <Hero id="home" />
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
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </>
  );
}

export default App;
