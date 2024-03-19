
import "./AboutContentStyles.css"
import about1 from "../images/aboutImg_1.jpg"
import about2 from "../images/aboutImg_2.jpg"
import { Link } from "react-router-dom"
import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>
                Who Am I?
            </h1>
            <p>Passionate and driven software engineer with expertise in both front-end & back-end development.Dedicated to crafting elegant and responsive user interfaces that elevate user experiences.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div> 
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={about1} className="img" alt="true"></img>
                </div>
                <div className="img-stack bottom">
                    <img src={about2} className="img"  alt="img of back end devpmt"></img>
                </div>
            </div>
            </div>     
    </div>
  )
}

export default AboutContent
