import React from "react";
import brain from "./brain.png";
import { Tilt } from 'react-tilt';
import './logo.css'

const defaultOptions = {
	perspective:    1000
}
const Logo =()=>{
    return (
            <Tilt options={defaultOptions} style={{ height: 100, width: 100 }}>
      <div><img className = "logo ml3 mt0 pa3"src = {brain} alt = "technology"/></div>
    </Tilt>
            
        
    )
}

export default Logo;