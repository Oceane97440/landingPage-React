import React,{Component} from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Menus from './components/Menus';
import HomePage from './components/HomePage';
import Services from './components/Services';
import Propos from './components/Propos';
import Contacts from './components/Contacts';
import Footer from './components/Footer';


class App extends Component {

  render() { 
    return (  

  

    
    <BrowserRouter>
      <> {/* éviter les div qui ne servent à rien utilisez Fragment */}
      
        <Menus/>
        <Route exact path="/" component={HomePage} />
        <Route path="/services" component={Services} /> 
        <Route path="/propos" component={Propos} /> 
        <Route path="/contact" component={Contacts} /> 
      </>
  </BrowserRouter>


   
  );
  }
}
 


export default App;
