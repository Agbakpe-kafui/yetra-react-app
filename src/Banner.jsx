import React from 'react';
import './Banner.css'; // CSS file for styling
import img1 from './assets/1.png'; // Import the background image
import img2 from './assets/2.png';
import img3 from './assets/3.png';
import img4 from './assets/4.png';

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-content">
        <h1>The Ultimate Gaming Experince</h1>
      </div>
      <div className="banner-overlay-images">
      <div class="overlap-images">
      <img src={img2} alt="Logo" className="card-logo" />
      <img src={img1} alt="Logo" className="card-logo" />
      <img src={img3} alt="Logo" className="card-logo" />
      <img src={img4} alt="Logo" className="card-logo" />
        
      </div>

        {/* Additional images or content can go here */}
      </div>
    </section>
  );
};

export default Banner;
