import React,{Component} from "react";


class Menus extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
        <nav id="menu" role="navigation">
            <a href="#">logo</a>
      <ul id="nav"> 
        <li><a href="#">About</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
        
        );
    }
}
 
export default Menus;