import React, {Component} from "react";
import './Conversor.css'


export default class Conversor extends Component {

    constructor (props) {
        super(props);

        this.state = {
            moedaA_valor: "",
            moedaB_valor: 0,
        }

        this.converter = this.converter.bind(this);

    }

    converter () {
        console.log(this.state)


        //let de_para = `${this.props.moedaA}_${this.props.moedaB}`;
        //let url = `free.currencyconverterapi/api/v5/convert?q=${de_para}&compact=y`
        // nao to usando a API pq ela ta down

        let moedaB_valor = (parseFloat(this.state.moedaA_valor*4.87).toFixed(2))

        this.setState({moedaB_valor})

    }

    render() {
        return (
            <div className="conversor">
                <h2 className="title">{this.props.moedaA} para {this.props.moedaB}</h2>
                <input className='input' type="text" onChange={(event)=>{this.setState({moedaA_valor: event.target.value})}}></input>
                <input className='butao' type="button" value="Converter" onClick={this.converter}></input>
                <h2 className="resultado">Valor convertido é de: {this.state.moedaB_valor}</h2>
            </div>
        )

    }

}