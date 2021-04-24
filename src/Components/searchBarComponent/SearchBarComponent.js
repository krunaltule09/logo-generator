import React from 'react'
import './searchStyle.css'

const SearchBarComponent=(props)=>{
  return (
    <div className="header-container">
      <div className="wrapper">
        <input type="text" onChange={(e)=>{
          props.setname(e.target.value);
        }}/>
        <button className="btn submit-btn" onClick={()=>{
          props.showResults();

        }}>Search</button>
        

      </div>
    
    </div>
  )
}

export default SearchBarComponent