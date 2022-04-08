import React from "react";

export default props=> {

    function acaoNoPai() {
        props.onClicar(Math.random(), "Gerado");
    }

    return(
        <div>
            <button onClick={acaoNoPai}>Alterar</button>
        </div>
    )
}
