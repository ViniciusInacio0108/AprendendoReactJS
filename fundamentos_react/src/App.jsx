import React from "react";
import ReactDOM from "react-dom";

import './index.css'
import './components/basicos/primeiro'

import Primeiro from "./components/basicos/primeiro";
import ComParametro from "./components/basicos/ComParametro";
import ComFilhos from './components/basicos/ComFilhos';
import Card from './components/layout/Card';

import './App.css'
import Repeticao from "./components/basicos/Repeticao";
import Condicional from "./components/basicos/Condicional";
import CondicionalComIf from "./components/basicos/CondicionalComIf";
import Pai from "./components/comunicacao/direta/pai"
import Super from "./components/comunicacao/indireta/Super"
import Input from "./components/form/input"
import Contador from "./components/contador/Contador"


export default props =>


ReactDOM.render(
    // a div é usada pois nao se pode usar dois componentes juntos sem div ou sem tag vazia

    <div className="App">

        <Card titulo="#10 - Contador" color="#F4D03F">
            <Contador passo={10}></Contador>
        </Card>

        <Card titulo="#09 - Input" color="#873600">
            <Input></Input>
        </Card>

        <Card titulo="#08 - Comunicacao indireta base de callback (estudar callback)" color="#000">
            <Super></Super>
        </Card>

        <Card titulo="#07 - Comunicacao direta" color="#1A5276">
            <Pai sobrenome="Freitas"></Pai>
        </Card>

        <Card titulo="#06 - Condicional com if v2" color="#FFC300">
            <CondicionalComIf numero={11}></CondicionalComIf>
        </Card>

        <Card titulo="#05 - Condicional v1" color="#FF5733">
            <Condicional numero={10}></Condicional>
        </Card>

        <Card titulo="#04 - Repetição" color="#8E44AD">
            <Repeticao></Repeticao>
        </Card>

        <Card titulo="#03 - Teste do componente com Children" color="#DAF7A6" letra="#900C3F">
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

        <Card titulo="#02 - Teste do componente com paramentro" color="#273746">
            <ComParametro titulo="Esse é o titulo"
            subtitulo="Esse é o subtítulo"/>
            {/*O fato de ter dois componentes iguais que nesse caso é o ComParametro mas mostrando conteúdos diferentes é justamente pelo uso do props dentro do jsx do componente*/}
            <ComParametro titulo="Opa"
            subtitulo="Epa"/>
        </Card>

        <Card titulo="#01 - Primeiro componente" color="#16A085">
            <Primeiro></Primeiro>
        </Card>

    </div>,
    document.getElementById('root')
)