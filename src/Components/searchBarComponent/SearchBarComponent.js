import React from 'react'
import './searchStyle.css'
import background from './background.svg'

const SearchBarComponent=(props)=>{
  return (
    <div className="header-container">
      <img alt={window.location.origin} src={background} width="300"/>
      <div className="wrapper">
        <input placeholder="enter text here" type="text" onChange={(e)=>{
          props.setname(e.target.value);
        }}/>
        {/* <select onChange={(e)=>{
          props.setFamily(e.target.value);
        }}>
          <option value="sans-serif">Sans Serif</option>
          <option value="serif">Serif</option>
          <option value="monospace">Monospace</option>
          <option value="cursive">Cursive</option>
          <option value="fantasy">Fantacy</option>
        </select> */}
        <button className="btn submit-btn" onClick={()=>{
         
          props.nextStep();

        }}>Search</button>
        

      </div>
    
    </div>
  )
}

export default SearchBarComponent