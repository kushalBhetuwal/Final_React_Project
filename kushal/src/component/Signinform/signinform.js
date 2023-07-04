import React, { Component } from "react";
import "./signinform.css";

class SigninForm extends Component {
  constructor(props) {
    super(props);
    this.state ={
       Email:"",
       Password: "" 

       }  }
       onchangeEmail = (event)=>{
        this.setState({Email: event.target.value})

      }
  
    onchangePassword = (event)=>{
      this.setState({Password: event.target.value})
    }
  
  render() {
    return (
      <div>
        <div className="courier w-90 white mw6 center relative cover bg-top mt2">
          <article className="br3 bw1 ba b--inherit  mv4 w-100 w-100-m w-100-l mw-100 center shadow-4-ns ">
            <div className="relative pa4 pa5-m">
              <h1 className="serif tracked ma0 mb4 pv3">Sign In</h1>
              <form action="" id="login" className="">
                <div className="mb3">
                  <label
                    htmlFor="username"
                    className="db f6 white-80 ttu ph2 mb2"
                  >
                    Email
                  </label>
                  <input
                  onChange = {this.onchangeEmail}
                    type="text"
                    name="username"
                    className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-30 hover-bg-white-70 hover-gray outline-0 bn br-pill"
                    autocomplete = "username"
                  />
                </div>
                <div className="mb4">
                  <label
                    htmlFor="password"
                    className="db f6 white-80 ttu ph2 mb2"
                  >
                    Password
                  </label>
                  <input
                  onChange ={this.onchangePassword}
                    type="password"
                    name="password"
                    className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-30 hover-bg-white-70 hover-gray outline-0 bn br-pill"
                    autoComplete="current-password"
                  />
                </div>
                <div>
                  <button
                    onClick={() => this.props.onroutechange("home")}
                    className="input-reset db w-100 light-gray f6 b ttu tracked pv3 ph3 pointer bg-dark-blue hover-bg-blue bn br-pill"
                  >
                    Sign In
                  </button>
                </div>
                <div class="lh-copy mt3">
                  <a
                    onClick={() => this.props.onroutechange("register")}
                    href="#0"
                    class="f5 b link dim black db"
                  >
                    Register
                  </a>
                  <a href="#0" class="f5  b link dim black db">
                    Forgot your password?
                  </a>
                </div>
              </form>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default SigninForm;
