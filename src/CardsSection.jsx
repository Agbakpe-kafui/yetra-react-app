import React from 'react';
import './CardsSection.css';
import Twitchlogo from './assets/twitch.png'; // Adjust the path to your logo
import gamelogo from './assets/gamepad.svg'; // Adjust the path to your logo
import alarmlogo from './assets/alarm.svg'; // Adjust the path to your

const CardsSection = () => {
  return (
    <section className="cards-section">
      <div className="card">
        <img src={Twitchlogo} alt="Logo" className="card-logo" />
        <h3>Twitch Streaming</h3>
        <p>State of the art equipment,ping, fps and uninterrupted internet access for all your pro gaming experience</p>
      </div>
      <div className="card">
        <img src={gamelogo} alt="Logo" className="card-logo" />
        <h3>E-Sports Community</h3>
        <p>Join our E-Sports Community and stay update on all gaming trends, tournaments and activities.Our community is never dead</p>
      </div>
      <div className="card">
        <img src={alarmlogo} alt="Logo" className="card-logo" />
        <h3>Unlimited Gaming</h3>
        <p>There is no limit on the gaming experience, walk in select a game and get ready to have the ultimate gaming experience</p>
      </div>
    </section>
  );
};

export default CardsSection;
