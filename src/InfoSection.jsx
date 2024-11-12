import React from 'react';
import infoImage from './assets/info-image.jpg';

const InfoSection = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center p-12 bg-black text-white h-auto md:h-[30rem] md:mt-[6em]">
      <div className="flex-1 pr-0 md:pr-8 mb-8 md:mb-0 md:mr-[9em]">
        <h2 className="text-4xl mb-4 w-full md:w-[10em] font-bold">Stay Ahead of <br/> the Games:</h2>
        <p className="text-lg leading-relaxed text-gray-400">
          At our e-gaming stadium, we bring you the pulse of the gaming world. Whether you're a seasoned pro or a casual player, you'll always stay ahead of the curve with access to the latest and greatest games.
          Dive into an ever-evolving lineup and experience the thrill of being in trend with the hottest titles and cutting-edge gaming technology.
        </p>
      </div>
      <div className="flex-1 flex justify-center">
        <img src={infoImage} alt="About Us" className="max-w-full h-auto rounded-lg w-full md:w-[40em] md:h-[26em]" />
      </div>
    </section>
  );
};

export default InfoSection;
