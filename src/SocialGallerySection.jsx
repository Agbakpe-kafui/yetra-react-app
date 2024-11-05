import React from 'react';
import './SocialGallerySection.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Icons from react-icons library
import galleryImage1 from './assets/spider.jpg';
import galleryImage2 from './assets/mk.jpg';
import galleryImage3 from './assets/gta.jpg';
import galleryImage4 from './assets/ea.png';

const SocialGallerySection = () => {
  return (
    <section className="social-gallery-section">
      <h2>Share with #yetraGH</h2>
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />Facebook
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />twitter
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />instagram
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />linkedin
        </a>
      </div>
      <div className="gallery">
        <img src={galleryImage1} alt="Gallery 1" />
        <img src={galleryImage2} alt="Gallery 2" />
        <img src={galleryImage3} alt="Gallery 3" />
        <img src={galleryImage4} alt="Gallery 4" />
      </div>
      <div className="gallery">
        <img src={galleryImage1} alt="Gallery 1" />
        <img src={galleryImage2} alt="Gallery 2" />
        <img src={galleryImage3} alt="Gallery 3" />
        <img src={galleryImage4} alt="Gallery 4" />
      </div>
    </section>
  );
};

export default SocialGallerySection;
