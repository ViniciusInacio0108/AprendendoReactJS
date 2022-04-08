import React, {useState} from "react";
import Sub from "./Sub";

export default props => {

    // no caso da indireta, vamos ter apenas uma ligacao direta so que do filho para o pai dessa vez
    
    const [texto, setTexto] = useState("Valor")
    const [num, setNum] = useState(0)

    function quandoClicar(valorGerado, texto) {
        setNum(valorGerado)
        setTexto(texto)
    }

    return(
    <div>
        <h4>{texto}: {num}</h4>
        <Sub onClicar={quandoClicar}></Sub>
    </div>
)
}