import React, { Component } from "react";

export default class Contador extends Component {

    state = {
        passo: this.props.passo,
        valor: 0
    }

    incrementar = () => {
        this.setState({
            valor: this.state.valor + this.state.passo
        })
    }

    decrementar = () => {
        this.setState({
            valor: this.state.valor - this.state.passo
        })
    }
    
    render() {
        return(
            <div>
                <h2>Contador</h2>
                <label for="passoinput">Passo: </label>
                <input id="passoinput" type="number" 
                value={this.state.passo}
                onChange={e => this.setState({passo: +e.target.value})}    />
                <h4>Valor: {this.state.valor}</h4>

                <div>
                    <button onClick={this.incrementar}>+</button>
                    <button onClick={this.decrementar}>-</button>
                </div>

            </div>
        )
    }
}