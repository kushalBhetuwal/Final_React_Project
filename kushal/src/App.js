import React, { Component } from "react";
import "./App.css";
import Navigation from "./component/navigation/navigation";
import "tachyons";
import Logo from "./component/Logo/logo";
import ImageLinkForm from "./component/ImageLinkForm/imagelinkform";
import Rank from "./component/Rank/rank";
import ParticlesBg from "particles-bg";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  onSubmit =()=>{
    console.log("click");
  }

  onChange =(event)=>{
    console.log(event);
    this.setState({input: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <ParticlesBg type="lines" bg={true} />

        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onsubmit ={this.onSubmit} onchange ={this.onChange} />
      </div>
    );
  }
}

export default App;
