import React from 'react'
import FontCard from './FontCard'
import './FontCards.css'
import Back from '../backButton/backButton'


const FontCards=(props)=>{

  return (
    <div className="container fontCards"> 
    <Back previousStep={props.previousStep}/>
      
        {props.fontFamilies.map((font,id)=>{
          return(
            <FontCard  
            
            key={id}
            
            nextStep={props.nextStep}
            setFamily={props.setFamily}
           
            font={font}
            name={props.name}
            
            />
          )


        })}
      
    </div>
  )
}

export default FontCards

// setname={this.setName} 
// showResults={this.showResults}
// setFamily={this.setFamily}
// nextStep={this.nextStep}