import "../../assets/Style/About.css"
import momento from "../../assets/IMG/momento.jpg"
import Navbar from "../Navbar"
import React from 'react';


function About() {
    return (
        <>
            <Navbar />
            <div className="about-container">
                <h1>Sobre Nosotros</h1>
                <p className="about-description">
                    Musical Legends Es un Lugar donde
                    Aprenderas a Desarrollar tu voz dandote una pequeña orientacion
                    de Tus Primeros Pasos para entrar al mundo de la musica
                    Somos una Empresa Con el Objectivo de Ayudarte a Alcanzar tus metas
                    Necesitas alguien que te guie En tu Camino Musical ¡Cuenta Con nosotros!
                    En Musical Legends Tendras Una Experiencia Unica y Agradable
                </p>

             <div className="img-container">
            <img src={momento}></img>
        </div>
            </div>
        </>
    );
}

export default About;

