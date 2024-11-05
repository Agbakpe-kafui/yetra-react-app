import React from 'react';
import './Footer.css';
import logo from './assets/logo.png'; // Adjust the path to your logo

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={logo} alt="Logo" className="footer-logo" />
        <form className="email-form">
          <input type="email" placeholder="Enter your email" className="email-input" />
          <button type="submit" className="submit-button">Submit</button>
        </form>
        <p className="short-text">Stay connected with us</p>
      </div>
      <div className="footer-right">
        <h3>Address</h3>
        <ul className="contact-info">
          <li>P.O. Box 123, City, Country</li>
          <li>Phone: (123) 456-7890</li>
          <li>Email: contact@yourdomain.com</li>
        </ul>
      </div>
      
        <hr />
        <p class="copyright">� 2024 Your Company Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
