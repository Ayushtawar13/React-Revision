import React, { useState } from 'react'
import '../style.css'
const Accordian = ({title , content}) => {

    const [isActive , setIsActive] = useState(false);
  return (
    <div className='accordion-card' key={Math.random()}>
        <div className='header' onClick={()=> setIsActive(!isActive)}>
            <div>{title}</div>
            <p className='icon'>{isActive ? '-' : '+'}</p>
        </div>
        <div className='content'>
            {isActive && <p className='card-info'>{content}</p> }
            </div>
    </div>
  )
}

export default Accordian