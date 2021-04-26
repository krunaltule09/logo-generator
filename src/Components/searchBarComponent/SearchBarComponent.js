import React from 'react'
import './searchStyle.css'
import background from './background.svg'
let enteredText=""

const SearchBarComponent=(props)=>{
  return (
    <div className="header-container">
      <img alt={window.location.origin} src={background} width="300"/>
      <div className="wrapper">
        
        <input placeholder="enter text here" value={props.name} className="name" type="text" onChange={(e)=>{
          props.setname(e.target.value);
          enteredText=e.target.value;
        }}/>
        

        <button className="submit-btn" onClick={()=>{
          const temp = document.querySelector(".name");
          if(enteredText===""){
            temp.classList.add("error");

            temp.classList.add("animate__animated");
            temp.classList.add("animate__shakeX");
            setTimeout(()=>{
              temp.classList.remove("animate__animated");
            temp.classList.remove("animate__shakeX");
            },1000)

            
          }
          
          else
          temp.classList.remove("error");
         
          props.nextStep();

        }}>Search</button>
        

      </div>
      
    
    </div>
  )
}

export default SearchBarComponent