import React , {Component} from 'react';

class Duplicate extends  Component{
        // eslint-disable-next-line no-useless-constructor
        constructor(props){
            super(props);
            
        }
        render(){
          const{heading,onchangeEmail,onchangePassword,onchangeName,onsubmitRegister,
            onbutton,showregbtn,showsignbtn,showsigninbutton,showregisterbutton, onsubmitButton1,onroutechange,showname} =this.props
          return(
            <>
               <div className="courier w-90 white mw6 center relative cover bg-top mt2" >
                <article className="br3 bw1 ba b--inherit  mv4 w-100 w-100-m w-100-l mw-100 center shadow-4-ns ">
                <div className="relative pa4 pa5-m">
            <h1 className="serif tracked ma0 mb4 pv3">{heading}</h1>
            <div>
              {showname && (
                <div className="mb3">
                <label htmlFor="username" className="db f6 white-80 ttu ph2 mb2">Name</label>
                <input onChange ={onchangeName} type="text" name="username" className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-30 hover-bg-white-70 hover-gray outline-0 bn br-pill" required/>
              </div>
              )}
              
              <div className="mb3">
                <label htmlFor="username" className="db f6 white-80 ttu ph2 mb2">Email</label>
                <input onChange ={onchangeEmail} type="text" name="username" className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-30 hover-bg-white-70 hover-gray outline-0 bn br-pill" required/>
              </div>
              <div className="mb4">
                <label htmlFor="password" className="db f6 white-80 ttu ph2 mb2">Password</label>
                <input onChange={onchangePassword} type="password" name="password" className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-30 hover-bg-white-70 hover-gray outline-0 bn br-pill" required/>
              </div>
            
              {showregbtn && (
                <div>
                 <button onClick={onsubmitRegister} className="input-reset db w-100 light-gray f6 b ttu tracked pv3 ph3 pointer bg-dark-green hover-bg-blue bn br-pill">Register</button>
                  </div>
              )}
              {showsignbtn &&(
              <div className = "mt5 f4 ">Have an account? <button onClick= {onbutton} className="input-reset db w-100 light-gray f6 b ttu tracked pv3 ph3 pointer bg-dark-pink hover-bg-yellow bn br-pill">Signin</button></div>
              )}
              {showsigninbutton && (
                 <button
                 onClick={onsubmitButton1}
                 className="input-reset db w-100 light-gray f6 b ttu tracked pv3 ph3 pointer bg-dark-blue hover-bg-blue bn br-pill" >
                 Sign In
               </button>
              )}
              {showregisterbutton && (
                <div className="lh-copy mt3">
                <a
                  onClick={() => onroutechange("register")}
                  href="#0"
                  className="f5 b link dim black db"
                >
                  Register
                </a>
                <a href="#0" className="f5  b link dim black db">
                  Forgot your password?
                </a>
              </div>
              )}   
              </div>
          </div>
                    
                </article>
        </div>
            </>
        )
      
        }
 
    }

export default Duplicate;
