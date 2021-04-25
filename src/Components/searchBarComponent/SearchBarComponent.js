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
        <select onChange={(e)=>{
          props.setFamily(e.target.value);
        }}>
          <option value="Sans-Serif">Sans Serif</option>
          <option value="Serif">Serif</option>
          <option value="Monospace">Monospace</option>
          <option value="Cursive">Cursive</option>
          <option value="Fantasy">Fantacy</option>
        </select>
        <button className="btn submit-btn" onClick={()=>{
          props.showResults();

        }}>Search</button>
        

      </div>
    
    </div>
  )
}

export default SearchBarComponent