import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './EnhancedNavbar.css';
import menuIcon from '../../assets/menu-icon.png';
const EnhancedNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  const navItems = [
    { to: 'home', text: 'Home', offset: -80 },
    { to: 'program', text: 'Program', offset: -80 },
    { to: 'gallery', text: 'Gallery', offset: -80 },
    { to: 'entertainment', text: 'Entertainment', offset: -80 },
    { to: 'solutions', text: 'Solutions', offset: -80 },
    { to: 'system', text: 'System', offset: -80 },
    { to: 'contact', text: 'Contact Us', offset: -80 }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-title">
          <span>LoadBalancer</span>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              smooth={true}
              offset={item.offset}
              duration={500}
              className={`nav-item`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.text}
            </Link>
          ))}
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? (
            <span className="close-icon">×</span>
          ) : (
            <img src={menuIcon} alt="Open Menu" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default EnhancedNavbar;
