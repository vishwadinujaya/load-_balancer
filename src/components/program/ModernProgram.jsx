import React, { useEffect } from 'react';
import './ModernProgram.css';
import program_icon_1 from '../../assets/program_icon_1.png';
import program_icon_2 from '../../assets/program_icon_2.png';
import program_icon_3 from '../../assets/program_icon_3.png';
import program_icon_4 from '../../assets/program_icon_4.jpg';
import program_icon_5 from '../../assets/program_icon_5.webp';
import program_icon_6 from '../../assets/program_icon_6.webp';

const ModernProgram = () => {
  useEffect(() => {
    // Particle background effect
    const canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '0';
    document.querySelector('.program-section').prepend(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.1
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fill();
        
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        if (particle.y > canvas.height) {
          particle.y = 0;
          particle.x = Math.random() * canvas.width;
        }
        if (particle.x > canvas.width || particle.x < 0) {
          particle.speedX = -particle.speedX;
        }
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      canvas.remove();
    };
  }, []);

  return (
    <section id="program" className="program-section">
      <div className="container">
        <div className="programs-content">
          <div className='program-card'>
            <img src={program_icon_1} alt="Program Icon 1" />
            <div className="caption">
              <img src={program_icon_4} alt="" />
              <p>Monitor and plan stability operations</p>
            </div>
          </div>
          <div className='program-card'>
            <img src={program_icon_2} alt="Program Icon 2" />
            <div className="caption">
              <img src={program_icon_5} alt="" />
              <p>Manage all stability related planning processes</p>
            </div>
          </div>
          <div className='program-card'>
            <img src={program_icon_3} alt="Program Icon 3" />
            <div className="caption">
              <img src={program_icon_6} alt="" />
              <p>Monitor stability anytime, anywhere</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ModernProgram;
