import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; 
import HeroImage_1 from '../components/HeroImage_1';
import ContactForm from '../components/ContactForm';


const contact = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroImage_1 heading="Contact Me" text="Let's have a chat!">
      </HeroImage_1>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default contact
