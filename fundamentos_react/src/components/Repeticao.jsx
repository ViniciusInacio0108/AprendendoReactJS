import React from "react";

import produtos from './data/produtos'
import './Repeticao.css'


export default props => {

    function getProdutosListItem() {
        return produtos.map(prod => {
            return <li key={prod.id}>
                {prod.id} - {prod.nome} - R$ {prod.preco.toFixed(2)}
                </li>
        })
    }

        return (
            <div>
                <h2>Repetição</h2>
                <ul className="ListProdutos">
                    {getProdutosListItem()}
                </ul>
            </div>
        )
}