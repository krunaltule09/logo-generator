import React from 'react'
import './Typography.css'
import Card from '../Card/Card'



const Typography=(props)=>{

  return (
    
    <div>
      
        <div className="results-container">
            <div className="row">
              {props.fontFamilies.map((font,id) => {
                return (
                  <Card 
                  nextStep={props.nextStep}
                  name={props.name} 
                  font={font}
                  color={props.colorsArray[id]} 
                  key={id}/>
                )
 
              })}
            </div>
          </div>
          
          
      
    </div>

      
    
  )
}

export default Typography
