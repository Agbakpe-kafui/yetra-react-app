import React from 'react';
import logo from './assets/skull.svg';
import logo2 from './assets/matches.svg';
import cardImage1 from './assets/gta.jpg';
import cardImage2 from './assets/spider.jpg';
import twitch from './assets/twitch.png';
import logo3 from './assets/logo2.svg';

const CardsSectionVertical = () => {
  return (
    <section className="p-8 text-white">
      <h2 className="text-4xl mb-8 font-bold text-left">Update to Date News / Matches:</h2>

      <div className="flex flex-col md:flex-row items-center md:items-start bg-customGray rounded-lg shadow-lg p-4 mb-8 md:h-[10em] w-full md:w-auto h-[32em]">
        <div className="flex flex-col items-center space-x-4 mb-4 md:mb-0">
          <img src={logo} alt="Logo" className="w-15 h-15" />
          <p className='text-center'>Skull Crasher</p>
        </div>
        <h1 className="text-2xl mx-4">vs</h1>
        <div className="flex flex-col items-center space-x-4 mb-4 md:mb-0">
          <img src={logo2} alt="Logo" className="w-15 h-15" />
          <p>Rage Rush</p>
        </div>
        <div className="flex-1 text-center md:text-left pl-[10em] pt-6 px-4">
          <h3 className="text-xl ">COD BATTLE ROYALE</h3>
          <p className="text-gray-400">JULY, 20TH 2024</p>
        </div>
        <div className="flex flex-col items-center space-x-2">
          <img src={twitch} alt="Twitch Streaming" className="w-15 h-15" />
          <p>Twitch Streaming</p>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row items-center md:items-start bg-customGray rounded-lg shadow-lg p-4 mb-8 md:h-[10em] w-full md:w-auto h-[25em]">
        <img src={cardImage1} alt="Service Two" className="w-full md:w-[20em] h-[8em] rounded-lg mb-4 md:mb-0 md:mr-8" />
        <div className="flex-1 text-center md:text-left pl-[5em] pt-6 px-4">
          <h3 className="text-xl">Service Two</h3>
          <p className="text-gray-400">Discover the benefits of this service and how it can support your goals effectively.</p>
        </div>
        <div className="flex flex-col items-center space-x-2 mt-4 md:mt-0">
          <img src={logo3} alt="Logo" className="w-15 h-15" />
          <p>Read More</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start bg-customGray rounded-lg shadow-lg p-4 mb-8 md:h-[10em] w-full md:w-auto h-[32em]">
        <div className="flex flex-col items-center space-x-4 mb-4 md:mb-0">
          <img src={logo2} alt="Logo" className="w-15 h-15" />
          <p>Skull Crasher</p>
        </div>
        <h1 className="text-2xl mx-4">vs</h1>
        <div className="flex flex-col items-center space-x-4 mb-4 md:mb-0">
          <img src={logo} alt="Logo" className="w-15 h-15" />
          <p>Rage Rush</p>
        </div>
        <div className="flex-1 text-center md:text-left pl-[10em] pt-6 px-4">
          <h3 className="text-xl">COD BATTLE ROYALE</h3>
          <p className="text-gray-400">JULY, 20TH 2024</p>
        </div>
        <div className="flex flex-col items-center space-x-2">
          <img src={twitch} alt="Twitch Streaming" className="w-15 h-15" />
          <p>Twitch Streaming</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start bg-customGray rounded-lg shadow-lg p-4 mb-8 md:h-[10em] w-full md:w-auto h-[25em]">
        <img src={cardImage2} alt="Service Two" className="w-full md:w-[20em] h-[8em] rounded-lg mb-4 md:mb-0 md:mr-8" />
        <div className="flex-1 text-center md:text-left pl-[5em] pt-6 px-4">
          <h3 className="text-xl">Service Two</h3>
          <p className="text-gray-400">Discover the benefits of this service and how it can support your goals effectively.</p>
        </div>
        <div className="flex flex-col items-center space-x-2 mt-4 md:mt-0">
          <img src={logo3} alt="Logo" className="w-15 h-15" />
          <p>Read More</p>
        </div>
      </div>
    </section>
  );
};

export default CardsSectionVertical;
