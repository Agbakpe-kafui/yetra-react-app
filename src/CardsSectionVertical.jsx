import React from 'react';
import './CardsSectionVertical.css';
import logo from './assets/skull.svg';
import logo2 from './assets/matches.svg' // Adjust the path to your logo
import cardImage1 from './assets/gta.jpg'; // Adjust the path to your card images
import cardImage2 from './assets/spider.jpg';
import twitch from './assets/twitch.png';
import logo3 from './assets/logo2.svg';

const CardsSectionVertical = () => {
  return (
    <section className="cards-section-vertical">
      <h2>Update to Date News / Matches:</h2>

      <div className="vertical-card">
        <div className='logos'>
            <img src={logo} alt="Logo" className="card-logo" />
            <p>Skull Crasher</p>
        </div>
        <h1>vs</h1>
        <div className='logos'>
            <img src={logo2} alt="Logo" className="card-logo" />
            <p>Rage Rush</p>
        </div>
        <div className="card-content">
          <h3>COD BATTLE ROYALE </h3>
          <p>JULY,20TH 2024</p>
        </div>
        <div className="logos">
            <img src={twitch} alt="Service One" className="" />
            <p>Twitch Streaming</p>
        </div>
      </div>
      
      <div className="vertical-card">
        <img src={cardImage1} alt="Service Two" className="card-image" />
        <div className="card-content">
          <h3>Service Two</h3>
          <p>Discover the benefits of this service and how it can support your goals effectively.</p>
        </div>
        <div className='logos'>
            <img src={logo3} alt="Logo" className="card-logo" />
            <p>Read More</p>
        </div>
      </div>

      <div className="vertical-card">
        <div className='logos'>
            <img src={logo2} alt="Logo" className="card-logo" />
            <p>Skull Crasher</p>
        </div>
        <h1>vs</h1>
        <div className='logos'>
            <img src={logo} alt="Logo" className="card-logo" />
            <p>Rage Rush</p>
        </div>
        <div className="card-content">
          <h3>COD BATTLE ROYALE </h3>
          <p>JULY,20TH 2024</p>
        </div>
        <div className="card-image">
            <img src={twitch} alt="Service One" className="" />
            <p>Twitch Streaming</p>
        </div>
      </div>

      <div className="vertical-card">
        <img src={cardImage2} alt="Service Two" className="card-image" />
        <div className="card-content">
          <h3>Service Two</h3>
          <p>Discover the benefits of this service and how it can support your goals effectively.</p>
        </div>
        <div className='logos'>
            <img src={logo3} alt="Logo" className="card-logo" />
            <p>Read More</p>
        </div>
      </div>


    </section>
  );
};

export default CardsSectionVertical;
