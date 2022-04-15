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
                <p>Création de site internet vitrine : présentez votre activité, vos produits et services, votre savoir-faire, vos réalisations.</p>
                <ul id="group-btn-section1"> 
                <li className="item-btn"><button className="btn-devie">Demander un devie</button></li>
                <li className="item-btn"><button className="btn-contact">Contactez-nous</button></li>

                </ul>
                <img className="todo-img" src={process.env.PUBLIC_URL + "todo.png"}/>
            
            </div>
        );
    }
}
 
export default Contenu1;