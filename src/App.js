import './App.css'
import React ,{ Component } from "react";
import SearchBarComponent from './Components/searchBarComponent/SearchBarComponent'

import Results from './Components/Results/Results'
import Typography from './Components/Typography/Typography'
import FontCards from './Components/FontCards/FontCards'


  const colors=[
    "#DE4839",
    "#B9345A",
    "#383CC1",
    "#1B98F5",
    "#3944F7",
    "#207398",
    "#120E43",
    "#03203C",
    "#1FAA59",
    "#02B290",
    "#3DBE29",
    "#E8BD0D",
    "#DDD101",
    "#F7CD2E",
    "#C7C11A",
    "#F4CE6A",
    "#E07C24",
    "#242B2E"
  ]

  const fonts_with_families={
    "sans-serif":["Arial, sans-serif","Lato, sans-serif","Roboto, sans-serif","Helvetica, sans-serif","Gill Sans, sans-serif","Lucida, sans-serif",
    "Helvetica Narrow, sans-serif","sans-serif",  "New Tegomin, serif",
    "Noto Sans JP, sans-serif"],

    "serif":["Times, serif",
    "Times New Roman, serif",
    "Palatino, serif",
    "Bookman, serif",
    "New Century Schoolbook, serif",
    "Eczar, serif",
    "Pridi, serif",
    "Eczar, serif",
    "PT Serif Caption, serif",
    "Spectral, serif",
    "Suez One, serif",
    "Ultra, serif"],

    "monospace":["Andale Mono, monospace","Courier Prime, monospace","Courier, monospace",
    "DM Mono, monospace","Nova Mono, monospace","monospace","Roboto Mono, monospace","Syne Mono, monospace","VT323, monospace",],

    "cursive":["Comic Sans, Comic Sans MS, cursive","Caveat, cursive",
    "Charmonman, cursive","Florence, cursive","Cookie, cursive","cursive",  "Architects Daughter, cursive",
    "Bangers, cursive",
    "Dancing Script, cursive",
    "Indie Flower, cursive",  "Orelega One, cursive",
    "Original Surfer, cursive",
    "Pacifico, cursive","Dancing Script, cursive","Great Vibes, cursive","Homemade Apple, cursive","Indie Flower, cursive","Sacramento, cursive","Satisfy, cursive"],

    "fantasy":["Impact, fantasy","Arnoldboecklin, fantasy","Oldtown, fantasy",
    "Blippo, fantasy","Brushstroke, fantasy","fantasy"]
  }

  const font_families=['sans-serif','serif','monospace','cursive','fantasy']



class App extends Component{

  state={
    inputName:"",
    showResults:false,
    fontFamily:"",
    step:1,


  }

  nextStep=()=>{
    const {step,inputName}=this.state;
    if(step<3 && inputName!=="")
    this.setState({
      step:(step+1)
    },()=>{
      console.log(this.state.step)
    })
  }

  previousStep=()=>{
    const {step}=this.state;
    if(step>1)
    this.setState({
      step:step-1
    },()=>{
      console.log(this.state.step)
    })
  }

  shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    
  }



  setName=(name)=>{


    if(name==="")
    this.setState({
      showResults:false,
      inputName:name
    })
  else{
    
    this.setState({
    
      inputName:name
    })
  }

  }

  setFamily=(family)=>{
    this.setState({
      fontFamily:family
      
    },()=>{
      this.shuffle(font_families);
      console.log(family)
    })
    
 

  }

  render(){

    switch(this.state.step){
      case 1:
        return(
          <SearchBarComponent 
          setname={this.setName} 
          showResults={this.showResults}
          setFamily={this.setFamily}
          nextStep={this.nextStep}
          name={this.state.inputName}
          />
        )
        break;

      case 2:
        return (
          <FontCards
          name={this.state.inputName} 
          colors={colors}
          setname={this.setName} 
          showResults={this.showResults}
          setFamily={this.setFamily}
          nextStep={this.nextStep}
          previousStep={this.previousStep}
          fontFamilies={font_families}
          />
          
        )
        break;

        case 3:
          return(
            <Typography
            name={this.state.inputName}
            
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            colorsArray={colors}
            fontFamilies={fonts_with_families[this.state.fontFamily]}
            
            
            
            />
          )

    }

    // return (
    //   <div>
    //     <SearchBarComponent 
    //     setname={this.setName} 
    //     showResults={this.showResults}
    //     setFamily={this.setFamily}
    //     nextStep={this.nextStep}
    //     />
      

    //     <Results
    //      name={this.state.inputName}
    //     fontsArray={fonts}
    //     show={this.state.showResults} 
    //     showResults={this.showResults}
    //     colorsArray={colors}
    //     fontFamilies={font_families[this.state.fontFamily]}
    //     selectedFamily={this.state.fontFamily}
        
        
    //     />
   
    //   </div>


    // )
  }
}

export default App;