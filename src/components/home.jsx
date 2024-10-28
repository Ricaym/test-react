import React from "react";
import "../stylesheets/home.css";

export default function Home({logo}) {
    return (
        <div>
                <img src={logo} alt='' id='logo'/>
                <p id='select_character'>Selectionner un personnage</p>
        </div>
    );
}