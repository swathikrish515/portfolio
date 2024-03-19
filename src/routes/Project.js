import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImage_1 from '../components/HeroImage_1';
import Work from '../components/Work';
import PriceCard from '../components/PriceCard';

const project = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroImage_1 heading="PROJECTS" text="MY MOST RECENT PROJECTSSSSSS"></HeroImage_1>
      <Work></Work>      
      <PriceCard/>
      <Footer></Footer>
    </div>
  )
}

export default project
