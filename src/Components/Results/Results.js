import React from 'react'
import './Results.css'
import Result from '../Result/Result'



const Results=(props)=>{

  return (
    
    <div>
      {props.show===true?
        <div className="results-container">
            <div className="results">
              {props.fontFamilies[props.selectedFamily].map((font,id) => {
                return (
                  <Result 
                  name={props.name} 
                  font={font}
                  color={props.colorsArray[id]} 
                  key={id}/>
                )
 
              })}
            </div>
          </div>:
          null
          
      }
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