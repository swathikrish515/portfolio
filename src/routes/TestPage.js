import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; 
import HeroImage_1 from '../components/HeroImage_1';
import TestFormData from '../components/TestFormData';


const TestPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroImage_1 heading="PROJECTS" text=""></HeroImage_1>
      <TestFormData/>
      <Footer></Footer>
    </div>
  )
}

export default TestPage

