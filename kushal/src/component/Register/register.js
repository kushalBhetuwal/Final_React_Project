import React, {Component} from 'react';
import './register.css'


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
         <div className="courier w-90 white mw6 center relative cover bg-top mt2" >
          <article className="br3 bw1 ba b--inherit  mv4 w-100 w-100-m w-100-l mw-100 center shadow-4-ns ">
          <div className="relative pa4 pa5-m">
      <h1 className="serif tracked ma0 mb4 pv3">Register</h1>
      <div>
        <div className="mb3">
          <label htmlFor="username" className="db f6 white-80 ttu ph2 mb2">Name</label>
          <input onChange ={this.onchangeName} type="text" name="username" className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-30 hover-bg-white-70 hover-gray outline-0 bn br-pill" required/>
        </div>
        <div className="mb3">
          <label htmlFor="username" className="db f6 white-80 ttu ph2 mb2">Email</label>
          <input onChange ={this.onchangeEmail} type="text" name="username" className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-30 hover-bg-white-70 hover-gray outline-0 bn br-pill" required/>
        </div>
        <div className="mb4">
          <label htmlFor="password" className="db f6 white-80 ttu ph2 mb2">Password</label>
          <input onChange={this.onchangePassword} type="password" name="password" className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-30 hover-bg-white-70 hover-gray outline-0 bn br-pill" required/>
        </div>
        <div>
          <button onClick={this.onsubmitRegister} className="input-reset db w-100 light-gray f6 b ttu tracked pv3 ph3 pointer bg-dark-green hover-bg-blue bn br-pill">Register</button>
        </div>
        <div className = "mt5 f4 ">Have an account? <button onClick= {this.onbutton} className="input-reset db w-100 light-gray f6 b ttu tracked pv3 ph3 pointer bg-dark-pink hover-bg-yellow bn br-pill">Signin</button></div>
        </div>
    </div>
              
          </article>
  </div>
      </>
  )

  }  
}

export default Register;