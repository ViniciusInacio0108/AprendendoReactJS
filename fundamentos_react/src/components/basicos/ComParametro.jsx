import React from "react";
//o props aqui embaixo é para retirar do parametro do index.html (ex: titulo) a propriedade exata do parametro daquele componente mesmo que tenha mais de um dele
export default props =>

    <>
        <h3>
            {props.titulo}
            {/* O fato de eu usar esse cochetes é justamente para poder pegar os paramentros passados dentro do index.js */}
        </h3>
        <p>
            {props.subtitulo}
            {/* aqui em cima eu coloquei o código entre cochetes por que representa um código em js*/}
        </p>
    </>