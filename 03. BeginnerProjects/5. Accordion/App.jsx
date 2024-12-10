import React from 'react'
import {accordionData} from "../../03. BeginnerProjects/5. Accordion/content"
import Accordian from '../../03. BeginnerProjects/5. Accordion/Accordian'

const App = () => {
  return (
    <div className='accordion'>{
      accordionData.map( ({title , content}) => {
          return <Accordian title={title} content={content}></Accordian>
      })
    }</div>
    )
}

export default App