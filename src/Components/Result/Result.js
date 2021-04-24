import React from 'react'
import './Result.css'



const Result=(props)=>{

  let style={
    fontFamily:props.font,
    color:props.color
  }


  return (
    <div className="card" style={style}>
      {props.name}
    </div>
  )
}

export default Result