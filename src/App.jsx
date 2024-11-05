import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import CardsSection from './CardsSection';
import InfoSection from './InfoSection';
import CardsSectionVertical from './CardsSectionVertical';
import SocialGallerySection from './SocialGallerySection';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <CardsSection />
      <InfoSection />
      <CardsSectionVertical />
      <SocialGallerySection />
      <Footer />
      {/* Other components here */}
    </div>
  );
}

export default App;
