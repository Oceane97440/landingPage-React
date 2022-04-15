import React,{Component} from "react";

class Video extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div id="block-video">
             
       
                <video  controls  muted="muted">
                <source type="video/mp4"
     src="https://antennesb.fr/wp-content/uploads/2022/03/SPOT_KUB_Tuto-3_16102019.mp4"/>
                </video>

               
    
          
            </div>
        );
    }
}
 
export default Video;