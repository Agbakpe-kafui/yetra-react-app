import React from 'react';
import './InfoSection.css';
import infoImage from './assets/info-image.jpg'; // Replace with your image path

const InfoSection = () => {
  return (
    <section className="info-section">
      <div className="info-text">
        <h2>Stay Ahead of the Games:</h2>
        <p>
        At our e-gaming stadium, we bring you the pulse of the gaming world. Whether you're a seasoned pro or a casual player, you'll always stay ahead of the curve with access to the latest and greatest games.
        Dive into an ever-evolving lineup and experience the thrill of being in trend with the hottest titles and cutting-edge gaming technology.
        </p>
      </div>
      <div className="info-image">
      <img src={infoImage} alt="About Us" />
      </div>
    </section>
  );
};

export default InfoSection;
