import React from 'react';
import './imagelinkform.css'

const ImageLinkForm =()=>{
    return(
       <div>
        <p className="f3">{'This magic brain will detect your face'}</p>
        <div className= "center ">
            <div className= " center w-70 form pa4 br3 shadow-5">
            <input className="f4 pa2 w-70 center" type="text"/>
            <button className=" w-30 grow f3 link ph3 pv2 dib white bg-light-purple shadow-5 b--white pointer">Detect</button>
            </div>
            
        </div>
       </div>
            
        
    )
}
export default ImageLinkForm;