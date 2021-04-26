import React from 'react'
import './backButton.css'


function backButton(props) {
  return (
    <button onClick={()=>{
      props.previousStep();
    }} className="btn  btn-primary back"><i className="fa fa-chevron-left"></i> Back</button>
  )
}

export default backButton
