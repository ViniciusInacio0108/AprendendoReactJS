import React from "react";

import "../styles-components/footer.css"

import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export default function Footer () {
    return(
        <div className="Footer">

            <a href="" className="Footer-Links">
                <FaTwitterSquare className="Footer-Icons"/>
            </a>

            <a href="" className="Footer-Links">
                <FaFacebookSquare className="Footer-Icons"/>
            </a>

            <a href="" className="Footer-Links">
                <FaInstagramSquare className="Footer-Icons"/>
            </a>

            <a href="" className="Footer-Links">
                <FaLinkedin className="Footer-Icons"/>
            </a>

            <a href="" className="Footer-Links">
                <FaGithubSquare className="Footer-Icons"/>
            </a>

        </div>
    )
}