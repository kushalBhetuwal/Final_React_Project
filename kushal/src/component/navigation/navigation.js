import React from 'react'; 

const Navigation =({onroutechange, onbuttondelete})=>{
    return(
        <nav className = "ma0 mt0">
    
            <p onClick ={()=>{onroutechange("signout")}} style ={{display:'flex', justifyContent: 'flex-end'}}className = "f3 pa3 underline  dim pointer white-80">Sign Out</p>
            <p onClick ={onbuttondelete} style = {{display:'flex', justifyContent: 'flex-end'}} className = "f5 pa3 underline dim pointer yellow">Delete My account</p>
        </nav>
    )
}

export default Navigation;
