import React from "react";
import './Card.css'

export default props =>

    //props é somente para leitura, ele n escreve nada em cima

    <div className="card">

        <div className="conteudo">
            {props.children}
        </div>

        <div className="footer" style={{background:props.color, color:props.letra}}>
            {props.titulo}
        </div>

    </div>