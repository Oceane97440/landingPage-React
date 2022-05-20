import React,{Component} from "react";

class Contenu3 extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
        
        <div>
         <div id="services">
            <p style={{color:"#ff5722"}}> Nos services</p> 

            <h3>De quoi avez-vous besoin ?</h3> 

            <div id="row">
                <div className="card">
                <img className="bar" src={process.env.PUBLIC_URL + "bar.svg"}/>
                <img className="ver" src={process.env.PUBLIC_URL + "bar.svg"}/>

                    <ul className="element-card">
                        <li className="item-card">

                        <img className="img-svg"  style={{width:"16%"}}  src={process.env.PUBLIC_URL + "creative.svg"}/>
                        </li>
                        <li  className="item-card"><h4>Interface créative</h4></li>
                        <li  className="item-card-p"><p>Nos experts webdesigner sont à l’écoute de vos besoins . Nous vous proposons des idées créatives innovantes qui s’adaptent à votre identité et respecte votre budget</p></li>
                    </ul>
                  

                </div>
                <div className="card">
                <img className="bar" src={process.env.PUBLIC_URL + "bar.svg"}/>
                <img className="ver" src={process.env.PUBLIC_URL + "bar.svg"}/>

                    <ul className="element-card">
                        <li className="item-card"> 
                        <img className="img-svg" src={process.env.PUBLIC_URL + "web.svg"}/></li>
                        <li  className="item-card"><h4>Développement web</h4></li>
                        <li  className="item-card-p"><p>Nous nous occupons de la création du site, du design, de la mise en ligne et de son référencement. <br></br>Nous proposons le suivi et l’accompagnement client.   </p></li>
                    </ul>
                  

                </div>
                <div className="card">
                <img className="bar" src={process.env.PUBLIC_URL + "bar.svg"}/>
                <img className="ver" src={process.env.PUBLIC_URL + "bar.svg"}/>

                    <ul className="element-card">
                        <li className="item-card">
                            <img className="img-svg" src={process.env.PUBLIC_URL + "marketing.svg"}/>
                        </li>
                        <li  className="item-card"><h4>Marketing digital</h4></li>
                        <li  className="item-card-p"><p>Nous mettons tout en œuvre pour comprendre vos marchés et pour créer des produits et des services qui vous aideront à répondre à ces défis, devenir un acteur influent dans votre secteur.</p></li>
                    </ul>
                  

                </div>
             
                <div className="card">
                <img className="bar" src={process.env.PUBLIC_URL + "bar.svg"}/>
                <img className="ver" src={process.env.PUBLIC_URL + "bar.svg"}/>

                    <ul className="element-card">
                        <li className="item-card">                        
                        <img className="img-svg" src={process.env.PUBLIC_URL + "campaign.svg"}/>
                        </li>
                        <li  className="item-card"><h4>Campagne digitale</h4></li>
                        <li  className="item-card-p"><p>Nous sélectionnons les outils les plus adaptés pour votre objectif, votre cible et votre budget afin de maximiser les résultats. Nous donnons un coup d’accélérateur à votre communication !</p></li>
                    </ul>
                  

                </div>
                <div className="card">
                <img className="bar" src={process.env.PUBLIC_URL + "bar.svg"}/>
                <img className="ver" src={process.env.PUBLIC_URL + "bar.svg"}/>

                    <ul className="element-card">
                        <li className="item-card">                        
                        <img className="img-svg" src={process.env.PUBLIC_URL + "camera.svg"}/>
                        </li>
                        <li  className="item-card"><h4>Audiovisuel</h4></li>
                        <li  className="item-card-p"><p>Nos réalisons tous vos projets audiovisuels (bilboard). Nous apportons un soin particulier à la qualité du rendu visuel et sonore, afin de garantir la satisfaction de nos clients.</p></li>
                    </ul>
                  

                </div>
                <div className="card">
                <img className="bar" src={process.env.PUBLIC_URL + "bar.svg"}/>
                <img className="ver" src={process.env.PUBLIC_URL + "bar.svg"}/>

                    <ul className="element-card">
                        <li className="item-card">                        
                        <img className="img-svg" src={process.env.PUBLIC_URL + "mob.svg"}/>
                        </li>
                        <li  className="item-card"><h4>Développement mobile</h4></li>
                        <li  className="item-card-p"><p>Nous développons des app mobiles, Android et IOS. Des développements d'applications en langage objet, Java sont également possibles en fonction de la technologie et des projets.</p></li>
                    </ul>
                  

                </div>
            </div>

        </div>   
    
        
        </div>
        
        
    
        );
    }
}
 
export default Contenu3;