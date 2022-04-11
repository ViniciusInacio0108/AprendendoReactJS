import React from "react";

// import do css
import "./Footer.css"
// import do menu
import MenuFooter from "./Menus_footer/MenusFooter"
// import do contato
import ContatosFooter from "./ContatosFooter/ContatoFooter"

export default (props) => {
    return (
        <div className="Footer">

            <MenuFooter></MenuFooter>
            
            <ContatosFooter></ContatosFooter>
            
        </div>
    )
}