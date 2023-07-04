import React from 'react';
import './register.css'


const Register =({onroutechange})=>{
    return(
        <>
           <div className="courier w-90 white mw6 center relative cover bg-top mt2" >
            <article className="br3 bw1 ba b--inherit  mv4 w-100 w-100-m w-100-l mw-100 center shadow-4-ns ">
            <div className="relative pa4 pa5-m">
        <h1 className="serif tracked ma0 mb4 pv3">Register</h1>
        <form action="" id="login" className="">
          <div className="mb3">
            <label htmlFor="username" className="db f6 white-80 ttu ph2 mb2">Name</label>
            <input type="text" name="username" className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-30 hover-bg-white-70 hover-gray outline-0 bn br-pill"/>
          </div>
          <div className="mb3">
            <label htmlFor="username" className="db f6 white-80 ttu ph2 mb2">Email</label>
            <input type="text" name="username" className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-30 hover-bg-white-70 hover-gray outline-0 bn br-pill"/>
          </div>
          <div className="mb4">
            <label htmlFor="password" className="db f6 white-80 ttu ph2 mb2">Password</label>
            <input type="password" name="password" className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-30 hover-bg-white-70 hover-gray outline-0 bn br-pill"/>
          </div>
          <div>
            <button onClick={()=>onroutechange('signinform')} className="input-reset db w-100 light-gray f6 b ttu tracked pv3 ph3 pointer bg-dark-green hover-bg-blue bn br-pill">Register</button>
          </div>
        </form>
      </div>
                
            </article>


    </div>

        </>
    )
}

export default Register;