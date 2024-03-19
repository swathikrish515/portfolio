
import  "./HeroImageStyles_1.css"
import React, { Component } from 'react'

class HeroImage_1 extends Component {
    render(){
  return (  
          
    <div className="hero-img"> 
        <div className="heading">
        <h1 className='project-heading'>{this.props.heading}</h1>
            <h2>{this.props.text}</h2>
        </div>
    </div>

    

    
  )
}
}
export default HeroImage_1
