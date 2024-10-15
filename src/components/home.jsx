import React from "react";
import "../stylesheets/home.css";

export default function Home({logo}) {
    return (
        <div>
            <p id='ark'>ARK EMPIRE</p>
            <img src={logo} alt='' id='logo'/>
            <link rel="stylesheet" href="./stylesheets/logo.css"></link>
            <p id='start'>appuyer pour commencer</p>
        </div>
    );
}