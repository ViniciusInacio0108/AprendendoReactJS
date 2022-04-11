import React from "react"

//css import
import "./Header.css"
// import da logo
import Logo from "./Logo/Logo"
// import do menu
import Menu from "./Menu/Menu"

export default (props) => {
    return(
        <div className="Header">
            
            <Logo></Logo>

            <Menu/>
                    
        </div>
    )
}