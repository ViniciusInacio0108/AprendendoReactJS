import React from "react";
import './filho'
import Filho from "./filho";

export default props =>

    // o {...props passa todas as propriedades do pai para o filho que nesse caso é o paramentro sobrenome que existe no app.jsx}
    // Já o segundo exemplo ao invés de passar todos os props ele passa somente o que voce selecionou, nesse caso o sobrenome


    <div>
        <Filho {...props}>
            <strong>João</strong>
        </Filho>
        <Filho sobrenome={props.sobrenome}>
            Maria
        </Filho>
        <Filho sobrenome="Silva">
            Pedro
        </Filho>
    </div>