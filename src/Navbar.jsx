import React, { useState } from 'react';
import './Navbar.css'; // Optional CSS file for styling
import logo from './assets/logo.png';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar bg-blue-600 p-4 flex justify-between items-center">
      <div className="navbar-logo">
      <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <ul className={isOpen ? "navbar-links open" : "navbar-links"}>
        <li><a href="#services">Services</a></li>
      </ul>
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? '\u2716' : '\u2630'}
      </div>
    </nav>
  );
};

export default Navbar;
