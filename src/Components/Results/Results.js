import React from 'react'
import './Results.css'
import Card from '../Card/Card'



const Results=(props)=>{

  return (
    
    <div>
      
        <div className="results-container">
            <div className="results row">
              {props.fontFamilies.map((font,id) => {
                return (
                  <Card 
                  nextStep={props.nextStep}
                  name={props.name} 
                  font={font}
                  color={props.colorsArray[id]} 
                  key={id}/>
                )
 
              })}
            </div>
          </div>
          
          
      
    </div>

      
    
  )
}

export default Results

// <Results
// name={this.state.inputName}
// fontsArray={fonts}
// show={this.state.showResults} 
// showResults={this.showResults}
// colorsArray={colors}
// fontFamilies={font_families}
// selectedFamily={this.state.fontFamily}
// setFamily={this.setFamily}
// />