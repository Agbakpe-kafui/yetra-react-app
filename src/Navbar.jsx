import React, { useState } from 'react';
import logo from './assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative z-50 flex items-center justify-between px-6 py-4 text-white w-full">
      <div className="flex-shrink-0 ml-11">
        <img src={logo} alt="Logo" className="h-16 w-32" />
      </div>
      <ul
        className={`flex space-x-6 text-lg ${isOpen ? 'flex-col bg-gray-800 absolute top-16 right-0 w-full p-4 z-50' : 'hidden md:flex'}`}
      >
        <li>
          <a href="#services" className="hover:text-gray-400 text-3xl mr-11 font-bold">
            Services
          </a>
        </li>
      </ul>
      <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
        {isOpen ? '\u2716' : '\u2630'}
      </div>
    </nav>
  );
};

export default Navbar;
