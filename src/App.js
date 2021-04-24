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



class App extends Component{

  state={
    inputName:"",
    showResults:false

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
    })
    
  }

  


  render(){
    return (
      <div>
      <SearchBarComponent setname={this.setName} showResults={this.showResults}/>
      

        <Results
         name={this.state.inputName}
        fontsArray={fonts}
        show={this.state.showResults} 
        showResults={this.showResults}
        colorsArray={colors}
        />
   
      </div>


    )
  }
}

export default App;