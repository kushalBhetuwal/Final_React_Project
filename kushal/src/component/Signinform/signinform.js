import React, { Component } from "react";
import "./signinform.css";
import Duplicate from "../DuplicateCode/duplicate";



class SigninForm extends Component {
  constructor(props) {
    super(props);
    this.state ={
      Email:"",
      Password: ""
    }
   }
       onchangeEmail = (event)=>{
        this.setState({Email: event.target.value})

      }
  
    onchangePassword = (event)=>{
      this.setState({Password: event.target.value})
    }

    onsubmitButton =()=>{
      fetch('http://localhost:3002/signin', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
          email:this.state.Email,
          password:this.state.Password
        })
      })
      .then(response=>response.json())
      .then(data=>{
        if(data.id){
          this.props.loaduser(data);
          this.props.onroutechange("home")
        }
        else{  
          alert(data)
          
        }
      })
      .catch(err=>console.log(err))
    }
  render() {
    return (
      <Duplicate onchangeEmail={this.onchangeEmail} onchangePassword={this.onchangePassword} heading ="Signin" 
      onroutechange={this.props.onroutechange} onsubmitButton1={this.onsubmitButton} showsigninbutton={true} showregisterbutton={true} />
      
    );
  }
}

export default SigninForm;
