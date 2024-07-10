import React from 'react'
import "../stylesheets/about.css";

export default function Accueil({image}) {
    return (
       
        <div class='id_card'>
            <div class='elements'>
                <p><span class='id_title'>1.<span class='i'>*</span>NAME : </span>AYMERIC</p>
                <p><span class='id_title'>2.<span class='i'>*</span>LAST NAME : </span>CHASSAGNE</p>
                <p><span class='id_title'>3.<span class='i'>*</span>BIRTH DATE : </span>28 / 06 / 2004</p>
                <p><span class='id_title'>4.<span class='i'>*</span>BIRTH PLACE : </span>RENNES. FRANCE</p>

                <p><span class='id_title'>5.<span class='i'>*</span>HOBBIES : </span>IT DEVELOPMENT (web. apps. video games)</p>
            </div>
        </div>
    )
}
