import React from 'react';
import Twitchlogo from './assets/twitch.png';
import gamelogo from './assets/gamepad.svg';
import alarmlogo from './assets/alarm.svg';

const CardsSection = () => {
  return (
    <section className="flex flex-col md:flex-row justify-around items-start p-8 lg:h-35 ">
      <div className="w-full md:w-1/3 rounded-lg shadow-lg p-6 text-center border-white bg-customGray mx-4 mb-4 md:mb-0 h-[15rem] ">
        <img src={Twitchlogo} alt="Twitch Logo" className="w-16 h-auto mb-4 mx-auto" />
        <h3 className="text-2xl mb-2 text-white">Twitch Streaming</h3>
        <p className="text-gray-300 text-base leading-relaxed">
          State of the art equipment, ping, fps, and uninterrupted internet access for all your pro gaming experience.
        </p>
      </div>
      <div className="w-full md:w-1/3 rounded-lg shadow-lg p-6 text-center  border-white bg-customGray mx-4 mb-4 md:mb-0 h-[15rem]">
        <img src={gamelogo} alt="Gamepad Logo" className="w-16 h-auto mb-4 mx-auto" />
        <h3 className="text-2xl mb-2 text-white">E-Sports Community</h3>
        <p className="text-gray-300 text-base leading-relaxed">
          Join our E-Sports Community and stay updated on all gaming trends, tournaments, and activities. Our community is never dead.
        </p>
      </div>
      <div className="w-full md:w-1/3 rounded-lg shadow-lg p-6 text-center  border-white bg-customGray mx-4 h-[15rem]">
        <img src={alarmlogo} alt="Alarm Logo" className="w-16 h-auto mb-4 mx-auto" />
        <h3 className="text-2xl mb-2 text-white">Unlimited Gaming</h3>
        <p className="text-gray-300 text-base leading-relaxed">
          There is no limit on the gaming experience; walk in, select a game, and get ready for the ultimate gaming experience.
        </p>
      </div>
    </section>
  );
};

export default CardsSection;
