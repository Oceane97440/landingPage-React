import React,{Component} from "react";

class Contenu2 extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div id="section2">
                <ul className="creation">
                    <li className="item"><p style={{color:"#ff5722",fontWeight:"600"}}>Création site web</p></li>
                    <li className="item"><h2>Lancez-vous! Commencer a créer votre site web</h2></li>
                    <li className="item" style={{ display: "flex",justifyContent: "flex-start",position: "relative"}}><p className="number" style={{marginRight: "20%"}}>
                    <img className="ver-nbr" src={process.env.PUBLIC_URL + "bar.svg"}/>

                        7.45K</p><p className="number"> 200+</p></li>

                </ul>
                <ul>

                     <p style={{fontSize:"1.9vw",fontWeight: 200}}>Vous êtes une entreprise, un artisan, un commerçant, une association, une collectivité et vous souhaitez développer votre visibilité sur le web ? Vous avez besoin d’un site internet pour présenter votre activité ou vos produits ?<br></br><br></br>
Nous sommes à votre écoute pour vous accompagner dans votre projet de création de site internet.   Nous vous proposons un large choix de sites internet adaptés à vos besoins et à votre budget.  Notre agence est spécialisée dans la conception de site internet et le référencement naturel.</p>
                </ul>
          
            </div>
        );
    }
}
 
export default Contenu2;