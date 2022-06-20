import React from "react";

import "../styles/Card.css"

import Star from "../images/star.png"


export default function Card (props) {

    return (
        <div className="Card">
            
            <div className="Image-And-Status">

                <img src={require("../images/"+props.Image)} className="Image-Card" />

                <div className="Status-Card">{props.Status.toUpperCase()}</div>

            </div>

            <div className="Infos-About-The-Experience">
                <span className="Avaliation-Card">
                    <img src={Star} className="Star" />
                    {props.Stars} ({props.Reviews}) * {props.Location}</span>

                <span className="Name-Card">{props.Name}</span>

                <span className="Price-And-Type-Card"><b className="Bold">From ${props.Price}</b> / {props.Type}</span>
            </div>
        </div>
    )
}