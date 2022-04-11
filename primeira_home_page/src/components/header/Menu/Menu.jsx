import React from "react"

//css import
import "./Menu.css"

export default (props) => {
    return(
        <div className="Menu_Header">
            <a className="Links_Menu" href="#">Home</a>
            <a className="Links_Menu"  href="#">Produtos</a>
            <a className="Links_Menu" href="#">Contato</a>
            <a className="Links_Menu" href="#">Sobre</a>
            <a className="Links_Menu" href="#">Cadastre-se</a>
        </div>
    )
}