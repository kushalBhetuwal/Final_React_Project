import React from 'react';
import './imagelinkform.css'

const ImageLinkForm =({onsubmit, onchange})=>{
    return(
       <div>
        <p className="f3">{'This magic brain will detect your face'}</p>
        <div className= "center ">
            <div className= " center w-70 form pa4 br3 shadow-5">
            <input className="f4 pa2 w-70 center" type="text" onChange ={onchange}/>
            <button className=" w-30 grow f3 link ph3 pv2 dib white bg-light-purple shadow-5 b--white pointer" onClick ={onsubmit}>Detect</button>
            </div>
            
        </div>
       </div>
            
        
    )
}
export default ImageLinkForm;