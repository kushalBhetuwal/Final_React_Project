import React, { Component } from "react";
import "./App.css";
import Navigation from "./component/navigation/navigation";
import "tachyons";
import Logo from "./component/Logo/logo";
import ImageLinkForm from "./component/ImageLinkForm/imagelinkform";
import Rank from "./component/Rank/rank";
import ParticlesBg from "particles-bg";
import FaceRecognition from "./component/FaceRecognition/facerecognition";
import SigninForm from "./component/Signinform/signinform";
import Register from "./component/Register/register";

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

const initialstate  = {
    input: "",
    image: '', 
    data: {}, 
    route:"signinform",
    user:{
       id:"",
       name:"",
       email:"",
       entries:'',
       joined:''
    }
}
class App extends Component {
  constructor() {
    super();
    this.state = initialstate
  
  }
  loadUser =(data)=>{
      this.setState({user:{
        name:data.name,
        email:data.email,
        entries:data.entries,
        id:data.id,
        joined:data.joined

      }})
  }
  onbuttondelete=()=>{
    fetch("http://localhost:3002/delete", {
      method:'delete',
      headers:{'Content-Type':'application/json'}, 
      body:JSON.stringify({
        email:this.state.user.email
      })
    })
    .then(response=>response.json())
    .then(data=>{
      if(data){
        alert(data)
        this.setState({route:'signinform'})
      }
    })
    .catch(err=>console.log(err));
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
    
    fetch("https://api.clarifai.com/v2/models/face-detection/outputs", setuprequest(this.state.input))
      .then((response) => response.json())
      .then(response=>{
           if(response){
            fetch('http://localhost:3002/image', {
              method:'put',
              headers: { 'Content-Type': 'application/json'},
              body:JSON.stringify({
                id:this.state.user.id
              })
            })
            .then(response=>response.json())
            .then(count=>{
              this.setState(Object.assign(this.state.user,{entries:count}))
            })
            .catch(err=>console.log(err))
           }
           return  this.displayborderbox(this.calculatefacelocation(response.outputs[0].data.regions[0].region_info.bounding_box))
        
        
      })
      
      .catch(error=>console.log(error));
      
    };

    onRoutechange =(route)=>{
      if(route==="signout"){
        this.setState(initialstate);
      }
      else{
        this.setState({route:route})
      }
    }
      
  

  onChange = (event) => {
    this.setState({ input: event.target.value });
  };

  render() {
    const{data,image,route} = this.state;
    return (
      <div className="App">
        {route === 'signinform'?
        <>
        <ParticlesBg type="cobweb" bg={true} />
        <SigninForm loaduser = {this.loadUser} onroutechange={this.onRoutechange} /> 
        
        </>:
       route ==="register"?<>
        <ParticlesBg type="color" bg={true} />
        <Register onroutechange ={this.onRoutechange} />
        </>:
        <>
        <ParticlesBg type="fountain" bg={true} />
        <Navigation onbuttondelete = {this.onbuttondelete} onroutechange={this.onRoutechange} />
         <Logo />
        <Rank name = {this.state.user.name} rank = {this.state.user.entries}/>
        <ImageLinkForm onsubmit={this.onSubmit} onchange={this.onChange} />
        <FaceRecognition  data = {data} imageurl ={image}/> 
        </>
        } 
      </div>
    );
  }
}

export default App;
