import "./FooterStyles.css"
import React from 'react'
import {FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa"

const Footer = () => {
    

  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}} />
                    <div>
                        <p>Al Qasmiya, Sharjah.</p>
                        <p> United Arab Emirates.</p>
                    </div>
                </div>
                <div className="phone">
                    <h4> <FaPhone size={20} style={{color : "#fff", marginRight: "2rem"}}/> +55 12345678</h4>            
                </div>
                <div className="email">
                    <h4> <FaMailBulk size={20} style={{color : "#fff", marginRight: "2rem"}}/> testmail@gmail.com</h4>            
                </div>
            </div>
            <div className="right">
                <h4>About the page:</h4>
                <p> Skilled Software Developer Bringing Expertise and Innovation </p>            
                <div className="social">
                    <a href="https://www.linkedin.com/in/swathikrish/">
                            <FaLinkedin size={30} style={{color : "#fff", marginRight: "1rem"}}/></a>
                    <a href="https://www.facebook.com/swathikrishn/" >
                        <FaFacebook size={30} style={{color : "#fff", marginRight: "1rem"}}/></a>          
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer 