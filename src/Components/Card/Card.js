import React from 'react'
import './Card.css'



const Card=(props)=>{

  let style={
    fontFamily:props.font,
    color:props.color
  }


  return (
    <div className="col-sm-6 col-md-6 col-lg-6 card  " onClick={props.nextStep} style={style}>
      <h2>{props.name}</h2>
      <p>{props.font}</p>
    </div>
  )
}

export default Card