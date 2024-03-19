import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImage_1 from '../components/HeroImage_1';
import AboutContent from '../components/AboutContent';

const about = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage_1 heading="About Me" text="I'm a friendly fullstack developer"></HeroImage_1>
      <AboutContent></AboutContent>
      <Footer/>
    </div>
  )
}

export default about
