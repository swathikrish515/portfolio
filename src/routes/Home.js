import React from 'react'
import Navbar from '../components/Navbar';
import HeroImage from '../components/HeroImage_0';
import Footer from '../components/Footer';
import Work from '../components/Work';
import KCommunicate from '../components/KCommunicate';
const home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage/>
      <Work></Work>
      <Footer/>
      <KCommunicate/>
    </div>
  );
}

export default home
