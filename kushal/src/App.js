import React, { Component}from 'react';
import './App.css';
import Navigation from './component/navigation/navigation';
import 'tachyons';
import Logo from './component/Logo/logo'
class App extends Component {
  render(){
    return (
      <div className="App">
        <Navigation/>
        <Logo/>
       
      </div>
    );
  }
  
}

export default App;
