import React,{Component} from "react";
import { Link, NavLink } from 'react-router-dom';

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
        <li><a className="list-menu" href="#">Accueil |</a></li>
        <li><a className="list-menu" href="#">Nos services |</a></li>
        <li><a className="list-menu" href="#">À propos de nous |</a></li>
        <li><a className="list-menu" href="#">Contactez nous</a></li>
        

      </ul>
      <ul id="btn-connexion">
      <li><button className="btn-login">Connexion</button></li>
     <li><button className="btn-register">Inscription</button></li>
      </ul>
      
    </nav>
        
        );
    }
}
 
export default Menus;