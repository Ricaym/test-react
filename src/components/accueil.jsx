import React from 'react'
import "../stylesheets/accueil.css";

export default function Accueil({/* react, html, css, js, docker */}) {
    return (
        <div class='articles'>
            <div class='accueil'>
                <p class='p_a'>Aymeric Chassagne</p>
                <p class='p_a'>
                    Bienvenue sur le site internet personnel de Aymeric Chassagne.<br/>

                    Ce site renferme quelques informations, projets, idées à propos de son auteur qui vous a laissé un
                    message afin que vous puissiez mieux vous y retrouver.<br/><br/>

                    Ce site a été développé <span class='blue'>100%</span> à la main en <span class='blue'>react</span>.<br/>

                    Sur ce site vous retrouverez tout d'abord quelques-uns de mes projets personnels et scolaire ainsi que les projets <span class='blue'>Hackathons</span>
                    , des projets que j'ai commencé
                </p>

                {/*<div class='dropdown_a'>
                    <a href='' class='a_a'>Les langages et logiciels que j'ai utilisés pour coder ce site :</a>
                    <div class='dropdown-content_a'>
                        <img src={js} class='js'/>
                        <img src={html} class='html'/>
                        <img src={css} class='css'/>
                        <img src={react} class='react'/>
                    </div>
                </div>*/}
            </div>
        </div>
    )
}
