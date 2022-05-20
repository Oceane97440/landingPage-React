import React from "react";
import { Link, NavLink } from 'react-router-dom';

//import logo from "logo.png"




function Menus() {

    return (
      <nav id="menu" className="nav">
            <ul className="menu-logo">

                <Link className="logo" to="/">LandingPage</Link>
            </ul>

            <ul id="nav" className="nav-item">
                <li><Link className="list-menu" to="/">Accueil |</Link></li>
                <li><Link className="list-menu" to="/services">Nos services |</Link></li>
                <li><Link className="list-menu" to="/propos">À propos de nous |</Link></li>
                <li><Link className="list-menu" to="/contact">Contactez nous</Link></li>


            </ul>
            <ul id="btn-connexion">
                <li><button className="btn-login">Connexion</button></li>
                <li><button className="btn-register">Inscription</button></li>
            </ul>

        </nav>
    );
}

export default Menus;