import React from 'react';
import img1 from './assets/1.png';
import img2 from './assets/2.png';
import img3 from './assets/3.png';
import img4 from './assets/4.png';
import './Banner.css';

const Banner = () => {
  return (
    <section className="relative w-full h-[60vh] bg-cover bg-center bg-no-repeat flex items-center text-white banner"  >
      <div className="pl-2 max-w-[60%] w-[60em]">
        <h1 className="text-5xl m-20 font-bold">The Ultimate <br/> Gaming Experience</h1>
      </div>
      <div className="relative flex items-center justify-end max-w-[45%] h-full ml-auto mr-8">
        <div className="relative w-[450px] h-[400px]">
          <img src={img2} alt="Image 2" className="absolute w-[60%] h-auto rounded-lg transform -translate-x-1/5 -translate-y-1/5 top-0 left-0 transition-transform duration-300 hover:scale-105" />
          <img src={img1} alt="Image 1" className="absolute w-[60%] h-auto rounded-lg transform translate-x-1/5 -translate-y-1/5 top-0 right-0 transition-transform duration-300 hover:scale-105" />
          <img src={img3} alt="Image 3" className="absolute w-[60%] h-auto rounded-lg transform -translate-x-1/5 translate-y-1/5 bottom-0 left-0 transition-transform duration-300 hover:scale-105" />
          <img src={img4} alt="Image 4" className="absolute w-[60%] h-auto rounded-lg transform translate-x-1/5 translate-y-1/5 bottom-0 right-0 transition-transform duration-300 hover:scale-105" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
