import React,{Component} from "react";
//import logo from "logo.png"

class Menus extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
        <nav id="menu" role="navigation">
            <ul className="menu-logo">
                
            <a className="logo" href="#">Landing-Page</a>
            </ul>
         
      <ul id="nav"> 
        <li><a className="list-menu" href="#">About |</a></li>
        <li><a className="list-menu" href="#">Products |</a></li>
        <li><a className="list-menu" href="#">Services |</a></li>
        <li><a className="list-menu" href="#">Contact</a></li>
        

      </ul>
      <ul id="btn-connexion">
      <li><button className="btn-login">Login</button></li>
     <li><button className="btn-register"> Register</button></li>
      </ul>
      
    </nav>
        
        );
    }
}
 
export default Menus;