import './WorkCardStyles.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

const WorkCard = (props) => {
  console.log("props.url:", props.url); // Adding this line to log props.url
  return (
    <div className='project-card'>
      <img src={props.imgsrc} alt='this is project cover photo'/>
      <h2 className='project-title'>{props.title}</h2>
        <div className='pro-details'>
          <p>{props.description}</p>
          <div className='pro-btns'>
              <NavLink to={props.url} className="btn">View</NavLink>
              <NavLink to={props.source} className="btn">source</NavLink>
          </div>
        </div>
    </div>
  )
}

export default WorkCard
