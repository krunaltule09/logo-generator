import './App.css'
import React ,{ Component } from "react";
import SearchBarComponent from './Components/searchBarComponent/SearchBarComponent'

import Results from './Components/Results/Results'

const fonts=[
  "Architects Daughter, cursive",
  "Bangers, cursive",
  "Dancing Script, cursive",
  "Indie Flower, cursive",
  "Lato, sans-serif",
  "New Tegomin, serif",
  "Noto Sans JP, sans-serif",
  "Orelega One, cursive",
  "Original Surfer, cursive",
  "Pacifico, cursive",
  "Roboto, sans-serif",
  "Shadows "
  ]

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

  const font_families={
    "Sans-Serif":["Arial, sans-serif","Lato, sans-serif","Roboto, sans-serif","Helvetica, sans-serif","Gill Sans, sans-serif","Lucida, sans-serif",
    "Helvetica Narrow, sans-serif","sans-serif",  "New Tegomin, serif",
    "Noto Sans JP, sans-serif"],

    "Serif":["Times, serif",
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

    "Monospace":["Andale Mono, monospace","Courier Prime, monospace","Courier, monospace",
    "DM Mono, monospace","Nova Mono, monospace","monospace","Roboto Mono, monospace","Syne Mono, monospace","VT323, monospace",],

    "Cursive":["Comic Sans, Comic Sans MS, cursive","Caveat, cursive",
    "Charmonman, cursive","Florence, cursive","Cookie, cursive","cursive",  "Architects Daughter, cursive",
    "Bangers, cursive",
    "Dancing Script, cursive",
    "Indie Flower, cursive",  "Orelega One, cursive",
    "Original Surfer, cursive",
    "Pacifico, cursive","Dancing Script, cursive","Great Vibes, cursive","Homemade Apple, cursive","Indie Flower, cursive","Sacramento, cursive","Satisfy, cursive"],

    "Fantasy":["Impact, fantasy","Arnoldboecklin, fantasy","Oldtown, fantasy",
    "Blippo, fantasy","Brushstroke, fantasy","fantasy"]
  }



class App extends Component{

  state={
    inputName:"",
    showResults:false,
    fontFamily:"Sans-Serif"

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
      this.shuffle(font_families[this.state.fontFamily]);
    })
    
    console.log(font_families[this.state.fontFamily])
    console.log(family)

  }

  showResults=()=>{
    console.log(this.state.inputName);
    this.shuffle(fonts);
    this.shuffle(colors);
    console.log(this.state.showResults)
    if(this.state.inputName==="")
      this.setState({
        showResults:false
      })
    else
    this.setState({
      showResults:true
    },()=>{
      this.shuffle(font_families[this.state.fontFamily]);
    })
    
  }

  


  render(){
    return (
      <div>
        <SearchBarComponent 
        setname={this.setName} 
        showResults={this.showResults}
        setFamily={this.setFamily}
        />
      

        <Results
         name={this.state.inputName}
        fontsArray={fonts}
        show={this.state.showResults} 
        showResults={this.showResults}
        colorsArray={colors}
        fontFamilies={font_families}
        selectedFamily={this.state.fontFamily}
        
        />
   
      </div>


    )
  }
}

export default App;