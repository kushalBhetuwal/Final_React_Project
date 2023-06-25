import React from 'react';
import './facerecognition.css';


const FaceRecognition =({imageurl, data})=>{
    return(
        <div className="center mt3">
            <div  className=" absolute" >
            <img id = "elementimg" src = {imageurl} alt = ""  aria-hidden= 'true' width = "500px" height= "auto"/>
            <div className="boundingbox" style={{top:data.top, left:data.left, bottom:data.bottom, right:data.right}}></div>
            </div>
            
        </div>
    )
}

export default FaceRecognition;