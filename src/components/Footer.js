import React,{Component} from "react";

class Footer extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
        
        <div id="footer">
            <div className="group-footer">

            <ul className="menu">
                <li className="item-head">Menus :</li>
                <li className="item-footer">Home</li>
                <li className="item-footer">Nos services</li>
                <li className="item-footer">À propos de nous</li>
                <li className="item-footer">Contactez nous</li>


            </ul>

            <ul className="reseau">
                <li className="item-footer-reseau"><img className="reseau-img" src={process.env.PUBLIC_URL + "likedin.png"}/></li>
                <li className="item-footer-reseau"><img className="reseau-img" src={process.env.PUBLIC_URL + "instagram.png"}/></li>

            </ul>

            
            </div>
          

          


        </div> 
        
        );
    }
}
 
export default Footer;