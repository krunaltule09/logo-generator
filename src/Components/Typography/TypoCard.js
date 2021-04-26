import React from 'react'
import './Typography.css'

function TypoCard(props) {
  const style={
    fontFamily:props.font,
    color:props.color

  }
  return (
    <div style={style} className=" typo-card col-md-6 col-sm-12 col-lg-6 animate__animated animate__zoomIn animate__slower" >
      {props.name}
    </div>
  )
}

export default TypoCard
