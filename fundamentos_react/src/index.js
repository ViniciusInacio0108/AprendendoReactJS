import React from "react";
import ReactDOM from "react-dom";

import './index.css'
import './components/basicos/primeiro'

import Primeiro from "./components/basicos/primeiro";
import ComParametro from "./components/basicos/ComParametro";
import ComFilhos from './components/basicos/ComFilhos';
import Card from './components/layout/Card';

import App from './App.jsx'

ReactDOM.render(
    <App></App>,
    document.getElementById('root')
)