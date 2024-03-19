import "./HeroImageStyles_0.css"
import React from 'react'
import IntroImg from '../images/coverPhoto_1.jpg';
import { Link } from "react-router-dom";

const HeroImage = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="This is a cover photo" ></img>
        </div>
        <div className="content">
          <div>
            <p>Hi, I'm SWATHI KRISHNA</p>
            <h1>A Freelance Developer. </h1>
                <Link to="/project" className="btn"> Projects </Link>
                <Link to="/contact" className="btn btn-light"> Contact </Link>
            </div>

        </div>
      
    </div>
  )
}

export default HeroImage
