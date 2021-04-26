import React from 'react'

import TypoCard from './TypoCard'
import './Typography.css'
import Back from '../backButton/backButton'


const Typography=(props)=>{

  return (
    <div>
      <Back previousStep={props.previousStep}/>
      
    <div className="row typoCards"> 
      
        {props.fontFamilies.map((font,id)=>{
          return(
            <TypoCard 
            color={props.colorsArray[id%props.colorsArray.length]}
            key={id}
            font={font}
            name={props.name}
            
            />
          )


        })}
      
    </div>
    </div>
  )
}

export default Typography

// setname={this.setName} 
// showResults={this.showResults}
// setFamily={this.setFamily}
// nextStep={this.nextStep}