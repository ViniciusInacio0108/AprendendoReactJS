import React from "react";

import "../styles/Cards.css"

import Card from "./Card";

import cardData from "../cardData.js";

export default function Cards() {

    const card_data = cardData.map
        ((data)=>
            <Card 
                key={data.Id}
                Image={data.Image}
                Status={data.Status}
                Stars={data.Stars}
                Reviews={data.Reviews}
                Location={data.Location}
                Name={data.Name}
                Price={data.Price}
                Type={data.Type}
            />
        )

    return (
        <div className="Cards-Display Conteiner">
            {card_data}
        </div>
    )
}