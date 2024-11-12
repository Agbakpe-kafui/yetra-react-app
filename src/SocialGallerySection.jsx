import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import galleryImage1 from './assets/spider.jpg';
import galleryImage2 from './assets/mk.jpg';
import galleryImage3 from './assets/gta.jpg';
import galleryImage4 from './assets/ea.png';

const SocialGallerySection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show all images on large screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "0px", // Removes side padding on large screens
    responsive: [
      {
        breakpoint: 1024, // Large screens
        settings: {
          slidesToShow: 4, // Show all images
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0px", // No padding between images
        },
      },
      {
        breakpoint: 768, // Tablets and below
        settings: {
          slidesToShow: 1, // Show one image
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="p-12 text-center bg-black text-white">
      <h2 className="text-2xl mb-4 font-bold">Share with #yetraGH</h2>
      
      {/* Colored Social Media Icons */}
      <div className="flex justify-center gap-3 md:gap-9 mb-8 text-2xl ">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:opacity-80">
          <FaFacebook />
        </a>
        <p className='md:mr-[5em]'>Facebook</p>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:opacity-80">
          <FaTwitter />
        </a>
        <p className='md:mr-[5em]'>Twiter</p>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:opacity-80">
          <FaInstagram />
        </a>
        <p className='md:mr-[5em]'>Instagram</p>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:opacity-80">
          <FaLinkedin />
        </a>
        <p className='md:mr-[5em]'>Linkedin</p>
      </div>

      {/* Image Slider */}
      <Slider {...settings} className="mx-auto w-full md:w-[100%]">
        <div>
          <img src={galleryImage1} alt="Gallery 1" className="w-full h-60 rounded-lg" />
        </div>
        <div>
          <img src={galleryImage2} alt="Gallery 2" className="w-full h-60 rounded-lg" />
        </div>
        <div>
          <img src={galleryImage3} alt="Gallery 3" className="w-full h-60 rounded-lg" />
        </div>
        <div>
          <img src={galleryImage4} alt="Gallery 4" className="w-full h-60 rounded-lg" />
        </div>
      </Slider>

      {/* Image Slider */}
      <Slider {...settings} className="mx-auto w-full md:w-[100%]">
        <div>
          <img src={galleryImage1} alt="Gallery 1" className="w-full h-60 rounded-lg" />
        </div>
        <div>
          <img src={galleryImage2} alt="Gallery 2" className="w-full h-60 rounded-lg" />
        </div>
        <div>
          <img src={galleryImage3} alt="Gallery 3" className="w-full h-60 rounded-lg" />
        </div>
        <div>
          <img src={galleryImage4} alt="Gallery 4" className="w-full h-60 rounded-lg" />
        </div>
      </Slider>
    </section>
  );
};

export default SocialGallerySection;
