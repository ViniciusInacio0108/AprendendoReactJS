import React from "react";

import ImageExperiences from "../images/experiences_art.png"

import '../styles/ExperiencesArt.css'

export default function ExperiencesArt () {
    return (
        <section className="Experiences-Art">
            
            <img 
            src={ImageExperiences}
            className="Image" />
            
            <div className="Online-Experiences Conteiner">

                <h1 className="Tittle">Online Experiences</h1>
                <p className="Text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>

            </div>
        </section>
    )
}