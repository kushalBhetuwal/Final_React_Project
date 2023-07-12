import React, {Component} from 'react';
import './register.css'
import Duplicate from '../DuplicateCode/duplicate';


class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:'',
      email: '',
      password:"",

    }
  }
  onbutton =()=>{
    this.props.onroutechange('signinform')
  }

  onchangeName =(event)=>{
    this.setState({name:event.target.value})
  }

  onchangeEmail =(event)=>{
    this.setState({email:event.target.value})
  }
  onchangePassword =(event)=>{
    this.setState({password:event.target.value})
  }

 onsubmitRegister =()=>{
  fetch('http://localhost:3002/register',{
     method: 'POST',
     headers: {'Content-Type': 'application/json'},
     body: JSON.stringify({
      name:this.state.name,
      email:this.state.email,
      password:this.state.password
     })
  })
  .then(response=>response.json())
  .then(data=>{
    if(data){
      if(data==="success"){
        this.props.onroutechange('signinform')
      }
      else{
        alert('the credentials already exists')
      }
      
    }
  })
  .catch(error=>{console.log(error)});
 }

  render(){
    return(
      <>
      <Duplicate onsubmitRegister ={this.onsubmitRegister} onchangePassword={this.onchangePassword} onchangeName ={this.onchangeName} 
      onchangeEmail={this.onchangeEmail} onbutton={this.onbutton} heading="Register" 
        showregbtn={true} showsignbtn ={true} showname ={true}/>
      </>
    )
   
  }  
}

export default Register;