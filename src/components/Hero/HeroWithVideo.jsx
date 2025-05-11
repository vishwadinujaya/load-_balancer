import React from 'react';
import './HeroWithVideo.css';
import { Particles } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const HeroWithVideo = () => {
    return (
        <section className="hero-container" aria-label="Main hero section">
            {/* Video Background */}
            <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="hero-video"
                onError={(e) => {
                    console.error("Video loading failed:", e);
                    console.log("Video error details:", e.target.error);
                    // Fallback to showing the image if video fails
                    document.querySelector('.hero-image').style.display = 'block';
                }}
                onCanPlay={() => console.log("Video can play")}
                onStalled={() => console.warn("Video stalled")}
            >
                <source src="../../assets/system-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Static Image Fallback */}
            <div 
                className="hero-image" 
                style={{ backgroundImage: `url(../../assets/Banner-1.jpg)` }}
            />
            
            <Particles
                className="particles"
                init={async (engine) => await loadSlim(engine)}
                options={{
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                        },
                        modes: {
                            repulse: {
                                distance: 100,
                                duration: 0.4,
                            },
                            push: {
                                quantity: 4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.4,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "out",
                            },
                            random: true,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                            random: true,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: 3,
                            random: true,
                        },
                    },
                }}
            />

            <div className="hero-overlay"></div>
            {/* Test element - should appear bright red if component renders */}
            <div style={{
              position: 'absolute',
              top: '10px',
              left: '10px',
              color: 'red',
              zIndex: 9999,
              fontSize: '24px',
              fontWeight: 'bold'
            }}>
              VIDEO COMPONENT LOADED
            </div>
            <div className='hero-text'>
                <h1>LOAD BALANCE SYSTEM</h1>
                <p>
                Seas may be unpredictable — but your cargo doesn't have to be.
                Our intelligent Ship Load Balancing System transforms the way vessels manage weight distribution.
                Powered by real-time data, 3D visualization, and automated container placement, it ensures every journey begins with precision and stability.
                </p>
            </div>
        </section>
    );
}

export default HeroWithVideo;
