import React,{Component} from "react";

class Contenu4 extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 

            <div id="section3">
            <ul className="business">
                <li className="item"><p style={{color:"#ff5722",fontWeight:"600"}}>Business</p></li>
                <li className="item"><h2>Vous souhaitez développer votre entreprise ?</h2></li>
                <li className="item" style={{ display: "flex",justifyContent: "flex-start"}}><p className="number" style={{marginRight: "11%",fontWeight: 200, color: "#e8e5e5",fontSize:"large"}}>

                Nous vous accompagnons dans la réalisation de votre projet.
Nous vous aidons à élaborer votre business plan et à définir votre stratégie commerciale.</p></li>

                <li><button className="btn-devie"> Contactez-nous</button></li>


            </ul>
            <ul>

            <img className="woman" src={process.env.PUBLIC_URL + "woman.png"}/>

            </ul>
      
        </div>

         );
    }
}
 
export default Contenu4;