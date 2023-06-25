import React, { Component } from "react";
import "./App.css";
import Navigation from "./component/navigation/navigation";
import "tachyons";
import Logo from "./component/Logo/logo";
import ImageLinkForm from "./component/ImageLinkForm/imagelinkform";
import Rank from "./component/Rank/rank";
import ParticlesBg from "particles-bg";
import FaceRecognition from "./component/FaceRecognition/facerecognition";

const setuprequest = (imageurl) => {
  const PAT = "87512310777b47cd8d484d74af44251c";
  const USER_ID = "kushal123";
  const APP_ID = "test";
  const IMAGE_URL = imageurl;

  const raw = JSON.stringify({
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    inputs: [
      {
        data: {
          image: {
            url: IMAGE_URL,
          },
        },
      },
    ],
  });

  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Key " + PAT,
    },
    body: raw,
  };

  return requestOptions;
};
class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      image: '', 
      data: {}
     
    };
  }

  calculatefacelocation =(data)=>{
   
    const element = document.getElementById("elementimg");
    let height = Number(element.height);
    let width = Number(element.width);
    return {
      bottom:height -(data.bottom_row*height),
      top:data.top_row*height,
      left:data.left_col*width,
      right:width-(data.right_col*width)
     }

  }

  displayborderbox = (data)=>{
    console.log(data)
    this.setState({data:data})
  }

  onSubmit = () => {
    this.setState({image:this.state.input})
    
    fetch("https://api.clarifai.com/v2/models/face-sentiment-recognition/outputs", setuprequest(this.state.input))
      .then((response) => response.json())
      .then(response=>{
          console.log(response)
         return  this.displayborderbox(this.calculatefacelocation(response.outputs[0].data.regions[0].region_info.bounding_box))
        
      })
      
      .catch(error=>console.log(error));
      
    };
      
  

  onChange = (event) => {
    this.setState({ input: event.target.value });
  };

  render() {
    const{data,image} = this.state;
    return (
      <div className="App">
        <ParticlesBg type="cobweb" bg={true} />

        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onsubmit={this.onSubmit} onchange={this.onChange} />
        <FaceRecognition  data = {data} imageurl ={image}/>
        
      </div>
    );
  }
}

export default App;
