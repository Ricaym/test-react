import React from "react";
import "../stylesheets/home.css";

export default function Start({logo}) {
    return (
        <div>
            <a href="/loading"><div></div></a>
                <img src={logo} alt='' id='logo'/>
                <link rel="stylesheet" href="./stylesheets/logo.css"></link>
                <p id='start'>appuyer pour commencer</p>
            
        </div>
    );
}