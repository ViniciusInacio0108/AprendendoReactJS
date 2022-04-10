import React from "react";

//import do css
import "./Capa.css"

export default (props) => {

    return(

        <div className="Capa">

            <div className="Lado_esquerdo">
                <h2 className="Titulo">
                    Sua oportunidade está aqui!
                </h2>

                <p className="Subtitulo">
                    Tudo que você precisa em um só lugar!
                </p>

                <button type='submit' placeholder="Saiba mais" className="Botao_saiba">

                </button>
            </div>
            
            <div className="Lado_direito">
                <img className="Mulher_capa" src="https://www.designi.com.br/images/preview/10002473.jpg" alt="Capa" />
            </div>

        </div>

    )
}
