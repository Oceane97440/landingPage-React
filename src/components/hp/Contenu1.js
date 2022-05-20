import React,{Component} from "react";

class Contenu1 extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 

            <div id="section1">
                <h1>Agence créative digitale</h1>
                <p>Notre équipe de professionnels vous conseille et vous accompagne tout au long de la réalisation de votre projet de création de site internet.</p>
                <ul id="group-btn-section1"> 
                <li className="item-btn"><button className="btn-devie">Demander un devis</button></li>
                <li className="item-btn"><button className="btn-contact">Contactez-nous</button></li>

                </ul>
                <img className="todo-img" src={process.env.PUBLIC_URL + "todo.png"}/>
            
            </div>
        );
    }
}
 
export default Contenu1;