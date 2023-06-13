import React, { Component}from 'react';
import './App.css';
import Navigation from './component/navigation/navigation';
import 'tachyons';
import Logo from './component/Logo/logo'
import ImageLinkForm from './component/ImageLinkForm/imagelinkform';
import Rank from './component/Rank/rank'
import ParticlesBg from 'particles-bg';
class App extends Component {
  render(){
    return (
      <div className="App">
          
        <ParticlesBg type="lines" bg={true} />
        
        <Navigation/>
        <Logo/>
        <Rank/>
       <ImageLinkForm/>
      
      </div>
    );
  }
  
}

export default App;
