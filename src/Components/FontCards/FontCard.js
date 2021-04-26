import React from 'react'
import './FontCards.css'

function FontCard(props) {
  const style={
    fontFamily:props.font
  }
  return (

    <div 
      style={style} 
      onClick={()=>{
      props.nextStep();
      props.setFamily(props.font)
    }}  
      className=" font-card " >
      {props.name}
      <span className="font-name">{props.font}</span>
    </div>
  )
}

export default FontCard
