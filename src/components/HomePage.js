import React,{Component} from "react";
import Contenu1 from './Contenu1';
import Contenu2 from './Contenu2';
import Contenu3 from './Contenu3';
import Contenu4 from './Contenu4';



class HomePage extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
        
        <div>
        <Contenu1/>
      <Contenu2/>
    
      <Contenu3/>
      <Contenu4/>


        </div>  );
    }
}
 
export default HomePage;