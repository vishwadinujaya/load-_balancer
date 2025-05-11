import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';
import { Particles } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const Hero = () => {
    const navigate = useNavigate();
    return (
        <section id="home" className="hero-container">
            
            {/* Particles Effect */}
            <Particles
                className="particles"
                init={async (engine) => await loadSlim(engine)}
                options={{
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onHover: { enable: true, mode: "repulse" },
                            onClick: { enable: true, mode: "push" }
                        },
                        modes: {
                            repulse: { distance: 100, duration: 0.4 },
                            push: { quantity: 4 }
                        }
                    },
                    particles: {
                        color: { value: "#ffffff" },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.4,
                            width: 1
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: { default: "out" },
                            random: true,
                            speed: 2,
                            straight: false
                        },
                        number: {
                            density: { enable: true, area: 800 },
                            value: 80
                        },
                        opacity: { value: 0.5, random: true },
                        shape: { type: "circle" },
                        size: { value: 3, random: true }
                    }
                }}
            />

            {/* Overlay and Text Content */}
            <div className="hero-overlay"></div>
            <div className='hero-text'>
                <h1>LOAD BALANCE SYSTEM</h1>
                <p>
                    Seas may be unpredictable — but your cargo doesn't have to be.
                    Our intelligent Ship Load Balancing System transforms the way vessels manage weight distribution.
                    Powered by real-time data, 3D visualization, and automated container placement, it ensures every journey begins with precision and stability.
                </p>
                <button 
                    className="hero-button"
                    onClick={() => navigate('/auth')}
                >
                    Sign In
                </button>
            </div>
        </section>
    );
}

export default Hero;
