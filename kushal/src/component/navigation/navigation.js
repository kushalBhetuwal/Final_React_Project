import React from 'react'; 

const Navigation =({onroutechange})=>{
    return(
        <nav className = "ma0 mt0">
            <p onClick ={()=>{onroutechange("signinform")}} style ={{display:'flex', justifyContent: 'flex-end'}}className = "f3 pa3 underline  dim pointer white-80">Sign Out</p>
        </nav>
    )
}

export default Navigation;
