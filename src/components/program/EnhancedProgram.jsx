import React from 'react';
import './program.css';
import program_icon_1 from '../../assets/program_icon_1.png';
import program_icon_2 from '../../assets/program_icon_2.png';
import program_icon_3 from '../../assets/program_icon_3.png';
import program_icon_4 from '../../assets/program_icon_4.jpg';
import program_icon_5 from '../../assets/program_icon_5.webp';
import program_icon_6 from '../../assets/program_icon_6.webp';

const EnhancedProgram = () => {
  return (
    <section id="program" className="program-section">
      <div className="container">
        <div className="programs-content">
          <div className='program'>
            <img src={program_icon_1} alt="Program Icon 1" />
            <div className="caption">
              <img src={program_icon_4} alt="" />
              <p>Monitor and plan stability operations</p>
            </div>
            <div className="details">
              <p>Details about monitoring and planning stability operations.</p>
            </div>
          </div>
          <div className='program'>
            <img src={program_icon_2} alt="Program Icon 2" />
            <div className="caption">
              <img src={program_icon_5} alt="" />
              <p>Manage all stability related planning processes</p>
            </div>
            <div className="details">
              <p>Details about managing stability related planning processes.</p>
            </div>
          </div>
          <div className='program'>
            <img src={program_icon_3} alt="Program Icon 3" />
            <div className="caption">
              <img src={program_icon_6} alt="" />
              <p>Monitor stability anytime, anywhere</p>
            </div>
            <div className="details">
              <p>Details about monitoring stability anytime, anywhere.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EnhancedProgram;
