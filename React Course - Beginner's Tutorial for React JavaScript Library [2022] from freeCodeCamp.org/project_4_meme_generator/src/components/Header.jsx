import React from "react";

import "../styles/Header.css"
import "../styles/HeaderMobile.css"

import Logo from "../images/Logo.png"

export default function Header () {

    return(
        <header className="Header">

            <nav className="Nav Container">
                <img src={Logo} className="Logo-nav" />
                <p className="Info-nav">React Course - Project 4</p>
            </nav>

        </header>
    )
}