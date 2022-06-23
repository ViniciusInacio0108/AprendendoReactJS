import React, { useEffect } from "react";

import "../styles/Form.css"

import "../styles/FormsMobile.css"

import { useState } from "react";

export default function Forms () {

    const [allMeme, setAllMemes] = useState()

    const[meme, setMeme] = useState()

    const[topText, setTopText] = useState("Top Text")

    const[bottomText, setBottomText] = useState("Bottom Text")

    // get the API data and put in a State allMeme
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(memes => {
                return setAllMemes(memes.data.memes), setMeme(memes.data.memes[0].url)
            })
    }, [])

    // function that calls a new memem when the client clicks on the btn
    function get_new_meme () {
        const random_num = Math.floor(Math.random() * allMeme.length)
        setMeme(allMeme[random_num].url)
    }

    //Change top text
    function changeTopText() {
        const topText = document.getElementById("Input-Top").value
        setTopText(topText)
    }

    //Change bottom text
    function changeBottomText() {
        const bottomText = document.getElementById("Input-Bottom").value
        setBottomText(bottomText)
    }

    return (
        <section className="Forms">
            <div className="Inputs">
            <div className="Inputs-box">

                <input  
                    type="text" 
                    placeholder="Type top text"
                    className="Input-1"
                    id="Input-Top"
                    onBlur={changeTopText}
                />

                <input 
                    type="text"
                    placeholder="Type bottom text"
                    className="Input-2"
                    id="Input-Bottom"
                    onBlur={changeBottomText}
                />

                </div>

                <button 
                type="button"
                className="Button-Form"
                onClick={get_new_meme}
                >Get a new meme image!</button>

            </div>

            <div className="Meme-box">
                <img src={meme} className="Meme-rendered"/>
                <p className="Top-txt">{topText}</p>
                <p className="Bottom-txt">{bottomText}</p>
            </div>

        </section>
    )
}