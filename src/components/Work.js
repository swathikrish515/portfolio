import './WorkCardStyles.css';
import WorkCard from './WorkCard';
import WorkCardData from "./WorkCardData";

import React from 'react'

const Work = () => {
  return (
    <div  className='work-container'>
      {/* <h1 className='project-heading'></h1> */}
      <div className='project-container'>
       { WorkCardData.map((Val,ind)=>{
        return(
            <WorkCard
            key ={ind}
            imgsrc ={Val.imgsrc}
            title={Val.title}
            description = {Val.description}
            url={Val.url}
            source ={Val.source}
            />
        )
       })}
      </div>
    </div>
  )
}

export default Work
