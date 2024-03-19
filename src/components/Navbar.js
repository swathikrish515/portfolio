import "./NavbarStyles.css"
import { Link } from "react-router-dom"

import {FaBars, FaTimes} from "react-icons/fa"

import React, { useState } from 'react'

const Navbar = () => {
    const [click,setClick] = useState(false);
    const handleClick =()=> setClick(!click);

    const [colorHeader, setColor] = useState(false);
    const changeColor = () => {
      if(window.scrollY >= 1){
        setColor(true);
      }else{
        setColor(false);
      }
    }

    window.addEventListener("scroll",changeColor)
    

  return (
    <div className={colorHeader ? "header header-bg" : "header"}>
        <Link to="/">
            <h1>Portfolio</h1>
        </Link>
        <ul className={click? "nav-menu active" : "nav-menu"}>
            <li>  <Link to="/">Home</Link></li>
            <li>  <Link to="/Project">Projects</Link></li>
            <li>  <Link to="/About">About</Link></li>
            <li>  <Link to="/Contact">Contact</Link></li>
            {/* <li>  <Link to="/TestPage">Test Page</Link></li> */}
        </ul>
      
      <div className="hamburger" onClick={handleClick}>
        {click ?(
        <FaTimes size={20} style={{color: "#fff"}} />    ) :
        (
        <FaBars size={20} style={{color: "#fff"}} />  )}
      </div>
    </div>
  )
}

export default Navbar
