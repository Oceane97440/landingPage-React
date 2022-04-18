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
                
            <a className="logo" href="#">LandingPage</a>
            </ul>
         
      <ul id="nav"> 
        <li><a className="list-menu" href="#">Home |</a></li>
        <li><a className="list-menu" href="#">Nos services |</a></li>
        <li><a className="list-menu" href="#">À propos de nous |</a></li>
        <li><a className="list-menu" href="#">Contactez nous</a></li>
        

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