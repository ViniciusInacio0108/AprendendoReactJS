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

                <button type='submit' className="Botao_saiba">
                    Saiba mais
                </button>
            </div>
            
            <div className="Lado_direito">
                <img src="https://www.designi.com.br/images/preview/10002473.jpg" alt="mulher" />
            </div>

        </div>

    )
}
