import React from "react"

//css import
import "./Header.css"

export default (props) => {
    return(
        <div className="Header">
            
            <div>
                <img className="Logo" src="https://w7.pngwing.com/pngs/219/256/png-transparent-phoenix-logo-flame-football-s-daquan-leaf-flower-symbol.png"></img>
            </div>

            <div className="Menu_Header">
                <a className="Links_Menu" href="#">Home</a>
                <a className="Links_Menu"  href="#">Produtos</a>
                <a className="Links_Menu" href="#">Contato</a>
                <a className="Links_Menu" href="#">Sobre</a>
                <a className="Links_Menu" href="#">Cadastre-se</a>
            </div>
                    
        </div>
    )
}