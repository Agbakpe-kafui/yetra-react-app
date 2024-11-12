import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Banner from './Banner';
import CardsSection from './CardsSection';
import InfoSection from './InfoSection';
import CardsSectionVertical from './CardsSectionVertical';
import SocialGallerySection from './SocialGallerySection';
import Footer from './Footer';
import End from './End';

function App() {
  return (
    <div className="App bg-customBlack ">
      <Navbar  />
      <Banner   />
      <CardsSection  />
      <InfoSection />
      <CardsSectionVertical />
      <SocialGallerySection />
      <End />
      <Footer  />
      {/* Other components here */}
    </div>
  );
}

export default App;
