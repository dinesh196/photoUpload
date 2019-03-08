// import React, { Component } from 'react';


// class Camera extends Component {
 
//   render() {
//     return (
//       <div>Dinesh</div>
//     );
//   }
// }

// export default Camera;
import React,{ Component } from 'react'
import Webcam from "react-webcam";



class Camera extends Component{

    constructor(props){
        super(props);
        this.state={
            facingMode: "user",
        }
       
    };

    setRef = webcam => {
        this.webcam = webcam;
      };
     
    capture = () => {
        const imageSrc = this.webcam.getScreenshot();
        console.log(imageSrc);
        // var data = new FormData();

        // const payload ={
        //     image: imageSrc,
        // } 
        // data.append("myLund",JSON.stringify(payload));
        // POST REQUEST
//         fetch('http://localhost:8083/students/', {
//     method: 'POST',
//     body: data
// })
        var image = new Image();
        image.src = 'data:image/png;base64,iVBORw0K...';
        document.body.appendChild(image);
      };
    
     
    
    
    render() {
        // const videoConstraints = {
        //     width: 1280,
        //     height: 720,
        //     facingMode: "user"
        //   };
        return(
            <div>
                <Webcam
                 audio={false}
                 height={350}
                 ref={this.setRef}
                 screenshotFormat="image/jpeg"
                 width={350}
                 />
                 <button onClick={this.setCamera} > Back Camera </button>
                 <button onClick={this.capture}>Capture photo</button>
            </div>
        );
    }
}


export default Camera;