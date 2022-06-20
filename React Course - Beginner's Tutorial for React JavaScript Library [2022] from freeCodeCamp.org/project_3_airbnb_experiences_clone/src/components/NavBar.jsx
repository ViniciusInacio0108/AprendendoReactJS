import React from "react";

import Logo from "../images/airbnb_logo.png"

import "../styles/NavBar.css"

export default function NavBar () {
    return (
        <nav className="Nav">

            <img
            src={Logo}
            className="Logo Conteiner" />

        </nav>
    )
}