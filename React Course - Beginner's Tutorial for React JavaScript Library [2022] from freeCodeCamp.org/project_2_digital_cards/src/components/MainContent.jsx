import React from "react";

import "../styles-components/maincontent.css"

import { FaEnvelope } from "react-icons/fa";

function Name () {
    return (
        <h2 className="Name">
            Vinícius Inácio
        </h2>
    )
}

function Job () {
    return (
        <h2 className="Job">
            Frontend Developer
        </h2>
    )
}

function EmailButton () {
    return(
        <button type="button" className="Button">
            <FaEnvelope className="Email-Icon"/> Email
        </button>
    )
}

function About () {
    return (
        <div className="Details">
            <div className="About">
                <h3 className="Tittle-About">
                    About
                </h3>
                <p className="Text-About">
                I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
                </p>
            </div>
            <div className="Interests">
                <h3 className="Tittle-About">
                    Interests
                </h3>
                <p className="Text-About">
                Food expert. Music scholar. Internet fanatic. Entrepreneur. Car guy. Coca-Cola enthusiast.
                </p>
            </div>
        </div>
    )
}

export default function MainContent () {
    return(
        <div className="MainContent">
            <div className="Info-Group">
                <Name />
                <Job />
                <EmailButton/>
            </div>
            <About />
        </div>
    )
}