import React from "react";

// import do css
import "./Footer.css"

export default (props) => {
    return (
        <div className="Footer">

            <div className="Menus_footer">

                <a className="Links_Menu" href="#">Home</a>
                <a className="Links_Menu"  href="#">Produtos</a>
                <a className="Links_Menu" href="#">Contato</a>
                <a className="Links_Menu" href="#">Sobre</a>
                <a className="Links_Menu" href="#">Cadastre-se</a>
            </div>

            <div className="Contatos">
                <p className="Endereco">
                    Rua Senhor louvado, 123. Planalto.
                </p>
                <p className="Cnpj">
                    CNPJ: 123.123.432.123-0001.1
                </p>
            </div>
            
        </div>
    )
}