import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './EnhancedNavbar.css';
import logo from '../../assets/logo_new1.png';
import menuIcon from '../../assets/menu-icon.png';
// CSS-based close button instead of image

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
    { to: 'hero', text: 'Home', offset: 0 },
    { to: 'program', text: 'Program', offset: -50 },
    { to: 'about', text: 'About Us', offset: -50 },
    { to: 'system', text: 'System', offset: -50 },
    { to: 'contact', text: 'Contact Us', offset: -50, isButton: true }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <img src={logo} alt="Company Logo" className="navbar-logo" />
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              smooth={true}
              offset={item.offset}
              duration={500}
              className={`nav-item ${item.isButton ? 'nav-button' : ''}`}
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
