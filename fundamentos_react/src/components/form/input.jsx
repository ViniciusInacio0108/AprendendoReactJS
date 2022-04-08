import React, {useState} from "react";

export default (props) => {

    const [nome, alteraNome] = useState("Pedro")

    // pesquisar sobre controlled component

    // quando coloco o valor dentro do input, ele n pode ser alterado, justamente por isso pesquisar soabre controlled component

    return (

        <>

            <h3>{nome}</h3>
            
            <input type="text" value={nome}
            onChange={e => alteraNome(e.target.value)} />
        </>

    )


}