import React from "react";
import ReactDOM from "react-dom";

import './index.css'
import './components/primeiro'

import Primeiro from "./components/primeiro";
import ComParametro from "./components/ComParametro";
import ComFilhos from './components/ComFilhos';
import Card from './components/layout/Card';

import './App.css'
import Repeticao from "./components/Repeticao";
import Condicional from "./components/Condicional";
import CondicionalComIf from "./components/CondicionalComIf";

export default props =>


ReactDOM.render(
    // a div é usada pois nao se pode usar dois componentes juntos sem div ou sem tag vazia

    <div className="App">

        <Card titulo="#06 - Condicional com if v2">
            <CondicionalComIf numero={11}></CondicionalComIf>
        </Card>

        <Card titulo="#05 - Condicional v1">
            <Condicional numero={10}></Condicional>
        </Card>

        <Card titulo="#04 - Repetição">
            <Repeticao></Repeticao>
        </Card>

        <Card titulo="#03 - Teste do componente com Children">
        <ComFilhos>
            <ul>
                <li>
                    Ana
                </li>
                <li>
                    Bia
                </li>
                <li>
                    Carlos
                </li>
            </ul>
        </ComFilhos>
        </Card>

        <Card titulo="#02 - Teste do componente com paramentro">
            <ComParametro titulo="Esse é o titulo"
            subtitulo="Esse é o subtítulo"/>
            {/*O fato de ter dois componentes iguais que nesse caso é o ComParametro mas mostrando conteúdos diferentes é justamente pelo uso do props dentro do jsx do componente*/}
            <ComParametro titulo="Opa"
            subtitulo="Epa"/>
        </Card>

        <Card titulo="#01 - Primeiro componente">
            <Primeiro></Primeiro>
        </Card>

    </div>,
    document.getElementById('root')
)